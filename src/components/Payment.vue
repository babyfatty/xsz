<template>
  <div class="sessionList">
       <div class="brand">
         <div class="brandImg"><img src="../assets/xsz.jpeg"></div>
         <div class="basicInfo">
           <div class="info"><h5>2017年橡树籽教育高考命题专家押题讲座</h5></div>
           <div class="info">2017年4月29日-30日</div>
           <div class="info">地点：钟山宾馆（江苏省会议中心）</div>
           <div class="info">时长：3小时/学科</div>
         </div>
       </div>
       <div class="timeFilter">
         <span class="time" v-on:click="showSession6" v-bind:class="{active:isShow}">4月29日(周六)</span>
         <span class="time" v-on:click="showSession7" v-bind:class="{active:!isShow}">4月30日(周日)</span>         
       </div>
       <div class="tip">
         *高考报名特惠：语数外+两门选修 = 2017元
       </div> 
       <div class="relatedList" v-show="isShow">
         <div class="session" v-for="session in sessionList1">
           <div class="stime">
              <div class="startTime">{{session.startTime}}</div>
              <div class="endTime">{{session.endTime}}结束</div>
            </div>
            <div class="sessionName">
              {{session.name}}
            </div>
            <div class="sessionPrice">
              &yen; {{session.price}}元
            </div>
            <div class="addToCart" v-on:click="addToCart(session.name,session.price)" v-bind:class="{disabled:(indexChosenList.indexOf(session.name)!==-1)}">
              <span>报名</span>
            </div>
         </div>
       </div>
       <div class="relatedList" v-show="!isShow">
         <div class="session" v-for="session in sessionList2">
           <div class="stime">
              <div class="startTime">{{session.startTime}}</div>
              <div class="endTime">{{session.endTime}}结束</div>
            </div>
            <div class="sessionName">
              {{session.name}}
            </div>
            <div class="sessionPrice">
              &yen; {{session.price}}元
            </div>
            <div class="addToCart" v-on:click="addToCart(session.name,session.price)" v-bind:class="{disabled:(indexChosenList.indexOf(session.name)!==-1)}">
              <span>报名</span>
            </div>
         </div>
       </div>
       <div class="chosenContainer">
         <div class="chosenList" v-show="showList">
          <div class="subChosenList">
             您已选择：
             <div  class="chosenItem" v-for="chosen in chosenList">
                <span>
               {{chosen.name}}
                </span>
                <span>
               &yen; {{chosen.price}} 元
                </span>
                <svg v-on:click="cancel(chosen.name,chosen.price)" t="1489634257948" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1032" xmlns:xlink="http://www.w3.org/1999/xlink" width="15" height="15"><path d="M944 192l-188.8 0 0-44.8c0-54.4-44.8-99.2-99.2-99.2l-294.4 0c-54.4 0-99.2 44.8-99.2 99.2l0 44.8-179.2 0c-12.8 0-25.6 9.6-25.6 25.6 0 12.8 9.6 25.6 25.6 25.6l60.8 0 0 0 0 633.6c0 54.4 44.8 99.2 99.2 99.2l550.4 0c54.4 0 99.2-44.8 99.2-99.2l0-630.4 0-3.2 51.2 0c12.8 0 25.6-9.6 25.6-25.6C966.4 204.8 960 192 944 192zM316.8 147.2c0-25.6 22.4-48 48-48l294.4 0c25.6 0 48 22.4 48 48l0 44.8-390.4 0L316.8 147.2zM841.6 867.2c0 28.8-16 57.6-41.6 57.6l-550.4 0c-25.6 0-54.4-19.2-54.4-44.8l3.2-636.8 643.2 0 0 0L841.6 867.2z" p-id="1033" fill="#707070"></path><path d="M368 380.8c-16 0-25.6 9.6-25.6 25.6l0 342.4c0 16 12.8 25.6 25.6 25.6 12.8 0 25.6-9.6 25.6-25.6l0-342.4C390.4 393.6 384 380.8 368 380.8z" p-id="1034" fill="#707070"></path><path d="M528 380.8c-16 0-25.6 9.6-25.6 25.6l0 342.4c0 16 12.8 25.6 25.6 25.6 12.8 0 25.6-9.6 25.6-25.6l0-342.4C550.4 393.6 544 380.8 528 380.8z" p-id="1035" fill="#707070"></path><path d="M688 380.8c-16 0-25.6 9.6-25.6 25.6l0 342.4c0 16 12.8 25.6 25.6 25.6 12.8 0 25.6-9.6 25.6-25.6l0-342.4C710.4 393.6 704 380.8 688 380.8z" p-id="1036" fill="#707070"></path></svg>
             </div>
          </div>
         </div>
         <div class="chosenBar">
          <div class="cartContainer" v-on:click="viewOrder">
            <span class="cart">
               <svg t="1489591606996" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1028" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="25"><path d="M246.4 912a2.1 2.1 0 1 0 134.4 0 2.1 2.1 0 1 0-134.4 0Z" p-id="1029" fill="#ffffff"></path><path d="M716.8 912a2.1 2.1 0 1 0 134.4 0 2.1 2.1 0 1 0-134.4 0Z" p-id="1030" fill="#ffffff"></path><path d="M905.6 764.8l-537.6 0c-28.8 0-57.6-25.6-64-54.4l-96-566.4c-9.6-54.4-60.8-96-115.2-96l-22.4 0c-12.8 0-25.6 12.8-25.6 25.6 0 12.8 12.8 25.6 25.6 25.6l22.4 0c28.8 0 57.6 25.6 64 54.4l96 566.4c9.6 54.4 60.8 96 115.2 96l537.6 0c12.8 0 25.6-12.8 25.6-25.6C931.2 777.6 921.6 764.8 905.6 764.8z" p-id="1031" fill="#ffffff"></path><path d="M880 179.2l-572.8 0c-12.8 0-25.6 12.8-25.6 25.6 0 12.8 12.8 25.6 25.6 25.6l572.8 0c25.6 0 38.4 16 32 41.6l-70.4 281.6c-6.4 32-41.6 57.6-73.6 60.8l-396.8 28.8c-12.8 0-25.6 12.8-22.4 28.8 0 12.8 12.8 25.6 28.8 22.4l396.8-28.8c54.4-3.2 105.6-48 118.4-99.2l70.4-281.6C976 230.4 937.6 179.2 880 179.2z" p-id="1032" fill="#ffffff"></path></svg>
               <span class="cartNum">
                 {{chosenList.length}}
               </span>
           </span>
          </div>
           
           <div class="price">
             &yen; {{totalPrice}} 元
           </div>
           <div class="buyBtn">
             <button type="button" class="goToBill btn btn-warning" v-on:click="goToBill">去结算</button>
           </div>
         </div>
       </div>
       
       <div class="additionalInfo">
         <div class="fee">
            <h5>报名费用计算方式</h5>
            <div>高考报名：语数外+两门选修 = 2017元</div>
            <div>其他任意报名费用：语文/数学/英语/物理/历史（498元/科目） 化学/生物/政治/地理（398元/科目）</div>
            <div>每一场讲座凭券领取价值399元绝密资料一份（命题专家亲自编著，绝不外售）</div>
         </div>
         <div class="speaker">
           <h5>部分命题专家简介</h5>
           <p><span class="speakerName">王教授（高考语文）</span>师范大学教授，文学博士，主持国家社科基金课题1项。出版多本文学专著，长期从事语文高考的研究与命题工作。</p>
           <p>
             <span class="speakerName">陈教授（高考数学）</span>特级教师，教授级中学高级教师，高中数学学科带头人，江苏高考数学学科命题组成员，多次在省内外开始示范课和学术讲座，听课教师达万余人次，在省内外有较高知名度。
           </p>
           <p>
             <span class="speakerName">王教授（高考英语）</span>教授，博士主持多项国家省，部级课题，从事英美文学研究，高考英语命题组专家成员，长期从事英语教育与高考的研究与命题工作。
           </p>
           <p>
             <span class="speakerName">周教授（高考物理）</span>特级教师，教授级中学高级教师，高中物理学科带头人，参与多次高考和小高考的命题工作，多次受邀开展高中物理命题与评价专题讲座。
           </p>
           <p>
             <span class="speakerName">王教授（高考历史）</span>特级教师，教授级中学高级教师，高中历史学科带头人，应邀赴全国各地讲学120多场次。
           </p>
           <p>
             <span class="speakerName">刘教授（高考生物）</span>特级教师，教授级高级教师，学科带头人，多次参与高考命题工作，长期从事江苏生物高考研究和命题。
           </p>
         </div>
       </div>
  </div>
