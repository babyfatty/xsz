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
const ip = require('ip')
const resolve = file => path.resolve(__dirname, file)
app.keys = ['1232312312312'];
app.use(require('koa-static')(path.join(__dirname, 'dist')))
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
        var res = await tool.sendMsg(code,ctx.query.phone)
        ctx.session.code = code
        console.log(ctx.session)
        ctx.body = res
        // statements
      } catch(e) {
        // statements
        ctx.body = e
      }
      break; 
    case '/api/sendNotice':
      try {
        console.log('params',ctx.query.param)
        var res = await tool.sendNotice(ctx.query.param,ctx.query.phone)
        ctx.body = res
        // statements
      } catch(e) {
        // statements
        ctx.body = e
      }
      break;   
    case '/api/varyLogin':
      console.log('1',ctx.query.code)
      console.log('2',ctx.session)
      if(ctx.query.code===ctx.session.code){
        let userFind = await db.findUserByPhone(ctx.query.phone)
        if(!!userFind){
          ctx.body = {success:true,user:userFind}              
        }else{
          ctx.body = {success:false,msg: "此号码尚未注册"}    
        }
      }else{
        ctx.body = {success:false,msg:"验证码错误"}  
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
      console.log('2',ctx.session)
      var param = ctx.request.body
      if(param.code!==ctx.session.code){
        ctx.body = {
          success:false,
          msg:"验证码错误"
        }
        return    
      }
      try {
        // statements
        let hasUser = await db.findUserByPhone(param.phone) 
        console.log(hasUser)
        if(!!hasUser){
          ctx.body = {
            success:false,
            msg:"手机号已被注册"
          }
          return 
        }       
      } catch(e) {
        // statements
        console.log(e);
      }
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
          success:false,
          msg:"fail"
        }
        console.log(e);
      }
      
      break;
    case '/api/bookedSeats':
      try {
        // statements
        var booked = await db.bookedSeats()
        console.log('booked',booked)
        ctx.body = booked
      } catch(e) {
        // statements
        console.log(e);
      }
      break;  
    case '/api/buyTicket':
      console.log(ctx.request)
      console.log(ctx.query)
      console.log(ctx)
      break;  
    case '/api/unifiedorder':
        // console.log(ip.address())
        console.log('openid',JSON.parse(ctx.session.openid).openid)
        var payload = {
          appid:'wx829b884172f246ea',
          body:'橡树籽讲座报名',
          mch_id:'1446670502',
          nonce_str:md5(new Date().getTime()).substring(0, 32),
          notify_url:'http://xesfun.com/xsz/api/buyTicket',
          openid:JSON.parse(ctx.session.openid).openid,
          // openid:'obpzlvsvow6bBKbxj8Dnk3O5PbOM',
          out_trade_no:Math.floor((new Date().getTime()*Math.random()*Math.random()*100000))+"",
          spbill_create_ip:ip.address(),
          total_fee:1,
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
        var out  = await tool.toXml(JSON.stringify(params))
        console.log(out)
        //通过统一下单接口获取package
        var xml = await rp({
            method: 'POST',
            headers: { 'Content-Type':'text/xml; charset=utf-8' },
            uri: 'https://api.mch.weixin.qq.com/pay/unifiedorder',
            body: out
        })
        console.log('xml',xml)
        var xmlJson = await tool.toJson(xml.toString())
        console.log(xmlJson)
        ctx.body = {
          transId:payload.out_trade_no, 
          package:xmlJson.xml.prepay_id
        }
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
      ACCESS_TOKEN = JSON.parse(ACCESS_TOKEN)
      console.log(ACCESS_TOKEN)
      var requestUrl = 'https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token='+ACCESS_TOKEN.access_token+'&type=jsapi'
      let jsapiTicket = await rp(requestUrl)
      jsapiTicket = JSON.parse(jsapiTicket)
      console.log(jsapiTicket)
      let url = ctx.query.url
      var res = await sign(jsapiTicket.ticket,url)
      // var openid = ctx.session.openid
      ctx.body = res
      console.log('body',ctx.body)
      break;
    case '/api/accessToken': 
      ctx.body = await rp('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx829b884172f246ea&secret=36a0109564e755f9ad96322a835d0d07')
    case '/api/jsApiTkt':  
      var ACCESS_TOKEN = await rp('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx829b884172f246ea&secret=36a0109564e755f9ad96322a835d0d07')
      var tempurl = 'https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token='+ACCESS_TOKEN.access_token+'&type=jsapi'
      ctx.body = await rp(tempurl)
      break;
    case '/api/viewOrders':
      try {
        // statements
        var orders = await db.viewOrders()
        console.log('orders',orders)
        ctx.body = orders
      } catch(e) {
        // statements
        console.log(e);
      }
      break;  
    case '/api/savePay':
      var payParam = ctx.request.body
      console.log("payParam",payParam)
      try {
        // statements
        var payInfo = await db.addPayment(payParam)
        ctx.body = {
          success:true,
          payInfo:payInfo
        }
      } catch(e) {
        // statements
        ctx.body = {
          success:false,
          msg:e
        }
      }
      break;
    default:
        // var code = '0219qaJ21jPNZM1D9GK21S0rJ219qaJO'
        var wxcode = ctx.query.code
        console.log('wxcode',wxcode)
        if(!!wxcode){
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