const TopClient = require( './topClient' ).TopClient;
const xmljson = require('xmljson');
var client = new TopClient({
     'appkey' : '23386522' ,
     'appsecret' : 'b9f3598272182e6c897ff17b1f543055' ,
     'REST_URL' : 'http://gw.api.taobao.com/router/rest'
});

let genVaryCode = function(length){
	let num="";
	for(let i=0;i<length;i++){
		num +=  Math.round(Math.random()*9)
	}
	return num
}

let sendMsg = function(code,phone){
	return new Promise(function(resolve, reject){
		client.execute( 'alibaba.aliqin.fc.sms.num.send' , {
		     'extend' : '' ,
		     'sms_type' : 'normal' ,
		     'sms_free_sign_name' : '沈胖胖' ,
		     'sms_param' : {code:code} ,
		     'rec_num' : phone ,
		     'sms_template_code' : "SMS_52455055"
		}, function(error, response) {
		     if (!error) {
		     	resolve(response.result)
		     }
		     else {
		     	reject(error)
		     }
		})
	})
}

let toJson = function(code){
	return new Promise(function(resolve,reject){
		xmljson.to_json(code,function(error, json){
			resolve(json)
		})
	})
}

let toXml = function(code){
	return new Promise(function(resolve,reject){
		xmljson.to_xml(code,function(error, xml){
			resolve(xml)
		})
	})
}

module.exports = {
	genVaryCode,
	sendMsg,
	toJson,
	toXml
}