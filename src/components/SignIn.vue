<template>
  <div class="hello">
    <h2>登录</h2>
    <div class="form-group">
      <label for="">手机号</label>
      <input type="numbder" class="form-control" id="phone" v-model="" placeholder="手机号">
    </div>
    <div class="form-group">
      <label for="">验证码</label>
      <input type="numbder" class="form-control" id="varyCode" placeholder="验证码">
    </div>
    <button type="button" class="btn btn-primary" >提交</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
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
