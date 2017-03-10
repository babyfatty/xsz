<template>
  <div class="hello">
    <span class="registerTitle">注册</span>
    <router-link :to="{name:'login'}" class="loginLink">已经注册过，直接登录 >></router-link>
    <div class="form-group">
    <label for="">姓名</label>
    <input type="numbder" class="form-control" id="" v-model="name" placeholder="姓名">
    </div>
    <div class="form-group">
      <label for="">年级</label>
      <input type="numbder" class="form-control" id="" v-model="grade" placeholder="年级">
    </div>
    <div class="form-group">
      <label for="">学校</label>
      <input type="numbder" class="form-control" id="" v-model="school" placeholder="学校">
    </div>
    <div class="form-group">
      <label for="">手机号</label>
      <input type="numbder" class="form-control" id="" v-model="phone" placeholder="手机号">
    </div>
    <div class="form-inline">
      <div class="form-group">
        <label for="">验证码</label>
        <input type="numbder" class="form-control" v-model="varyCode" placeholder="验证码">
        <button type="button" class="btn btn-default codeBtn" disabled="disabled" v-show="!btnShow">等待{{wait}}s</button>
        <button class="btn btn-primary codeBtn" v-on:click="sendSms" v-show="btnShow">发送</button>
      </div>
      <button class="btn btn-primary" v-on:click="vary">提交</button>
    </div>
    <button type="button" class="btn btn-primary submitBtn" v-on:click="submit">提交</button>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      name: '',
      school:'',
      grade:'',
      phone:'',
      varyCode:'',
      wait:10,
      btnShow:true
    }
  },
  mounted() {
  },
  methods: {
    submit(){
      this.$http.post('http://xesfun.com/xsz/api/addUser',{
        name:this.name,
        grade:this.grade,
        school:this.school,
        phone:this.phone
      }).then((res)=>{
        console.log(res.data)
        if(res.data.success){
          this.$router.replace({name:'seats',params:{user:res.data.user}})
        }else{
          alert('注册失败')
        }
      })
    },
    vary(){
      this.$http.get('http://xesfun.com/xsz/api/varyCode',{
        params:{
          code:this.varyCode
        }
      }).then((res)=>{
        console.log(res)
      })
    },
    sendSms(){
      this.$http.get('http://xesfun.com/xsz/api/sendSMS').then((res)=>{
        console.log(res)
        if(res.success){
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
.registerTitle{
  font-size: 17px;
}
.loginLink{
  float: right;
}
.codeBtn{
  position: absolute;
  bottom: 0;
  right: 0;
}
.form-group{
  position: relative;
}
.submitBtn{
  width: 100%;
}
</style>
