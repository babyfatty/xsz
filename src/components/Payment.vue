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
    this.$http.get('http://localhost:8889/api/sign',{
        params:{
          url:location.href
        }
      }).then((res)=>{
        var data = res.data
        console.log(data)
        wx.config({
            debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: 'wx829b884172f246ea', // 必填，公众号的唯一标识
            timestamp: data.timestamp, // 必填，生成签名的时间戳
            nonceStr: data.nonceStr, // 必填，生成签名的随机串
            signature: data.signature,// 必填，签名，见附录1
            jsApiList: ['chooseWXPay'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });
        wx.ready(function(){
          self.$http.get('/xsz/api/unifiedorder',{
            params:{
              code: self.$route.params.code
            }
          }).then((res)=>{
            console.log(res)
              var payload = {
                nonceStr: '123', 
                package: res.body, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
                signType: 'MD5', 
                timestamp: 0
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
            wx.chooseWXPay({
              timestamp: 0, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
              nonceStr: '123', // 支付签名随机串，不长于 32 位
              package: res.body, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
              paySign: genSign(), // 支付签名
              signType: 'MD5', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
              success: function (res) {
                  // 支付成功后的回调函数
                  console.log('success',res)
              }
            })
          })
        })
     })
},
  methods:{
    pay(){
      
    }
  }
}
</script>

<style scoped>

</style>
