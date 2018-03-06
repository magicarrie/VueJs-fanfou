<template>
  <div class="personalmsg">
	 <div class="title" v-bind:style="{ background: profile_background }"><span class="left" @click="back"></span>我的资料</div>

	 <div class="content">
	 	<div class="img" v-bind:style="{ background: profile_image }"></div>
	 	<div class="name" v-text="name"></div>
	 	<div class="id">@{{id}}</div>
	 	<div class="photo">查看相册</div>
	 	<table>
	 		<tr>
	 			<td><span v-text="friends_count"></span><span>正在关注</span></td>
	 			<td><span v-text="followers_count"></span><span>被关注</span></td>
	 		</tr>
	 		<tr>
	 			<td><span v-text="favourites_count"></span><span>消息</span></td>
	 			<td><span v-text="statuses_count"></span><span>收藏</span></td>
	 		</tr>
	 	</table>
	 	<p style="margin-top:6rem;">自述：</p>
	 	<p style="margin-bottom:.5rem;" v-text="description"></p>
	 	<p>性别： {{gender}}</p>
	 	<p>生日： {{birthday}}</p>
	 	<p>位置： {{location}}</p>
	 	<p>注册时间： {{created_at}}</p>
	 </div>
  </div>
</template>

<script>
export default {
  name: 'personalmsg',
  data () {
    return {
      interfaces: '/api',
      birthday: '',
      name: '',
      gender: '',
      id: '',
      location: '',
      profile_image: '',
      profile_background: '',
      friends_count: '',
      followers_count: '',
      favourites_count: '',
      statuses_count: '',
      description: '',
      created_at: ''
    };
  },
  created: function () {
    this.$http.get(this.interfaces + '/account/verify_credentials.json', {}).then((response) => {
      var data = response.data;
      this.birthday = data.birthday;
      this.name = data.name;
      this.gender = data.gender;
      this.id = data.id;
      this.location = data.location;
      this.profile_image = 'url(' + data.profile_image_url + ') no-repeat center / 100% 100%';
      this.profile_background = 'url(' + data.profile_background_image_url + ') no-repeat center / 100% 100%' + data.profile_background_color;
      this.friends_count = data.friends_count;
      this.followers_count = data.followers_count;
      this.favourites_count = data.favourites_count;
      this.statuses_count = data.statuses_count;
      this.description = (data.description === '') ? '你咋这么懒尼，啥都没写。。' : data.description;
      this.birthday = data.birthday;
      this.gender = data.gender;
      this.location = data.location;
      this.created_at = new Date(data.created_at).getFullYear() + '-' + (new Date(data.created_at).getMonth() + 1) + '-' + new Date(data.created_at).getDate();
      console.log(data);
    }, (response) => {
      console.log('失败了, Why, Why?');
    });
  },
  methods: {
    back: function () {
      this.$router.go(-1);
    }
  }
};
</script>
<style>
	.title{
		height:2rem;line-height: 2rem;color: #fff;font-size: .8rem;padding:0 .1rem;
	}
	.title .left{
		float: left;width:2rem;height: 100%;background:url(../../static/images/msg.png) no-repeat center;background-size: 65% 65%;
	}
	.content{
		padding:.5rem;position: relative;
	}
	.content .img{
		display:inline-block;width:2rem;height:2rem;border-radius: 50%;position: absolute;top:.5rem;left:0.5rem;
	}
	.content .name{
		text-indent: 2.3rem;padding-bottom: .3rem;
	}
	.content .id{
		color: #666;font-size: .6rem;text-indent: 2.3rem;margin-bottom: 1rem;
	}
	.content .photo{
		display:inline;padding:.3rem;background:#1B9D10;color: #fff;
	}
	.content table{
		width: 100vw;border-collapse: collapse;position: absolute;left:0;top:5.5rem;
	}
	.content table td{
		width: 50%;height:2rem;border:1px solid #D5D1D1;text-align: center;
	}
	.content table td:nth-child(odd){
		border-left:none;
	}
	.content table td:nth-child(even){
		border-right:none;
	}
	.content table td span{
		display: block;width: 100%;height:50%;font-size: .8rem;line-height: 1rem;
	}
	.content table td span:last-child{
		color: #666;font-size: .6rem;
	}
	.content p{
		line-height: 1rem;
	}
</style>