const router = require('koa-router')()

// const converter = require('jstoxml')
// const parse = require('xml2json')
router
.post('/api/addUser', async function (ctx, next) {
    console.log(ctx.request.body)
    ctx.body = 123
})
.get('/api/unifiedorder',async function(ctx,next){
// get code 
// https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx829b884172f246ea&redirect_uri=http://xesfun.com/xsz/&response_type=code&scope=snsapi_base&state=123#wechat_redirect

//get access_token&openid
	var code = '0219qaJ21jPNZM1D9GK21S0rJ219qaJO'
	var openidParams = {
		secret:'36a0109564e755f9ad96322a835d0d07',
		code:code,
		appid:'wx829b884172f246ea',
		grant_type:'authorization_code'
	}
	var openidUrl = 'https://api.weixin.qq.com/sns/oauth2/access_token?grant_type=authorization_code&appid=wx829b884172f246ea&secret=36a0109564e755f9ad96322a835d0d07&code='+code
	var openid = await rp(openidUrl)
	console.log('openid',openid)

	let genChar = function(){
		return md5(new Date().getTime()).substring(0, 32)
	}
	let getIP = function(){
		console.log(ctx.socket.remoteAddress.split(':').slice(-1)[0])
		return '10.12.6.80'
		//return ctx.socket.remoteAddress.split(':').slice(-1)[0]
	}
	var payload = {
		appid:'wx829b884172f246ea',
		body:'橡树籽讲座报名',
		mch_id:'1446670502',
		nonce_str:genChar(),
		notify_url:'http://xesfun.com/xsz/#/',
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
	var out  = '<xml>'+converter.toXML(params)+'</xml>'

	//通过统一下单接口获取package
	var res = JSON.parse(parse.toJson(await rp({
			    method: 'POST',
			    headers: { 'Content-Type':'text/xml; charset=utf-8' },
			    uri: 'https://api.mch.weixin.qq.com/pay/unifiedorder',
			    body: out
			})))
	console.log(res)
	ctx.body = res.xml.prepay_id
	ctx.body = "prepay_id=wx20170309103609c6b573f9330090668432"

})
.get('/api/orderedSeats',async function(ctx,next){
		var res = await rp('')
		console.log(res)
		ctx.body = res
})
.get('/api/varyCode',function(ctx,next){
	console.log('1',ctx.query.code)
	console.log('2',ctx.session.code)
	if(ctx.query.code===ctx.session.code){
		ctx.body = 'success'		
	}else{
		ctx.body = 'fail'
	}
})
.get('/api/sign',async function(ctx,next){
	var ACCESS_TOKEN = await rp('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx829b884172f246ea&secret=36a0109564e755f9ad96322a835d0d07')
	var requestUrl = 'https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token='+ACCESS_TOKEN.access_token+'&type=jsapi'
	let jsapiTicket = await rp(requestUrl)
	let url = ctx.query.url
	var res = await sign(jsapiTicket.ticket,url)
	ctx.body = res
})
.get('/api/accessToken',async function(ctx,next){
	ctx.body = await rp('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx829b884172f246ea&secret=36a0109564e755f9ad96322a835d0d07')
})
.get('/api/jsApiTkt',async function(ctx,next){
	var ACCESS_TOKEN = await rp('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx829b884172f246ea&secret=36a0109564e755f9ad96322a835d0d07')
	var url = 'https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token='+ACCESS_TOKEN.access_token+'&type=jsapi'
	ctx.body = await rp(url)
})


module.exports = router