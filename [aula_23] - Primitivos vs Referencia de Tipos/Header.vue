<template>
	<header>
		<h2 v-on:click="changeTitle">{{ title }}</h2>
	</header>
</template>

<script>

	export default{
		props:{
			title:{
				type: String
			}
		},
		data(){
			return{
				title: 'Vue Ninjas'
			}
		},
		methods:{
			changeTitle: functiomn(){
				this.title = "Test Warrior"
			}
		}
	}
</script>