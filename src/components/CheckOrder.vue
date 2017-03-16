<template>
  <div class="checkOrder">
    <div class="tip">
      请在此页面完成支付，退出需要重新报名哦~
    </div>
    <div class="confirm-seats-info">
      <div class="infoSection">
        <h5>2017年橡树籽教育高考命题专家押题讲座</h5>
        <div class="location">
          <span class="infotitle">地点：</span>钟山宾馆（江苏省会议中心）
        </div>
        <div class="time">
          <span  class="infotitle">时间：</span>2017年4月29日-30日
        </div>
        <div>
          <span  class="infotitle">报名科目：</span><span v-for="(item,index) in chosen"><span v-if="index>=1">，</span>{{item}}</span>
        </div>
        <div>
          <span class="infotitle">电话：</span>{{user.phone}}
        </div>
        <div>
          <span class="infotitle">预订人：</span>{{user.username}}
        </div>
        <div class="price">
          <span class="infotitle">费用总计：</span>{{amount}}元
        </div>
      </div>
    </div>
    <div class="infoSection">
      <h5>邮寄信息（必填）</h5>
      <div class="mailInfo">
        <span class="control-label">姓名</span>
        <input class="form-control input-sm" type="text" v-model="mail.name" placeholder="请填写收件人姓名">
      </div>
      <div class="mailInfo">
        <span class="control-label">电话</span>
        <input class="form-control input-sm" type="tel" v-model="mail.tel" placeholder="请填写收件人电话">
      </div>
      <div class="mailInfo">
        <span class="control-label">地址</span>
        <input class="form-control mailDST input-sm" type="text" v-model="mail.city" placeholder="市">
        <input type="text" class="form-control mailDST input-sm" v-model="mail.district" placeholder="区">
      </div>
      <span class="control-label" style="opacity:0">地址</span>
      <textarea class="form-control input-sm" rows="3" placeholder="详细地址，具体到门牌号" v-model="mail.detail"></textarea>
    </div>
    <div class="priceInfo">
      *
      <span>本场讲座不支持退换票</span>
      <span>应付{{amount}}元</span>
    </div>
    <div class="payBtn">
        <button type="button" v-on:click="goToPay" class="btn btn-danger">立即付款</button>
        <!-- <button type="button" v-on:click="testPay" class="btn btn-danger">立即付款</button> -->
    </div>
  </div>
</template>

