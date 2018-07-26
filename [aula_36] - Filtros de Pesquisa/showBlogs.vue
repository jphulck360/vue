<template>
	<div v-theme:column="'narrow'" id="show-blogs">
		<h1>Lista de Artigos</h1>
		<input type="text" v-model="search" placeholder="search blogs"/>
		<div v-for="blog in filteredBlogs" class="single-blog">
			<h2>{{ blog.title | to-uppercase }}</h2>
			<article>{{ blog.body | snippet }}</article>
		</div>
	</div>
</template>

<script>

export default{
	data(){
		return{
			blogs: [],
			search: '',
		}
	},
	methods:{
	},
	created(){
		this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
			this.blogs = data.body.slice(0,10);
			
		})
	},
	computed: {
		filteredBlogs: function(){
			return this.blog.filter((blog) => {
				return blog.title.match(this.search);
			});
		}
	}
}
</script>

<style>

#show-blogs{
}

.single-blog{
	padding: 20px;
}
</style>