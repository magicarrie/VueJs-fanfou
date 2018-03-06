<template>
  <div class="home">
    <!-- header -->
     <div class="header"  v-bind:style="{ background: profile_background }">
        <span class="headImg" @click="isPersonalMsgVisible = true;" v-bind:style="{ background: profile_image }"></span>
        <span v-text="selected"></span>
        <router-link to="/vuex">vuex</router-link>
        <span>{{ $store.state.count }}</span>
    </div>

    <!-- content -->
    <div class="content">
      <router-view></router-view>
    </div>

    <!-- footer -->
    <div id="footer">
      <span @click="toFriends" v-bind:class="{active:isActive=='friends'}">
        <img src="../../static/images/message.png">
        <b>我的好友</b>
      </span>
      <span @click="toIdUpload" v-bind:class="{active:isActive=='idUpload'}">
        <img src="../../static/images/contact.png">
        <b>身份证上传</b>
      </span>
      <span @click="toLookAround" v-bind:class="{active:isActive=='around'}">
        <img src="../../static/images/star.png">
        <b>随便看看</b>
      </span>
    </div>

    <!-- mint控件 -->
    <div class="popup">
      <mt-popup v-model="isPersonalMsgVisible" position="left" popup-transition="popup-slide">
        <ul>
          <li v-bind:class="{active:popChoosed=='personalmsg'}" @click="toPersonalmsg">我的资料</li>
          <li v-bind:class="{active:popChoosed=='inBox'}" @click="popChoosed='inBox' ">收件箱</li>
          <li v-bind:class="{active:popChoosed=='hotTopics'}" @click="popChoosed='hotTopics' ">热门话题</li>
          <li  v-bind:class="{active:popChoosed=='setting'}" @click="popChoosed='setting' ">设置</li>
        </ul>
      </mt-popup>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      interfaces: '/api',
      selected: '我的好友',
      isActive: '',
      isPersonalMsgVisible: false,
      popChoosed: 'personalmsg',
      profile_background: '',
      profile_image: ''
    };
  },
  created: function () {
    // 判断当前的路由
    if (this.$route.path === '/') {
      this.$router.push({path: '/home/friends'});
    }
    if (this.$route.path === '/home/friends') {
      this.isActive = 'friends';
    } else if (this.$route.path === '/home/lookAround') {
      this.isActive = 'around';
    } else if (this.$route.path === '/home/idUpload') {
      this.isActive = 'idUpload';
    }
    this.$http.get(this.interfaces + '/account/verify_credentials.json', {}).then((response) => {
      alert(response.data);
      var data = response.data;
      this.name = data.name;
      this.profile_background = 'url(' + data.profile_background_image_url + ') no-repeat center / 100% 100%' + data.profile_background_color;
      this.profile_image = 'url(' + data.profile_image_url + ') no-repeat center / 100% 100%';
    }, (response) => {
      alert('失败了, Why, Why?');
      console.log('失败了, Why, Why?');
    });
  },
  methods: {
    toLookAround: function () {
      this.isActive = 'around';
      this.selected = '随便看看';
      this.$router.push({path: '/home/lookAround'});
    },
    toFriends: function () {
      this.isActive = 'friends';
      this.selected = '我的好友';
      this.$router.push({path: '/home/friends'});
    },
    toPersonalmsg: function () {
      this.popChoosed = 'personalmsg';
      this.$router.push('/personalmsg');
    },
    toIdUpload: function () {
      this.isActive = 'idUpload';
      this.selected = '身份证上传';
      this.$router.push({path: '/home/idUpload'});
    }
  },
  watch: {
    '$route' (to, from) {
      if (to.path === '/home/friends') {

      } else if (to.path === '/user/foo') {

      }
    }
  }
};
</script>
<style>
  #app .header{
    height: 2.5rem;
    position: fixed;
    top:0;
    left:0;
    right: 0;
    z-index: 2014;
  }
  #app .header span:nth-child(1){
    width:2rem;
    height:80%;
    border-radius: 50%;
    position: absolute;
    left:.5rem;
    top:10%;
  }
  #app .header span:nth-child(2){
    color: #fff;
    line-height: 2.5rem;
    display: inline-block;
    width: 100%;
    text-align: center;
    font-size: .9rem;
  }
  .content {
    overflow: scroll;
    height: 100vh;
    padding-top: 2.5rem;
    padding-bottom:2.5rem;
  }
  .content ul{
    width: 100vw;
  }
  .content ul li{
    width: 100vw;
    display: block;
    height: 2.5rem;
    border-bottom:1px solid #F9F9F9;
  }
  .content ul li div.headImg{
    float: left;
    width: 20%;
    height: 100%;
    position: relative;
  }
  .content ul li div.headImg img{
    width:1.9rem;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  .content ul li div.right{
    width:80%;
    height: 100%;
    float: right;
    position: relative;
    padding-right:1rem;
  }
  .content ul li div.right .name{
    color: #333;
    font-size: .6rem;
    font-weight: bold;
    display:block;
    padding-top:.3rem;
  }
  .content ul li div.right .status{
    display: block;
    width: 90%;
    font-size: .6rem;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    padding-top:.2rem;
    color: #666;
  }
  .content ul li div.right .unique_id{
    display: block;
    color: #616060;
    padding-top:.2rem;
    font-size: .5rem;
  }
  #footer {
    border-top: 1px solid #ddd;
    width: 100vw;
    position: fixed;
    bottom: 0;
    left:0;
    right: 0;
    background: #fff;
    height: 2.5rem;
  }
  #footer span{
    display: inline-block;
    padding-top: .1rem;
    float: left;
    width: 33.333333%;
    height:100%;
  }
  #footer span img{
    height: 1.1rem;
    display: block;
    margin:0 auto;
  }
  #footer span b{
    display: block;
    width: 100%;
    font-size: .7rem;
    text-align: center;
    padding-top: .2rem;
  }
  #footer span.active{
     background: #E7E3E3;
  }
  .mint-popup{
    width:60%;
    height: 100%;
    padding-top:2.5rem;
  }
  .mint-popup ul{
    width: 100%;
  }
  .mint-popup ul li{
    width: 100%;
    font-size: .8rem;
    padding:.8rem 0 0 .5rem;
  }
  .mint-popup ul li.active{
    color: #79BFF4;
  }
</style>