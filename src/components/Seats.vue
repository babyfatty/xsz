<template>
  <div class="seats">
      <div class="front">屏幕</div>
      <div class="seatCharts-row" v-for="(row, rindex) in rows">
        <div class="seatCharts-cell seatCharts-space">{{rindex}}</div>
        <div role="checkbox" class="seatCharts-seat seatCharts-cell available" v-for="(column, cindex) in columns" v-on:click="handleClick(rindex,cindex)" v-bind:class="{selected:chosenArray.indexOf(rindex+''+cindex) !== -1,unavailable:selected.indexOf(rindex+''+cindex) !== -1}"
        >
          {{cindex}} 
        </div>
      </div>
      <div class="infoSection">
        <div class="reserveInfo lead">预约信息</div>
        <ul>
          <li><div class="speachName"><span>讲座名：</span><span>{{session.name}}</span></div></li>
          <li>
            <div class="speachTime"><span>讲座时间：</span><span>{{session.time}}</span></div>
          </li>
          <li>
            <div class="speachTime"><span>讲座location：</span><span>{{session.location}}</span></div>
          </li>
          <li>
            <div class="seatsChosen">
              <span>已选座位：</span>
              <span v-for="csn in chosen">
                {{csn.row}}排{{csn.column}}座
              </span>
            </div>
          </li>
        </ul>
      </div>
      <button type="button" class="btn btn-primary submitBtn" v-on:click="chooseSeat">确认选座</button>
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
      chosenArray: [],
      session:{},
      selected:[]
    }
  },
  mounted(){
    console.log(this.$route.params)
    this.getSessionInfo().then((res)=>{
      this.session = res.data[0]
    })
    this.$http.get('http://localhost:8889/api/bookedSeats').then((res)=>{
      var temp = []
      res.data.forEach( (element, index)=> {
        console.log(element.chosen)
        temp = temp.concat(JSON.parse(element.chosen))
      });
      temp.forEach( (element, index)=> {
        // statements
        if(!!element){
          this.selected.push(element.row+""+element.column)          
        }else{
          return 
        }
      });
      console.log('selectef',this.selected)
    })
  },
  methods: {
    handleClick(r,c){
      var temp = r+''+c
      var index = this.chosenArray.indexOf(temp)
      var sindex = this.selected.indexOf(temp)
      if(sindex!==-1){
        return
      }
      if(index===-1){
        if(this.chosenArray.length>=2){
          alert('只能选两个座位')
          return 
        }
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
      if(this.chosen.length===0){
        alert('you have not chosen a seat')
        return
      }
      this.$router.push({ name: 'checkorder', params: { chosen: JSON.stringify(this.chosen) ,user:this.$route.params.user,session:this.session}})
    },
    getSessionInfo(){
      // return this.$http.get('http://xesfun.com/xsz/api/sessionInfo')
      return this.$http.get('http://localhost:8889/api/sessionInfo')

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
.submitBtn{
  width: 100%;
}
</style>
