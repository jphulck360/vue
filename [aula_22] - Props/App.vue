<template>
	<div>
		<app-header></app-header>
		<app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
		<app-footer></app-footer>
	</div>
</template>

<script>

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Ninjas from './components/Ninjas.vue';