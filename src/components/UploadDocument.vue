<template>
	<div class="mt-16 ml-16 w-auto h-auto">
		<h1 class="text-3xl font-bold">Upload Your Documents</h1>
		<h3 class="text-lg pt-4">
			ClearEstate will analyze your documents for key insights.
		</h3>
		<div class="mt-10">
			<Toast />
			<FileUpload
				mode="basic"
				name="documentUpload"
				:url="getFileUploadURL"
				accept="application/pdf"
				:maxFileSize="1000000"
				@progress="progressCallback"
				@upload="uploadCallback"
				@error="uploadFailureCallback"
			/>
		</div>
		<!-- 
			For the sake of the demo, temporarily display info cards 
			here. Post-demo, things will be rearranged so the info cards show up 
			when you select the document from the listDocuments section.
 		-->
		<div id="card-container" class="max-w-screen-md flex flex-wrap">
			<Card
				class="overflow-hidden m-20"
				v-for="data in documentArr"
				v-if="documentLoaded"
			>
				<template #title>{{ Object.keys(data)[0] }}</template>
				<template #content>{{ data }}</template>
			</Card>
		</div>
	</div>
</template>

<script setup lang="ts">
import FileUpload from 'primevue/fileupload';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';
import Card from 'primevue/card';
import { computed, ref } from 'vue';
import { useUserStore, useDocumentStore } from '@/stores';
import { storeToRefs } from 'pinia';
const documentStore = useDocumentStore();
const userStore = useUserStore();
const { user } = storeToRefs(userStore);
const { document } = storeToRefs(documentStore);

const documentArr = [
	{
		appraisalMetadata: {
			appraisalCompany: 'NO DATA FOUND',
			address: 'NO DATA FOUND',
			phone: 'NO DATA FOUND',
			fax: 'NO DATA FOUND',
			website: 'NO DATA FOUND',
			clientFileNumber: 'NO DATA FOUND',
			appraisalFileNumber: 'NO DATA FOUND',
		},
	},
	{
		subjectPropertyIdentification: {
			address: 'NO DATA FOUND',
			city: 'NO DATA FOUND',
			county: 'NO DATA FOUND',
			state: 'NO DATA FOUND',
			zip: 'NO DATA FOUND',
			legalDescription: 'NO DATA FOUND',
			taxParcelNumber: 'NO DATA FOUND',
			realEstateTaxes: 'NO DATA FOUND',
			taxYear: 'NO DATA FOUND',
		},
	},
	{
		reconciliationsAndConclusions: {
			opinionOfValueAsOf: 'NO DATA FOUND',
			valueBySalesComparisonApproach: 'NO DATA FOUND',
			valueByCostApproach: 'NO DATA FOUND',
			valueByIncomeApproach: 'NO DATA FOUND',
			finalValueReconciliation: 'NO DATA FOUND',
		},
	},
];
const toast = useToast();
let documentLoaded = ref(false);

const progressCallback = (event: any) => {
	console.log(event);
	toast.add({
		severity: 'info',
		summary: 'File Uploading',
		detail: `File is uploading`,
		life: 3000,
	});
};

const uploadFailureCallback = () => {
	toast.add({
		severity: 'error',
		summary: 'Error',
		detail: 'Issue uploading file',
		life: 3000,
	});
};

const uploadCallback = async (event: any) => {
	console.log(event);
	toast.add({
		severity: 'info',
		summary: 'Success',
		detail: 'Processing file...',
		life: 3000,
	});
	const { vs_id: vectorStoreId } = JSON.parse(event.xhr.response);
	await documentStore.processDocument(vectorStoreId);
	documentLoaded.value = true;
	toast.add({
		severity: 'success',
		summary: 'Success',
		detail: `File ${event.files[0].name} processed!`,
		life: 3000,
	});
};
const getFileUploadURL = computed(() => {
	try {
		return `${import.meta.env.VITE_BACKEND_URL}/openai/document/upload/${user.value.id}`;
	} catch (error) {
		console.error('ERROR: ', error);
	}
	// @ts-ignore
});
</script>
