<template>
  <div class="checkOrder">
    <div class="confirm-seats-info">
      <h3>{{sname}}</h3>
      <div class="location">
        {{slocation}}
      </div>
      <div class="time">
        {{stime}}
      </div>
      <div class="seats">
        <span v-for="item in chosen">
          {{item.row*1+1}}排{{item.column*1+1}}座
        </span>
      </div>
      <div>
        电话：{{user.phone}}
      </div>
      <div>
        预订人：{{user.username}}
      </div>
    </div>
    <div class="price">
      预约费用总计：4元
    </div>
    <div class="statement">
      <h5>购票须知</h5>
      <div>1,本场讲座位公益讲座，所有预约费用讲捐献给学习基金</div>
      <div>2,本场讲座设计大量人力物力，预约成功不可退款</div>
    </div>
    <div class="priceInfo">
      <span>本场讲座不支持退换票</span>
      <span>应付4元</span>
    </div>
    <div class="payBtn">
        <button type="button" v-on:click="goToPay" class="btn btn-danger">立即付款</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'checkOrder',
  data () {
    return {
      sname:'小高考公益讲座',
      slocation:'南京市中山会议中心中山厅',
      phone:'13222001020',
      stime:'03-15 09:25-11:04'
    }
  },
  mounted() {
    console.log(this.$route.params)
    var self = this
    this.$http.get('/xsz/api/sign',{
        params:{
          url:location.href
        }
      }).then((res)=>{
        var data = res.data
        console.log('data',data)
        wx.config({
            debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: 'wx829b884172f246ea', // 必填，公众号的唯一标识
            timestamp: data.timestamp, // 必填，生成签名的时间戳
            nonceStr: data.nonceStr, // 必填，生成签名的随机串
            signature: data.signature,// 必填，签名，见附录1
            jsApiList: ['chooseWXPay'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });  
     })
  },
  computed:{
    chosen(){
      return JSON.parse(this.$route.params.chosen)
    },
    user(){
      return this.$route.params.user
    }
  },
  methods:{
    goToPay(){
      wx.ready(function(){
          self.$http.get('/xsz/api/unifiedorder').then((res)=>{
            console.log(res)
              var nonceStr = md5(new Date().getTime()).substring(0, 32)
              var time = Math.floor(new Date().getTime()/1000)
              var payload = {
                appId:'wx829b884172f246ea',
                nonceStr: nonceStr, 
                package: 'prepay_id='+res.data, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
                signType: 'MD5', 
                timeStamp: time
              }
              let genSign = function(){  
               var stringA="";
               for(var i in payload){
                 stringA+=(i+'='+payload[i]+'&')
               }
               var stringSignTemp=stringA+"key=d41d8cd98f00b204e9800998ecf8427e"
               console.log(stringSignTemp)
               var sign=md5(stringSignTemp).toUpperCase()
               return sign
              }
              console.log(payload)
              wx.chooseWXPay({
                  nonceStr: nonceStr, 
                  package: 'prepay_id='+res.data, 
                  signType: 'MD5', 
                  timestamp: time,
                  paySign: genSign(), 
                  success: function (res) {
                    alert(JSON.stringify(res))
                    console.log('success',res)
                  },
                  fail: function(res){
                    alert(res)
                  },
                  cancel: function(res){
                      alert(res)
                      self.$router.replace({"name":"orderdetail"})
                  }
              })
              
          })
        })
      // this.$router.replace({'name':'payment'})
    }
  }
}
</script>

<style scoped>

</style>
