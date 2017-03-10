<template>
  <div class="hello">
    <h3>登录</h3>
      <form class="form-horizontal">
        <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">手机号</label>
        <div class="col-sm-10">
          <input type="numbder" class="form-control" id="inputEmail3" v-model="phone" placeholder="手机号">
        </div>
      </div>
      <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">验证码</label>
        <div class="col-sm-10">
          <input type="numbder" class="form-control" id="inputEmail3" v-model="varyCode" placeholder="验证码">
        </div>
      </div>
      </form>      
        <button class="btn btn-primary" v-on:click="vary">提交</button>
        <button type="button" class="btn btn-default" disabled="disabled" v-show="!btnShow">等待{{wait}}s</button>
        <button class="btn btn-primary" v-on:click="sendSms" v-show="btnShow">发送</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      wait:30,
      btnShow:true,
      varyCode:"",
      phone:""
    }
  },
  mounted() {
  },
  methods:{
    vary(){
      this.$http.get('http://xesfun.com/xsz/api/varyLogin',{
        params:{
          code:this.varyCode,
          phone:this.phone
        }
      }).then((res)=>{
        console.log(res)
      })
    },
    sendSms(){
      this.$http.get('http://xesfun.com/xsz/api/sendSMS').then((res)=>{
        console.log(res)
        if(res.data.success){
          this.btnShow = false
          var interval = setInterval(()=>{
          if(this.wait>0){
            this.wait--
          }else{
            this.btnShow = true
            this.wait = 30
            clearInterval(interval)
          }
        },1000)
        }
      })
    }
  }
}
</script>
<style>
  #app{
    padding: 20px;
    padding-top: 10px;
  }
</style>
<style scoped>
.submitBtn{
  width: 100%;
}
</style>
