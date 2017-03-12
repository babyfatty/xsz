<template>
  <div class="checkOrder">
    <div class="confirm-seats-info">
      <h3>{{session.name}}</h3>
      <div class="location">
        地点：{{session.location}}
      </div>
      <div class="time">
        时间：{{session.time}}
      </div>
      <div class="seats">
        座位：
        <span v-for="item in chosen">
          {{item.row*1+1}}排{{item.column*1+1}}座
        </span>
      </div>
    </div>
    <div class="price">
      <div>
      <span>实付金额：</span> <span>{{amount}}元</span>        
      </div>
      <div>
        <span>订单号：</span><span>{{transID}}</span>
      </div>
      <div>
        <span>手机号：</span><span>{{user.phone}}</span>
      </div>
    </div>
    <div class="statement">
      <h5>取票须知</h5>
      <div>1,本场讲座位公益讲座，所有预约费用讲捐献给学习基金</div>
      <div>2,本场讲座设计大量人力物力，预约成功不可退款</div>
    </div>
    <div class="kfInfo">
      <span>客服联系</span>
      <span>吴老师：12341231</span>
    </div>
  </div>
</template>
<style>
  #app{
    padding: 20px;
    padding-top: 10px;
  }
</style>
<script>

export default {
  name: 'orderDetail',
  data () {
    return {
      session:"",
      user:"",
      transID:"",
      chosen:"",
      amount:"",
      user:"",
      session:""
    }
  },
  mounted() {
    this.changeTitle('订单详情')
    this.session = this.$route.query.session
    this.user = this.$route.query.user
    this.transID = this.$route.query.transID
    this.chosen = JSON.parse(this.$route.query.chosen)
    this.amount = this.$route.query.amount
    this.user = JSON.parse(this.$route.query.user)
    this.session = JSON.parse(this.$route.query.session)
    this.savePay().then(()=>{
      this.sendSMS()
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
        sid:this.session.id+"",
        chosen:JSON.stringify(this.chosen),
        transID:this.transId,
        amount:this.amount,
        btime:new Date().getTime()+""
    })
    },
    sendSms(){
      this.$http.get('http://xesfun.com/xsz/api/sendNotice',{
        params:{
          phone:this.phone
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
