<template>
  <div class="checkOrder">
    <div class="tip">
      稍后确认短信会发送到您手机上哦~
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
        <!-- <div class="seats">
          座位：
          <span v-for="item in chosen">
            {{item.row*1+1}}排{{item.column*1+1}}座
          </span>
        </div> -->
        <div>
          <span  class="infotitle">报名科目：</span><span>{{chosen}}</span>
        </div>
        <div>
          <span class="infotitle">电话：</span>{{user.phone}}
        </div>
        <div>
          <span class="infotitle">预订人：</span>{{user.username}}
        </div>
      </div>
<!--     <div class="statement">
      <h5>购票须知</h5>
      <div>1,本场讲座位公益讲座，所有预约费用讲捐献给学习基金</div>
      <div>2,本场讲座设计大量人力物力，预约成功不可退款</div>
    </div> -->
    </div>
    <div class="price">
      <div>
      <span>实付金额：</span> <span>{{amount}}元</span>        
      </div>
      <div>
        <span>订单号：</span><span>{{transID}}</span>
      </div>
    </div>
    <div class="price">
      <div>
      <span>邮寄地址：</span>        
      </div>
      <div>
        <span>{{mail.name}} {{mail.tel}} {{mail.city}}市{{mail.district}}区{{mail.detail}}</span>
      </div>
    </div>
    <div class="statement">
      <h5>入场须知</h5>
      <div>讲座地点为江苏省会议中心(钟山宾馆)主楼，登记后凭券领取资料入场。</div>
    </div>
    <div class="statement">
      <h5>路线备注</h5>
      <div>1、距南京火车站(小红山客运站)5 公里，南站 11 公里，机场 42 公里。</div>
      <div>2、公交:可乘坐 5 路、9 路、25 路、29 路、34 路、65 路、201 路、202 路
至“西安门站”下车即到;52 路，190 路至“黄埔路站”下车即到;17 路，115 路，118 路，173 路至“明故宫站”下车即到。</div>
      <div>3、地铁:地铁二号线，距“明故宫站”200 米，距“西安门站”150 米。</div>
    </div>
    <div class="statement">
      <h5>客服联系</h5>
      <div>吴老师：12341231</div>
    </div>
  </div>
</template>
<style>
  #app{
    padding: 20px;
    padding-top: 10px;
  }
  body{
    background: #F8F8F8;
  }
</style>
<script>

export default {
  name: 'orderDetail',
  data () {
    return {
      user:"",
      transID:"",
      chosen:"",
      amount:"",
      user:"",
      mail:""
    }
  },
  mounted() {
    this.changeTitle('订单详情')
    this.transID = this.$route.query.transID
    this.chosen = this.$route.query.chosen
    console.log(this.chosen)
    this.amount = this.$route.query.amount
    this.user = JSON.parse(this.$route.query.user)
    this.mail = JSON.parse(this.$route.query.mailInfo)
    this.savePay().then(()=>{
      this.sendSms()
    })
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
    savePay(){
      return this.$http.post('/xsz/api/savePay',{
        uid:this.user.id+"",
        uname:this.user.username,
        chosen:this.chosen,
        adress:this.$route.query.mailInfo,
        transID:this.transID,
        amount:this.amount,
        btime:new Date().getTime()+""
    })
    },
    sendSms(){
      this.$http.get('/xsz/api/sendNotice',{
        params:{
          phone:this.user.phone,
          name:this.user.username,
          product:this.chosen
        }
      })
    }
  }
}
</script>

<style scoped>
.infoSection,.price,.statement,.kfInfo{
    border: 1px dotted #eee;
    padding: 6px;
    line-height: 25px;
    margin: 3px 0;
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
.infoSection,.statement,.price div{
  font-size: 12px;
}

</style>
