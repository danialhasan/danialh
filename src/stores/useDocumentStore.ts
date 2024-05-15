import { ref, computed } from 'vue';
import { defineStore, storeToRefs } from 'pinia';
import axios from 'axios';
import type { Ref } from 'vue';
import type { AppraisalReportData } from '@/types/AppraisalInterfaces';
import { useUserStore } from './useUserStore';

const test = {
	appraisalMetadata: {
		appraisalCompany: 'NO DATA FOUND',
		address: 'NO DATA FOUND',
		phone: 'NO DATA FOUND',
		fax: 'NO DATA FOUND',
		website: 'NO DATA FOUND',
		clientFileNumber: 'NO DATA FOUND',
		appraisalFileNumber: 'NO DATA FOUND',
	},
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
	reconciliationsAndConclusions: {
		opinionOfValueAsOf: 'NO DATA FOUND',
		valueBySalesComparisonApproach: 'NO DATA FOUND',
		valueByCostApproach: 'NO DATA FOUND',
		valueByIncomeApproach: 'NO DATA FOUND',
		finalValueReconciliation: 'NO DATA FOUND',
	},
	marketAreaAnalysis: {
		location: 'NO DATA FOUND',
		builtUp: 'NO DATA FOUND',
		growth: 'NO DATA FOUND',
		supplyDemand: 'NO DATA FOUND',
		valueTrend: 'NO DATA FOUND',
		typicalMarketingTime: 'NO DATA FOUND',
	},
	improvementsAnalysis: {
		generalDesign: 'NO DATA FOUND',
		exterior: 'NO DATA FOUND',
		interior: {
			flooring: 'NO DATA FOUND',
			walls: 'NO DATA FOUND',
			kitchen: { countertops: 'NO DATA FOUND', appliances: 'NO DATA FOUND' },
		},
	},
};

export const useDocumentStore = defineStore('document', () => {
	// init referenced stores
	const userStore = useUserStore();
	const { user } = storeToRefs(userStore);

	// state
	const document: Ref<AppraisalReportData | any> = ref();
	const documents: Ref<AppraisalReportData[] | any[]> = ref(
		JSON.parse(localStorage.getItem('documents'))
	);

	// computed
	const getDocument = computed(() => document);

	// actions/methods
	const processDocument = async (vectorStoreId: string) => {
		const { data: processedDocument } = await axios.get(
			`${import.meta.env.VITE_BACKEND_URL}/openai/document/assistant/${user.value.id}/${vectorStoreId}`
		);
		// transform into an array so we can display it
		const documentArray = convertObjectToArray(processedDocument);
		console.log(documentArray);
		document.value = documentArray;
		return document.value;
	};

	const getAllDocuments = async (userId: string) => {
		console.log('Getting documents');
		const res = await axios.get(
			`${import.meta.env.VITE_BACKEND_URL}/openai/documents/${userId}`
		);
		documents.value = res.data;
		localStorage.setItem('documents', JSON.stringify(documents.value));
		return documents.value;
	};
	const convertObjectToArray = (obj: Record<string, any>) => {
		// Initialize an empty array to store the converted objects
		let resultArray = [];

		// Iterate over each key in the object
		for (const key in obj) {
			if (obj.hasOwnProperty(key)) {
				// Create an object where the key is the original key and the value is its corresponding value
				let newObj: Record<string, any> = {};
				newObj[key] = obj[key];
				// Push this new object into the result array
				resultArray.push(newObj);
			}
		}

		return resultArray;
	};

	return { document, documents, getDocument, processDocument, getAllDocuments };
});
