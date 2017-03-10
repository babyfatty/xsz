<template>
  <div class="hello">
    <h2>注册</h2>
    <form>
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
      <div class="form-group">
        <label for="">验证码</label>
        <input type="numbder" class="form-control" id="" v-model="varyCode" placeholder="验证码">
        <button type="button" class="btn btn-primary" v-on:click="vary">提交</button>
        <button type="button" class="btn btn-primary" v-on:click="sendSms">发送</button>
      </div>
      <button type="button" class="btn btn-primary" v-on:click="submit">提交</button>
    </form>
    

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
      varyCode:''
    }
  },
  mounted() {
  },
  methods: {
    submit(){
      this.$http.post('http://localhost:8889/api/addUser',{
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
      this.$http.get('http://localhost:8889/api/varyCode',{
        params:{
          code:this.varyCode
        }
      }).then((res)=>{
        console.log(res)
      })
    },
    sendSms(){
      this.$http.get('http://localhost:8889/api/sendSMS').then((res)=>{
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
