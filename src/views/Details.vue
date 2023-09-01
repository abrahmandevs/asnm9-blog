<script setup>
	import { ref } from "vue"
	import axios from "axios"

	import { ArrowLongRightIcon } from "@heroicons/vue/24/outline"

	const params = new URLSearchParams(window.location.search)
	const id = params.get("id")

	const blogDetails = ref([])

	details()
	async function details(id) {
		let url = "https://basic-blog.teamrabbil.com/api/post-details/" + id
		let res = await axios.get(url)
		if (res.status == 200) {
			blogDetails.value = res.data
		}
	}
</script>
<template>
	<div id="blogSection" class="my-5">
		<div class="mx-auto px-3 sm:px-8 md:px-12 space-y-2">
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 py-2 justify-center">
				<div class="h-full" v-for="(list, index) in blogDetails" :key="index"></div>
			</div>
			<div class="space-y-6" v-for="(list, index) in blogDetails" :key="index">
				<!-- card haeder -->
				<div class="shrink-0 aspect-square">
					<!-- <img :src="list['img']" alt="image" class="max-w-full h-auto object-cover" /> -->
					<img src="https://roar.media/wp-content/uploads/2023/07/18.png" alt="image" class="max-w-full h-auto object-cover" />
				</div>
				<!-- card body -->
				<div class="flex-auto space-y-3">
					<div>
						<!-- <a href="#" class="font-semibold text-lg md:text-xl hover:text-green-600 transition-all duration-300">{{ list["title"] }}</a> -->
						<h1 class="font-semibold text-lg md:text-2xl">{{ list["title"] }}</h1>
						<p class="text-xs text-gray-600 font-semibold">d<!-- {{ list["created_at"] }} --></p>
					</div>
					<!-- <p class="text-sm text-gray-400">{{ list["short"] }}</p> -->
					<p class="text-gray-400">{{ list["short"] }}</p>
				</div>
			</div>
		</div>
	</div>
</template>
