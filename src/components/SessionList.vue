<template>
  <div class="sessionList">
       <div class="brand">
         <div class="brandImg"><img src="../assets/logo.png"></div>
         <div class="basicInfo">
           <span class="info">2017年橡树籽教育高考命题专家押题讲座</span>
           <span class="info">2017年4月29日-30日</span>
           <span class="info">地点：钟山宾馆（江苏省会议中心）</span>
           <span class="info">时长：3小时/学科</span>
         </div>
       </div>
       <div class="timeFilter">
         <span class="time" v-on:click="showSession">4月29日（周六）</span>
         <span class="time" v-on:click="showSession">4月30日（周日）</span>         
       </div> 
       <div class="relatedList" v-show="isShow">
         <div class="session">
           <div class="stime">
              <span class="startTime">08:30</span>
              <span class="endTime">11:30结束</span>
            </div>
            <div class="sessionName">
              语文
            </div>
            <div class="sessionPrice">
              498元
            </div>
         </div>
         <div class="session">
           <div class="stime">
              <span class="startTime">13:00</span>
              <span class="endTime">16:00结束</span>
            </div>
            <div class="sessionName">
              生物
            </div>
            <div class="sessionPrice">
              398元
            </div>
         </div>
         <div class="session">
           <div class="stime">
              <span class="startTime">13:00</span>
              <span class="endTime">16:00结束</span>
            </div>
            <div class="sessionName">
              政治
            </div>
            <div class="sessionPrice">
              398元
            </div>
         </div>
         <div class="session">
           <div class="stime">
              <span class="startTime">17:00</span>
              <span class="endTime">20:00结束</span>
            </div>
            <div class="sessionName">
              数学
            </div>
            <div class="sessionPrice">
              498元
            </div>
         </div>
       </div>
       <div class="relatedList" v-show="!isShow">
         <div class="session">
           <div class="stime">
              <span class="startTime">08:30</span>
              <span class="endTime">11:30结束</span>
            </div>
            <div class="sessionName">
              化学
            </div>
            <div class="sessionPrice">
              398元
            </div>
         </div>
         <div class="session">
           <div class="stime">
              <span class="startTime">08:30</span>
              <span class="endTime">11:30结束</span>
            </div>
            <div class="sessionName">
              地理
            </div>
            <div class="sessionPrice">
              398元
            </div>
         </div>
         <div class="session">
           <div class="stime">
              <span class="startTime">13:00</span>
              <span class="endTime">16:00结束</span>
            </div>
            <div class="sessionName">
              英语
            </div>
            <div class="sessionPrice">
              498元
            </div>
         </div>
         <div class="session">
           <div class="stime">
              <span class="startTime">13:00</span>
              <span class="endTime">16:00结束</span>
            </div>
            <div class="sessionName">
              物理
            </div>
            <div class="sessionPrice">
              498元
            </div>
         </div>
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
  name: 'SessionList',
  data () {
    return {
      isShow:true
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
    showSession(){
      this.isShow = !this.isShow
    }
  }
}
</script>
<style scoped>

</style>
