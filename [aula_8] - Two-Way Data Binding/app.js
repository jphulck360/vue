new Vue({
	el: '#vue-app',
	data:{
		nome: '',
		idade: ''
	},
	methods:{
		logNome: function(){
			console.log('Ins nome: ');
		},
		logIdade: function(){
			console.log('Ins idade: ');
		}
	}
});