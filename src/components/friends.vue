<template class="friends">
	<div>
     <ul>
       <li v-for="(item,index) in items">
         <div class="headImg">
           <img v-bind:src="ImgArr[index]">
         </div>

         <div class="right">
           <span class="name">{{item.name}}</span>
           <span class="status">{{item.status.text}}</span>
         </div>
       </li>
     </ul>
	</div>
</template>
<script>
export default {
  name: 'friends',
  data () {
    return {
      interfaces: '/api',
      items: '',
      ImgArr: []
    };
  },
  beforeRouteEnter (to, from, next) { // 返回用户好友
    next(vm => {
      vm.$indicator.open('请稍后...');
      vm.$http.get(vm.interfaces + 'statuses/friends.json', {})
      .then((response) => {
        vm.items = response.data;
        for (var i = 0; i < response.data.length; i++) {
          vm.ImgArr.push(response.data[i].profile_image_url);
        };
        vm.$indicator.close();
      }, (response) => { console.log('失败了,why?'); });
    });
  }
};
</script>