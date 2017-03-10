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
      this.$router.replace({'name':'payment'})
    }
  }
}
</script>

<style scoped>

</style>
