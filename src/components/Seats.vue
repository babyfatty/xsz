<template>
  <div class="seats">
      <div class="front">屏幕</div>
      <div class="seatCharts-row" v-for="(row, rindex) in rows">
        <div class="seatCharts-cell seatCharts-space">{{rindex+1}}</div>
        <div role="checkbox" class="seatCharts-seat seatCharts-cell available" v-for="(column, cindex) in columns" v-on:click="handleClick(rindex,cindex)" v-bind:class="{selected:chosenArray.indexOf(rindex+''+cindex) !== -1}">
          {{cindex+1}} 
        </div>
      </div>
      <div class="infoSection">
        <div class="reserveInfo">预约信息</div>
        <div class="speachName"><span>讲座名：</span><span>123</span></div>
        <div class="speachTime"><span>讲座时间：</span><span>123</span></div>
        <div class="seatsChosen">
          <span>已选座位：</span>
          <span v-for="csn in chosen">
            {{csn.row}}排{{csn.column}}座
          </span>
        </div>
      </div>
      <div class="submitBtn">
        <button type="button" class="btn btn-primary" v-on:click="chooseSeat">确认选座</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Seats',
  data () {
    return {
      rows: new Array(10),
      columns: new Array(10),
      chosen: [],
      chosenArray: [] 
    }
  },
  mounted() {
    
  },
  methods: {
    handleClick(r,c){
      var temp = r+''+c
      var index = this.chosenArray.indexOf(temp)
      if(index===-1){
        this.chosenArray.push(temp)
        this.chosen.push({
          row:r,
          column:c
        })
      }else{
        this.chosenArray.splice(index,1)
        this.chosen.splice(index,1)
      }
    },
    chooseSeat(){
      this.$router.push({ name: 'checkorder', query: { chosen: JSON.stringify(this.chosen) }})
    }
  },
  
}
</script>

<style scoped>
.front{
    width: 300px;
    margin: 5px 32px 45px 32px;
    background-color: #f0f0f0;
    color: #666;
    text-align: center;
    padding: 3px;
    border-radius: 5px;
}
div.seatCharts-row {
    height: 35px;
}
div.seatCharts-cell {
    color: #182C4E;
    height: 25px;
    width: 25px;
    line-height: 25px;
    margin: 3px;
    float: left;
    text-align: center;
    outline: none;
    font-size: 13px;
}
div.seatCharts-seat {
    color: #fff;
    cursor: pointer;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
}
div.seatCharts-seat.available {
    background-color: #B9DEA0;
}
div.seatCharts-seat.unavailable {
    background-color: #472B34;
    cursor: not-allowed;
}
div.seatCharts-seat.selected {
    background-color: #E6CAC4;
}
</style>
