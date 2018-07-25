import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

Vue.directive('rainbow',{
	bind(el, binding, vnode){
		el.style.color = "#" + Math.random().toString().slice(2,8);
	}
});

Vue.directive('theme',{
	bind(el, binding, vnode){
	}
});

new Vue({
	el: '#app',
	render: h => h(App)
})