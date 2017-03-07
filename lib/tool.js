const TopClient = require( './topClient' ).TopClient;
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

let sendMsg = function(code){
	return new Promise(function(resolve, reject){
		client.execute( 'alibaba.aliqin.fc.sms.num.send' , {
		     'extend' : '' ,
		     'sms_type' : 'normal' ,
		     'sms_free_sign_name' : '沈胖胖' ,
		     'sms_param' : {code:code} ,
		     'rec_num' : '13222001020' ,
		     'sms_template_code' : "SMS_52455055"
		}, function(error, response) {
		     if (!error) {
		     	console.log(response)
		     	resolve(response.result)
		     }
		     else {
		     	console.log(error)
		     	reject(error)
		     }
		})
	})
}

module.exports = {
	genVaryCode,
	sendMsg
}