<template>
  <div class="payment">
        <button type="button" class="btn btn-primary" v-on:click="pay">付款</button>
  </div>
</template>

<script>
import 'script-loader!../assets/wx.js';
import md5 from 'js-md5'
export default {
  name: 'payment',
  data () {
    return {
      
    }
  },
  mounted() {
    var self = this
    var payload = {
      appId:'wx829b884172f246ea',
      nonceStr: md5(new Date().getTime()).substring(0, 32), 
      package: 'prepay_id='+res.body, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
      signType: 'MD5', 
      timeStamp: (new Date().getTime()).toString().substring(0,10)
    }
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
    let param = Object.assign(payload,{
                  paySign: genSign()
                })
    function onBridgeReady(){
       WeixinJSBridge.invoke(
           'getBrandWCPayRequest', param,
           function(res){     
               if(res.err_msg == "get_brand_wcpay_request:ok" ) {}     // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。 
           }
       ); 
    }
    if (typeof WeixinJSBridge == "undefined"){
       if( document.addEventListener ){
           document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
       }else if (document.attachEvent){
           document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
           document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
       }
    }else{
       onBridgeReady();
    }
    // this.$http.get('/xsz/api/sign',{
    //     params:{
    //       url:location.href
    //     }
    //   }).then((res)=>{
    //     var data = res.data
    //     console.log('data',data)
    //     wx.config({
    //         debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    //         appId: 'wx829b884172f246ea', // 必填，公众号的唯一标识
    //         timestamp: data.timestamp, // 必填，生成签名的时间戳
    //         nonceStr: data.nonceStr, // 必填，生成签名的随机串
    //         signature: data.signature,// 必填，签名，见附录1
    //         jsApiList: ['chooseWXPay'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    //     });
    //     wx.ready(function(){
    //       self.$http.get('/xsz/api/unifiedorder').then((res)=>{
    //         console.log(res)
    //           var payload = {
    //             appId:'wx829b884172f246ea',
    //             nonceStr: md5(new Date().getTime()).substring(0, 32), 
    //             package: 'prepay_id='+res.body, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
    //             signType: 'MD5', 
    //             timestamp: (new Date().getTime()).toString().substring(0,10)
    //           }
    //           let genSign = function(){  
    //            var stringA="";
    //            for(var i in payload){
    //              stringA+=i+'='+payload[i]+'&'
    //            }
    //            var stringSignTemp=stringA+"key=d41d8cd98f00b204e9800998ecf8427e"
    //            console.log(stringSignTemp)
    //            var sign=md5(stringSignTemp).toUpperCase()
    //            return sign
    //           }
    //           console.log(genSign())
    //           wx.chooseWXPay(
    //             Object.assign(payload,{
    //               paySign: genSign(), // 支付签名
    //               success: function (res) {
    //                 // 支付成功后的回调函数
    //                 console.log('success',res)
    //               }
    //             }))
              
    //       })
    //     })
    //  })
},
  methods:{
    pay(){
      
    }
  }
}
</script>

<style scoped>

</style>
