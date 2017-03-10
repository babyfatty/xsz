const Koa = require('koa');
const app = new Koa();
const path = require('path')
const bodyParser = require('koa-bodyparser');
const rp = require('request-promise')
const db = require('./db')
const tool = require('./lib/tool')
const sign = require('wechat-sign')
const md5 = require('js-md5')
const session = require('koa-session');
const convert = require('koa-convert');
const fs = require('fs')
const resolve = file => path.resolve(__dirname, file)
app.keys = ['1232312312312'];
app.use(require('koa-static')(path.join(__dirname, 'dist')))
// app.use(convert(session(CONFIG,app)));
app.use(convert(session(app)));
app.use(bodyParser())

// const router = require('./api')

let n = 1
app.use(async (ctx,next)=>{
  console.log(ctx.originalUrl)
  switch (ctx.originalUrl.split('?')[0]) {
    case '/api/orderedSeats':
      var res = await rp('http://www.xiaohongshu.com/web_api/sns/v1/destination/hottest_cities')
      console.log(res)
      ctx.body = res
      break;
    case '/api/sendSMS':
      let code = tool.genVaryCode(4)
      try {
        var res = await tool.sendMsg(code,ctx)

        ctx.session.code = code
        console.log(ctx.session)
        ctx.body = res
        // statements
      } catch(e) {
        // statements
        ctx.body = e
      }
      break;  
    case '/api/varyCode':
      console.log('1',ctx.query.code)
      console.log('2',ctx.session)
      if(ctx.query.code===ctx.session.code){
        ctx.body = 'success'    
      }else{
        ctx.body = 'fail'
      }
      break;
    case '/api/sessionInfo':
      var session = await db.sessionInfo()
      ctx.body = session
      break;  
    case '/api/addUser':
      console.log(ctx.request.body)
      var param = ctx.request.body

      try {
        var ausr = await db.addUser({
          username: param.name,
          school: param.school,
          grade: param.grade,
          phone: param.phone
        })
        console.log(ausr.dataValues)
        ctx.session.user = ausr.dataValues
        ctx.body = {
          user:ausr.dataValues,
          success:true
        } 
      } catch(e) {
        // statements
        ctx.body = {
          success:false
        }
        console.log(e);
      }
      
      break;
    case '/api/unifiedorder':
        let genChar = function(){
          return md5(new Date().getTime()).substring(0, 32)
        }
        let getIP = function(){
          console.log(ctx.socket.remoteAddress.split(':').slice(-1)[0])
          // return '10.12.6.80'
          return ctx.socket.remoteAddress.split(':').slice(-1)[0]
        }
        var payload = {
          appid:'wx829b884172f246ea',
          body:'橡树籽讲座报名',
          mch_id:'1446670502',
          nonce_str:genChar(),
          notify_url:'http://xesfun.com/xsz/#/',
          // openid:ctx.session.openid.openid,
          openid:'obpzlvsvow6bBKbxj8Dnk3O5PbOM',
          out_trade_no:genChar(),
          spbill_create_ip:getIP(),
          total_fee:8888,
          trade_type:'JSAPI'
        }
        // 统一下单接口签名
        let genSign = function(){ 
          var stringA="";
          for(var i in payload){
            stringA+=i+'='+payload[i]+'&'
          }
          var stringSignTemp=stringA+"key=d41d8cd98f00b204e9800998ecf8427e"
          console.log(stringSignTemp)
          var sign=md5(stringSignTemp).toUpperCase()
          return sign
        }
        
        //统一下单接口 参数
        var params = Object.assign({sign:genSign()},payload)
        console.log('params',params)
        var out  = '<xml>'+await tool.toXml(JSON.stringify(params))+'</xml>'
        console.log(out)
        //通过统一下单接口获取package
        var xml = await rp({
                method: 'POST',
                headers: { 'Content-Type':'text/xml; charset=utf-8' },
                uri: 'https://api.mch.weixin.qq.com/pay/unifiedorder',
                body: out
            })
        xml = ""+xml+""
        console.log('xml',xml)
        var res = JSON.parse(await tool.toJson(xml))
        console.log(res)
        ctx.body = res.xml.prepay_id
      break;  
    case '/api/checkLogin':
      var user = ctx.session.user
      console.log('user',user)
      if(!!user){
        ctx.body = {
          success:true,
          user : user
        }
      }else{
        ctx.body = {
          success:false
        }
      }
      break;
    case '/api/sign':  
      var ACCESS_TOKEN = await rp('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx829b884172f246ea&secret=36a0109564e755f9ad96322a835d0d07')
      var requestUrl = 'https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token='+ACCESS_TOKEN.access_token+'&type=jsapi'
      let jsapiTicket = await rp(requestUrl)
      let url = ctx.query.url
      var res = await sign(jsapiTicket.ticket,url)
      var openid = ctx.session.openid
      ctx.body = Object.assign(res,{openid:openid})
      break;
    case '/api/accessToken': 
      ctx.body = await rp('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx829b884172f246ea&secret=36a0109564e755f9ad96322a835d0d07')
    case '/api/jsApiTkt':  
      var ACCESS_TOKEN = await rp('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx829b884172f246ea&secret=36a0109564e755f9ad96322a835d0d07')
      var tempurl = 'https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token='+ACCESS_TOKEN.access_token+'&type=jsapi'
      ctx.body = await rp(tempurl)
      break;
    default:
        // var code = '0219qaJ21jPNZM1D9GK21S0rJ219qaJO'
        var wxcode = ctx.query.code
        console.log('wxcode',wxcode)
        if(!!wxcode){
          var openidParams = {
            secret:'36a0109564e755f9ad96322a835d0d07',
            code:wxcode,
            appid:'wx829b884172f246ea',
            grant_type:'authorization_code'
          }
          var openidUrl = 'https://api.weixin.qq.com/sns/oauth2/access_token?grant_type=authorization_code&appid=wx829b884172f246ea&secret=36a0109564e755f9ad96322a835d0d07&code='+wxcode
          var openid = await rp(openidUrl)
          console.log('openid',openid)
          ctx.session.openid = openid
          // ctx.redirect(ctx.originalUrl.split('?')[0]+'?openid='+openid)
        }
        const template = fs.readFileSync(resolve('./dist/static/index.html'), 'utf-8')
        ctx.body = template
      // statements_def
      break;
  }
  next()
})
app.on('error', (err, ctx) =>
  console.log('server error', err, ctx)
);
var opt ={}
// app
//   .use(router.routes())
//   .use(router.allowedMethods());

app.listen(8889);

console.log('listening from port 8889')