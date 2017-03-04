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
        <!-- <span v-for="item in chosen">
          {{item.row}}排{{item.column}}座
        </span> -->
      </div>
    </div>
    <div class="price">
      <div>
      <span>实付金额</span> <span>{{price}}元</span>        
      </div>
      <div>
        <span>订单号</span><span>{{order}}</span>
      </div>
      <div>
        <span>购买时间</span><span>{{btime}}</span>
      </div>
      <div>
        <span>手机号</span><span>{{phone}}</span>
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
      sname:'小高考公益讲座',
      slocation:'南京市中山会议中心中山厅',
      phone:'13222001020',
      stime:'03-15 09:25-11:04',
      price:'123',
      order:'123412412',
      btime:'03-15 09:25-11:04'
    }
  },
  props:[],
  mounted() {
  },
  computed:{
    
  }
}
</script>

<style scoped>

</style>
