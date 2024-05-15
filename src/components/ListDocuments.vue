<template>
	<div class="mt-16 ml-16">
		<h1 class="text-3xl font-bold">Your Documents</h1>
		<h3 class="text-lg pt-4">All uploaded documents can be found here.</h3>
		<div class="mt-10">
			<div
				id="card-container"
				class="max-w-screen-md h-auto flex flex-wrap gap-5"
			>
				<Card
					style="width: 20rem"
					class="overflow-hidden"
					v-for="document in documents"
					:key="document.id"
				>
					<template #title>{{ document.name }}</template>
					<template #content>
						<p class="m-0">
							This is where your brief document description would go.
						</p>
					</template>
					<template #footer>
						<div class="flex mt-1">
							<Button label="Open" class="w-full" />
						</div>
					</template>
				</Card>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Card from 'primevue/card';
import Button from 'primevue/button';
import { useUserStore, useDocumentStore } from '@/stores';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const userStore = useUserStore();
const documentStore = useDocumentStore();
const { user } = storeToRefs(userStore);
const { documents } = storeToRefs(documentStore);

/**
 * Get documents from backend, populate documents ref with it.
 */
onMounted(async () => {
	if (!documents.value.length) documentStore.getAllDocuments;
	console.log(documents.value);
});
</script>
