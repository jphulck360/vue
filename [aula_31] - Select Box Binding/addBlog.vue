<template>
	<div id="add-blog">
		<h2>Adicionar novo post</h2>
		<form>
			<label>Título</label>
			<input type="text" v-model.lazy="blog.title" required />
			<label>Conteúdo</label>
			<textarea v-model.lazy="blog.content"></textarea>
			<div id="checkboxes">
				<label>Ninjas</label>
				<input type="checkbox" value="ninjas" v-model="blog.categories"/>
				<label>Wizards</label>
				<input type="checkbox" value="wizards" v-model="blog.categories"/>
				<label>Warriors</label>
				<input type="checkbox" value="warriors" v-model="blog.categories"/>
			</div>
			<label>Autor:</label>
			<select v-model="blog.author">
				<option v-for="author in authors">{{ author }}</option>
			</select>
		</form>
		
		<div id="preview">
			<h3>Visualizar Blog</h3>
			<p>Título: {{ title }}</p>
			<p>Conteúdo: {{ content }}</p>
			<p>Categorias:</p>
			<ul>
				<li v-for="category in blog.categories">{{ category }}</li>
			</ul>
		</div>
	</div>
</template>

<script>

export default{
	data(){
		return{
			blog:{
				title: "",
				content: "",
				categories: [],
				author: ""
			},
			authors:['Kishi','Ozaki']
		}
	},
	methods:{
	}
}
</script>

<style>

#add-blog *{
	box-sizing: border-box;
}
#add-blog{
	margin: 20px auto;
	max-width: 500px;
}
label{
	display: block;
	margin: 20px 0 10px;
}
input[type="text"], textarea{
	display: block;
	width: 100%;
	padding: 8px;
}
#preview{
	padding: 10px 20px;
	border: 1px dotted #cc;
	margin: 30px 0;
}
h3{
	margin-top: 10px;
}
#checkboxes input{
	display: inline-block;
	margin-right: 10px;
}
#checkboxes label{
	display: inline-block
}
</style>