<script setup>
	import { ref } from "vue"
	import axios from "axios"

	import { ArrowLongRightIcon } from "@heroicons/vue/24/outline"
	const blogPostList = ref([])
	const sectionTitle = ref("Recent publications")

	postList()
	async function postList() {
		let url = "https://basic-blog.teamrabbil.com/api/post-list/2"
		let res = await axios.get(url)
		if (res.status == 200) {
			blogPostList.value = res.data
		}
	}
</script>
<template>
	<div id="blogSection" class="my-5">
		<div class="mx-auto px-3 sm:px-8 md:px-12 space-y-2">
			<div class="py-2 space-y-3 border-b border-green-100 shadow-md shadow-green-100/70">
				<h1 class="text-4xl font-bold">{{ sectionTitle }}</h1>
			</div>
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 py-2 justify-center">
				<div class="" v-for="(list, index) in blogPostList" :key="index">
					<div class="h-full border rounded border-gray-100/50 shadow-md overflow-hidden relative flex flex-col break-words space-y-2">
						<!-- card haeder -->
						<div class="shrink-0 aspect-square">
							<img :src="list['img']" alt="image" class="max-w-full h-auto object-cover" />
						</div>
						<!-- card body -->
						<div class="flex-auto mx-3 space-y-3">
							<div>
								<router-link :to="`/details?id=` + list['id']" class="font-semibold text-lg md:text-xl hover:text-green-600 transition-all duration-300">{{ list["title"] }}</router-link>
								<p class="text-xs text-gray-600 font-semibold">{{ list["created_at"] }}</p>
							</div>
							<p class="text-sm text-gray-400">{{ list["short"] }}</p>
						</div>
						<!-- card footer -->
						<div class="">
							<router-link :to="`/details?id=` + list['id']" class="py-2 mb-1 flex items-center gap-1 text-sm hover:text-green-600 transition-all duration-300"> Read More <ArrowLongRightIcon class="h-4 w-4" /> </router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
