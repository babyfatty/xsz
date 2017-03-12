<template>
  <div class="checkOrder">
    <div class="confirm-seats-info">
      <h3>{{session.name}}</h3>
      <div class="location">
        {{session.location}}
      </div>
      <div class="time">
        {{session.time}}
      </div>
      <div class="seats">
        <span v-for="item in chosen">
          {{item.row*1+1}}排{{item.column*1+1}}座
        </span>
      </div>
    </div>
    <div class="price">
      <div>
      <span>实付金额</span> <span>{{amount}}元</span>        
      </div>
      <div>
        <span>订单号</span><span>{{transID}}</span>
      </div>
      <div>
        <span>手机号</span><span>{{user.phone}}</span>
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

<script>

export default {
  name: 'orderDetail',
  data () {
    return {
      
    }
  },
  props:[],
  mounted() {
  },
  computed:{
    session(){
      return this.$route.params.session
    },
    user(){
      return this.$route.params.user
    },
    transID(){
      return this.$route.params.transID
    },
    chosen(){
      return this.$route.params.chosen
    },
    amount(){
      return this.$route.params.amount
    }
  }
}
</script>

<style scoped>

</style>
