new Vue({
	el: '#vue-app',
	data: {
		output: 'lasanha'
	},
	methods:
	{
		readRefs: function()
		{
			console.log(this.$refs.innerText);
			this.output = this.$refs.input.value;
		}
	}
});