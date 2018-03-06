<template>
  <div class="login">
    <label>账号：<input type="text" v-model="username"></label>
    <label>密码：<input type="password" v-model="password"></label>
    <span @click="tohello">登录</span>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      interfaces: '/api'
    };
  },
  methods: {
    tohello () {
      this.$http.post(this.interfaces + '/account/verify_credentials.json', {})
      // this.$http.get(this.interfaces + '/search/public_timeline.json?q=test', {})
      .then(
          function (response) {
            console.log(response);
          },
          function (error) {
            console.log(error);
            alert('服务器访问出错!');
          }
      );
      this.$router.push('/home');
    }
  }
};
</script>

<style scoped>
  .login{
    font-size: 6vw;
    text-align: center;
    min-height: 100vh;
    background: url(../../static/images/bg.png);
    background-size: 100% 100%;
    padding-top: 20vw;
    color: #fff;
  }
  .login label{
    display: block;
    margin-bottom:5vw;
  }
  .login label input{
    width:50vw;
    height:7vw;
    color: #333;
    font-size: 4vw;
  }
  .login  span{
    background: #34c7d4;
    width:70vw;
    display: block;
    margin-left:15vw;
    padding:1vw;
    border-radius: 3px;
    letter-spacing: 4px;
  }
</style>
