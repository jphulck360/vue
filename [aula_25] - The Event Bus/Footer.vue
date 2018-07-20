<template>
	<footer>
		<p>{{ copyright }} {{ title }}</p>
	</footer>
</template>

<script>
import { bus } from '../main';

export default{
	props: {
		title: {
			type: String
		}
	},
	data(){
		return{
			copyright: 'All Rights Reserved'
		}
	}
}
</script>