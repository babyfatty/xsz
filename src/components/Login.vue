<template>
  <div class="hello">
    <h3>登录</h3>
        <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">手机号</label>
        <div class="">
          <input type="numbder" class="form-control" id="inputEmail3" v-model="phone" placeholder="手机号">
        </div>
      </div>
      <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">验证码</label>
        <div class="">
          <input type="numbder" class="form-control" id="inputEmail3" v-model="varyCode" placeholder="验证码">
        </div>
        <button type="button" class="btn btn-default codeBtn" disabled="disabled" v-show="!btnShow">等待{{wait}}s</button>
        <button class="btn btn-primary codeBtn" v-on:click="sendSms" v-show="btnShow">发送</button>
      </div>
      <button class="btn btn-primary submitBtn" v-on:click="vary">提交</button>
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
      // this.$http.get('http://xesfun.com/xsz/api/varyLogin',{
      this.$http.get('http://localhost:8889/api/varyLogin',{
        params:{
          code:this.varyCode,
          phone:this.phone
        }
      }).then((res)=>{
        console.log(res.data)
        if(res.data.success){
          this.$router.replace({name:'seats',params:{user:res.data.user}})
        }else{
          alert(res.data.msg)
        }
        console.log(res)
      })
    },
    sendSms(){
      this.$http.get('http://xesfun.com/xsz/api/sendSMS',{
        params:{
          phone:this.phone
        }
      }).then((res)=>{
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
<style scoped>
.submitBtn{
  width: 100%;
}
.codeBtn{
  position: absolute;
  bottom: 0;
  right: 0;
}
.form-group{
  position: relative;
}
</style>
