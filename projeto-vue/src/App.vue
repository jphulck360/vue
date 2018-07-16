<template>
	<div>
		<h1>{{ title }}</h1>
		<p>{{ saudacao }}</p>
	</div>
</template>

<script>
export default{
	data(){
		return{
			title: 'Teste Vue 1...'
		}
	},
	methods:{
		saudacao: function(){
			return 'E aee!';
		}
	}
}
</script>