<template>
	<ul>
		<li v-for="ninja in ninjas">{{ ninja }}</li>
	</ul>
</template>

<script>
export default{
	data(){
		return {
			ninjas: ['Naruto', 'Sasuke', 'Gaara']
		}
	}
}
</script>

<style>
</style>