<template>
	<div id="add-blog">
		<h2>Adicionar novo post</h2>
		<form>
			<label>Título</label>
			<input type="text" v-model.lazy="blog.title" required />
			<label>Conteúdo</label>
			<textarea v-model.lazy="blog.content"></textarea>
		</form>
		<div id="preview">
			<h3>Visualizar Blog</h3>
			<p>Título: {{ title }}</p>
			<p>Conteúdo: {{ content }}</p>
		</div>
	</div>
</template>

<script>

export default{
	data(){
		return{
			blog:{
				title: "",
				content: ""
			}
		}
	},
	methods:{
	}
}
</script>