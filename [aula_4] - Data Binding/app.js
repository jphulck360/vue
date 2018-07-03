new Vue({
	el: '#vue-app',
	data: {
		nome: 'Paulo',
		idade: ,
		website: 'https://www.google.com',
		websiteTag:'<a href="https://www.google.com">Site do Google</a>'
	},
	methods: {
		greet: function(time){
			return 'Bom '+time+''+this.name;
		}
	}
});