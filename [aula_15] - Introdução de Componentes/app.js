Vue.component('saudacao', {
	template: '<p>Componente para reuso.</p>,
	data: function()
	{
		return {
			nome: 'Goku'
		}
	}
});

new Vue({
	el: '#vue-app-um'
});

new Vue({
	el: '#vue-app-dois'
});