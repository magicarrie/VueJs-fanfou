<template>
  <transition>
    <div class="user">
      这里是：User <!-- {{ $route.params.id }} -->
      <p>你好，这里是100</p>
      <!-- <router-view></router-view> -->
    </div>
  </transition>
</template>
<script>
export default {
  // name: 'app',
  // beforeRouteEnter (to, from, next) {
  //   console.log('组件。。');
  //   next();
  // },
  // watch: {
  //   '$route' (to, from) {
  //     if (to.path === '/user/bar') {
  //       console.log('to bar');
  //     } else if (to.path === '/user/foo') {
  //       console.log('to foo');
  //     }
  //   }
  // }
};
</script>
<style>
/*	.user{
    width: 150vw;
    height:1000px;
		background: pink;
	}
  .user p{
    margin-top: 100px;
  }*/
</style>