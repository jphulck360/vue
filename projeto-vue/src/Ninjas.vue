<template>
	<div>
		<h2>Lista de Personagens</h2>
		<ul>
			<li v-for="ninja in ninjas">{{ ninja }}</li>
		</ul>
	</div>
</template>

<script>
export default{
	data(){
		return {
			ninjas: ['Naruto', 'Sasuke', 'Gaara', 'Goku', 'Kenshin']
		}
	}
}
</script>

<style scoped>
h2{
	color: purple;
}
</style>