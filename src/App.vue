<script setup>
	import { RouterLink, RouterView } from "vue-router"
	import Header from "./components/Header.vue"
	import List from "./views/List.vue"
	import NewList from "./views/NewList.vue"
</script>

<template>
	<Header />
	<RouterView />
</template>