<script>
import 'script-loader!../assets/wx.js';
import md5 from 'js-md5'
export default {
  name: 'checkOrder',
  data () {
    return {
      mail:{
        name:"",
        tel:"",
        city:"",
        district:"",
        detail:""
      }
    }
  },
  mounted() {
    this.changeTitle('确认订单')
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
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
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
      return this.$route.params.chosen
    },
    user(){
      return this.$route.params.user||{id:'1',phone:"13222001020",username:"沈星辰"}
    },
    amount(){
      return this.$route.params.amount
    }
  },
  methods:{
    changeTitle(t){
      document.title = t;
      var i = document.createElement('iframe');
      i.src = '//m.baidu.com/favicon.ico';
      i.style.display = 'none';
      i.onload = function() {
        setTimeout(function(){
          i.remove();
        }, 9)
      }
      document.body.appendChild(i);
    },
    testPay(){
      location.href = 'http://10.12.142.13:8080/#/orderdetail?uid='+this.user.id+"&chosen="+this.chosen+"&transID=123"+"&user="+JSON.stringify(this.user)+"&amount="+this.amount+"&mailInfo="+JSON.stringify(this.mail)
    },
    goToPay(){
      if(!this.mail.name){
        alert('姓名必填')
        return
      }
      if(!this.mail.tel){
        alert('电话必填')
        return
      }
      if(!this.mail.city){
        alert('城市必填')
        return
      }
      if(!this.mail.district){
        alert('区必填')
        return
      }
      if(!this.mail.detail){
        alert('详细地址必填')
        return
      }
      var self = this
      wx.ready(function(){
          self.$http.get('/xsz/api/unifiedorder').then((res)=>{
            console.log(res)
              var nonceStr = md5(new Date().getTime()).substring(0, 32)
              var time = Math.floor(new Date().getTime()/1000)
              var payload = {
                appId:'wx829b884172f246ea',
                nonceStr: nonceStr, 
                package: 'prepay_id='+res.data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
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
                  package: 'prepay_id='+res.data.package, 
                  signType: 'MD5', 
                  timestamp: time,
                  paySign: genSign(), 
                  success: function () {
                      location.href = 'http://xesfun.com/xsz/#/orderdetail?uid='+self.user.id+"&chosen="+self.chosen+"&transID="+res.data.transId+"&user="+JSON.stringify(self.user)+"&amount="+self.amount+"&mailInfo="+JSON.stringify(self.mail)
                  },
                  fail: function(res){
                    alert('payment fail')
                  },
                  cancel: function(){
                    // location.href = 'http://xesfun.com/xsz/#/orderdetail?uid='+self.user.id+"&sid="+self.session.id+"&chosen="+JSON.stringify(self.chosen)+"&transID="+res.data.transId+"&user="+JSON.stringify(self.user)+"&session="+JSON.stringify(self.session)

                    // self.$http.post('/xsz/api/savePay',{
                    //       uid:self.user.id+"",
                    //       sid:self.session.id+"",
                    //       chosen:JSON.stringify(self.chosen),
                    //       transID:res.data.transId,
                    //       btime:btime
                    //   }).then(()=>{
                    //       alert('success')
                    //       location.href = 'http://xesfun.com/xsz/#/orderdetail'
                    //               // self.$router.replace({'name':'orderdetail',params:{session:this.session,user:this.user,chosen:this.chosen,transID:res.data.transId,btime:btime,amount:this.amount}})
                    //   })
                      // alert(res)
                      // self.$router.replace({"name":"orderdetail"})
                      // self.$router.replace({'path':'http://xesfun.com/xsz/#/orderdetail'})
                    // location.href = 'http://xesfun.com/xsz/#/orderdetail'
                  }
              })
              
          })
        })
      // var btime =new Date()
      // self.$http.get('http://localhost:8889/api/unifiedorder').then((res)=>{
      //   self.$http.post('http://localhost:8889/api/savePay',{
      //     uid:this.user.id+"",
      //     sid:this.session.id+"",
      //     chosen:JSON.stringify(this.chosen),
      //     transID:res.data.transId,
      //     btime:btime
      // }).then(()=>{
      //             self.$router.replace({'name':'orderdetail',params:{session:this.session,user:this.user,chosen:this.chosen,transID:res.data.transId,btime:btime,amount:this.amount}})
      //   })

      // })
    }
  }
}
</script>

<style scoped>
.mailInfo{
  margin: 5px 0;
}
.control-label{
    width: 15%;
    display: inline-block;
    text-align: center;
}
.form-control{
  width: 80%;
  display: inline-block;
}
.mailDST{
  width: 30%;
}
.payBtn button{
  width: 100%;
}
.priceInfo{
  padding: 20px 0 10px 0;
  font-size: 12px;
}
.infoSection{
    border: 1px dotted #eee;
    padding: 6px;
    line-height: 25px;
    background: #fff;
    border-radius: 5px;
}
.tip{
  height: 20px;
    color: #fff;
    background: #f0ad4e;
    opacity: 0.7;
    font-size: 12px;
    font-weight: 200;
    line-height: 20px;
    padding: 0 8px;
    border-radius: 4px;
    margin: 5px 0;
    border: 1px dotted;
}
.time{
  color: #d9534f;
}
.infotitle{
  display: inline-block;
  width: 30%;
  text-align: left;
}
</style>
<style>
    body{
      background: #F8F8F8;
    }
</style>
