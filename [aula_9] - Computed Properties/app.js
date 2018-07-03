new Vue({
	el:'#vue-app',
	data:{
		idade: 30,
		a: 0,
		b: 0
	},
	methods: {
		/*
		addToA: function(){
			console.log('addToA');
			return this.a + this.idade;
		},
		addToB: function(){
			console.log('addToB');
			return this.b + this.idade;
		}
		*/
	},
	computed: {
		addToA: function(){
			console.log('addToA');
			return this.a + this.idade;
		},
		addToB: function(){
			console.log('addToB');
			return this.b + this.idade;
		},
		subtToA: function(){
			console.log('subtToA');
			return this.a - this.idade;
		},
		subtToB: function(){
			console.log('subtToB');
			return this.b - this.idade;
		}
	}
});