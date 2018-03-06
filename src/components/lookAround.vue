<template class="lookAround">
	<div>
		<ul>
			<li v-for="(item,index) in items">
				<div  class='headImg'>
					<img v-bind:src="imgArr[index]"/>
				</div>

				<div class="right">
					<span class="name">{{item.user.name}}</span>
					<span class="unique_id">@{{item.user.unique_id}}</span>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
  name: 'lookAround',
  data () {
    return {
      interfaces: '/api',
      items: '',
      imgArr: []
    };
  },
  beforeRouteEnter (to, from, next) {
    next(vm => { // 搜索全站消息(未设置隐私用户的消息)
      vm.$indicator.open('请稍后...');
      vm.$http.get(vm.interfaces + 'search/public_timeline.json?q=test', {})
      .then((response) => {
        vm.items = response.data;
        for (var i in vm.items) {
          vm.imgArr.push(vm.items[i].user.profile_image_url);
        };
        vm.$indicator.close();
      }, (response) => { console.log('失败了?'); });
    });
  }
};
</script>