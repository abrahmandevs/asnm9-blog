<script setup>
	import { ref } from "vue"
	import axios from "axios"
	import { Dialog, DialogPanel, TransitionRoot, TransitionChild } from "@headlessui/vue"
	import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline"

	const mobileMenuOpen = ref(false)
	const navBarCategorys = ref([])

	navBarCategory()
	async function navBarCategory() {
		let url = "https://basic-blog.teamrabbil.com/api/post-categories"
		let res = await axios.get(url)
		if (res.status == 200) {
			navBarCategorys.value = res.data
		}
	}
</script>

<template>
	<header class="bg-white border-b mx-auto px-3 sm:px-8 md:px-12">
		<nav class="mx-auto flex max-w-7xl items-center justify-between py-4" aria-label="Global">
			<div class="grow flex items-center justify-between">
				<router-link to="/" class="-m-1.5 p-1.5 text-xl font-semibold text-black hover:text-black mr-4">AR Rahman</router-link>
				<div class="hidden shrink-0 lg:flex items-center">
					<a v-for="(category, index) in navBarCategorys" :key="index" :href="category['name']" class="text-sm text-black px-4 py-2">{{ category["name"] }}</a>
				</div>

				<!-- mobileMenuOpen mobile sidebar -->
				<div class="flex lg:hidden">
					<button type="button" class="inline-flex items-center justify-center rounded-lgm-0.5 text-gray-700 focus:outline-none border-0 p-1.5" @click="mobileMenuOpen = true">
						<Bars3Icon class="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
			</div>
		</nav>
	</header>
	<TransitionRoot as="template" :show="mobileMenuOpen">
		<Dialog as="div" class="relative z-40 lg:hidden bg-blue-500" @close="mobileMenuOpen = false">
			<TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
				<div class="fixed inset-0 bg-black bg-opacity-25" />
			</TransitionChild>

			<div class="bg-green-40 fixed inset-0 z-40 flex justify-end">
				<TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="translate-x-full">
					<DialogPanel class="w-full sm:w-3/6 relative overflow-y-auto bg-white p-8 shadow-xl">
						<div class="flex items-center justify-between">
							<a href="#" class="-m-1.5 p-1.5 text-xl font-semibold text-black hover:text-black mr-4">Launch </a>
							<button type="button" class="-m-2.5 rounded-lgp-2.5 text-gray-700" @click="mobileMenuOpen = false">
								<XMarkIcon class="h-6 w-6" aria-hidden="true" />
							</button>
						</div>
						<div class="mb-3 space-y-1 mt-6">
							<a v-for="(category, index) in navBarCategorys" :key="index" :href="category['name']" class="block text-sm text-gray-600 py-2 hover:text-black transition-all duration-300">{{ category["name"] }}</a>
						</div>
					</DialogPanel>
				</TransitionChild>
			</div>
		</Dialog>
	</TransitionRoot>
</template>

