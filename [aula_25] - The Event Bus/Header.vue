<template>
	<header>
		<h1 v-on:click="changeTitle">{{ title }}</h1>
	</header>
</template>

<script>
import { bus } from '../main';

export default{
	props: {
		title: {
			type: String
		}
	},
	data(){
		return{
			title: 'Vue Warriors'
		}
	},
	methods:{
		changeTitle: function(){
			this.$emit('changeTitle','Vue Warriors');
		}
	}
}
</script>

<style scoped>
</style scoped>