<template>
	<div>
		<p>{{ $store.state.count }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
	</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'vuex',
  methods: mapActions([
    'increment',
    'decrement'
  ])
};
</script>
<style type="text/css">
p{
	font-size: 1rem;
}
button{
	display: block;
	width:2rem;
	height:1rem;
}
</style>