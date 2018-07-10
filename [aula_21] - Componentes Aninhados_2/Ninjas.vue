<script>

export default{
	data(){
		return{
			ninjas: {
				{name: 'Gaara', speciality: 'Areia', show: false},
				{name: 'Naruto', speciality: 'Rasengan', show: false},
				{name: 'Sasuke', speciality: 'Chidori', show: false},
				{name: 'Neji', speciality: '64-tenktsu', show: false},
				{name: 'Kakashi', speciality: '5 elements', show: false},
			}
		}
	}
}

</script>

<style scoped>

#ninjas{
	width: 100%;
	max-width: 1300px;
	margin: 50px auto;
	padding: 0 20px;
	box-sizing: border-box;
}

ul{
	display: flex;
	flex-wrap: wrap;
	list-style-type: none;
	padding: 0;
}

li{
	flex-grow: 1;
	flex-basis: 300px;
	text-align: center;
	padding: 30px;
	border: 1px solid #222;
}

</style>