</template>
<style>
  #app{
    padding: 20px;
    padding-top: 10px;
    color: #333;
  }
</style>
<script>
export default {
  name: 'SessionList',
  data () {
    return {
      isShow:true,
      showList:false,
      sessionList1:[
        {
          startTime:'08:30',
          endTime:'11:30',
          name:'语文',
          price:'498'
        },
        {
          startTime:'13:00',
          endTime:'16:00',
          name:'生物',
          price:'398'
        },
        {
          startTime:'13:00',
          endTime:'16:00',
          name:'政治',
          price:'398'
        },
        {
          startTime:'17:00',
          endTime:'20:00',
          name:'数学',
          price:'498'
        }
      ],
      sessionList2:[
        {
          startTime:'08:30',
          endTime:'11:30',
          name:'化学',
          price:'398'
        },
        {
          startTime:'08:30',
          endTime:'11:30',
          name:'地理',
          price:'398'
        },
        {
          startTime:'13:00',
          endTime:'16:00',
          name:'英语',
          price:'498'
        },
        {
          startTime:'17:00',
          endTime:'20:00',
          name:'物理',
          price:'498'
        },{
          startTime:'17:00',
          endTime:'20:00',
          name:'历史',
          price:'498'
        }
      ],
      chosenList:[],
      indexChosenList:[],
      totalPrice:0,
      actualPrice:0
    }
  },
  mounted() {
    this.changeTitle('讲座列表')
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
    showSession6(){
      this.isShow = true
    },
    showSession7(){
      this.isShow = false
    },
    addToCart(name,price){
        if(this.indexChosenList.indexOf(name)!==-1){
          return
        }
        if(this.chosenList.length===5){
          alert('每人最多限买五门学科')
          return
        }
        this.chosenList.push({name:name,price:price})
        this.indexChosenList.push(name)
        this.totalPrice += price*1
        this.actualPrice += price*1
        if(this.totalPrice>=2290){
          this.totalPrice = 2017
        }
    },
    cancel(name,price){
      var index = this.indexChosenList.indexOf(name)
      this.indexChosenList.splice(index,1)
      this.chosenList.splice(index,1)
      if(this.totalPrice===2017){
          this.totalPrice = this.actualPrice
      }
      this.totalPrice -= price*1
    },
    viewOrder(){
      this.showList = !this.showList
    },
    goToBill(){
      this.$router.replace({"name":"checkorder",params:{
        amount:this.totalPrice,
        chosen:this.indexChosenList,
        user:this.$route.params.user
      }})
    }
  }
}
</script>
<style scoped>
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
}
  .brand{
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 6px solid #eee;
    padding: 8px 0;
    background: #fff;
  }
  .brandImg{
    width: 30%;
    padding: 5px;
    position: relative;
  }
  .brandImg img{
    max-width: 100%;
  }
  .basicInfo{
    width: 70%;
    padding: 5px;
  }

  .cartContainer{
    position: relative;
    display: inline-block;
  }
  .cart{
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f0ad4e;
    height: 40px;
    width: 40px;
    border-radius: 40px;
    position: relative;
    top: -10px;
    right: -5px;
  }
  .price{
    height: 40px;
    width: 108px;
    line-height: 40px;
    text-align: center;
    font-size: 19px;
    color: #c9302c;
  }
  .buyBtn{
    flex: 1;
    line-height: 40px;
    font-size: 12px;
  }
  .goToBill{
    float: right;
    height: 40px;    
    width: 90px;
    border-radius: 0;
  }
  .chosenContainer{
    position: fixed;
    bottom: 0;
    left: 0;
    background: #fff;
    width: 100%;
    height: 40px;

  }
  .chosenBar{
    display: flex;
    border-top: 1px solid #d58512;
  }
  .cartNum{
    position: absolute;
    font-weight: 200;
    top: -4px;
    right: -4px;
    background: #c9302c;
    color: #fff;
    width: 15px;
    height: 15px;
    line-height: 15px;
    border-radius: 15px;
    font-size: 12px;
    text-align: center;
    font-weight: 200;
  }
  .viewOrder{
    display: inline-block;
  }
  .chosenList{
    position: absolute;
    bottom: 40px;
    background: #fff;
    width: 100%;
    padding: 0 55px;
    padding-bottom: 20px;
    border-top: 1px solid #d58512;
  }
  .chosenItem{
    display: flex;
    align-items: center;
  }
  .chosenItem span{
    width: 60px;
  }
  .relatedList{
    border-bottom: 6px solid #eee;
    padding: 8px 0;
    background: #fff;
    padding: 0 5px;
  }
  .relatedList .session{
    display: flex;
    margin: 5px 0;
  }
  .session .stime{
    flex: 1;
  }
  .stime .startTime{
    font-weight: bold;
    font-size: 16px;
  }
  .stime .endTime{
    font-size: 12px;
    color: #999;
  }
  .session .sessionName{
    flex: 1;
    text-align: center;
    line-height: 40px;
  }
  .session .sessionPrice{
    flex: 1;
    text-align: center;
    line-height: 40px;
    color: #c9302c;
  }
  .session .addToCart{
    flex: 1;
    text-align: center;
    line-height: 40px;
  }
  .addToCart span{
    padding: 2px;
    border: 1px solid #c9302c;
    color: #c9302c;
    font-size: 12px;
    border-radius: 3px;
  }
  .addToCart.disabled span{
    border: 1px solid #999;
    color: #999;
  }
  .timeFilter{
    padding: 6px 5px;
    background: #fff;
  }
  .timeFilter .time{
    padding: 5px 0;
    margin-right: 10px;
  }
  .timeFilter .time.active{
    border-bottom: 2px solid #c9302c;
    color: #c9302c;
  }
  .additionalInfo{
    background: #fff;
    padding: 0 5px;
  }
  .additionalInfo .fee{
    padding: 8px 0;
    border-bottom: 6px solid #eee;
    line-height: 25px;
  }
  .additionalInfo .speaker{
    padding: 8px 0;
    border-bottom: 6px solid #eee;
  }
  .speaker p{
    line-height: 25px;
  }
  .speakerName{
    font-weight: 500;
    color: #000;
  }
</style>
