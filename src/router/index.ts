import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import { useAuthStore, useUserStore } from '../stores/index';
import { storeToRefs } from 'pinia';
import { UploadDocument, ListDocuments } from '../components';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home,
			meta: {
				title: 'ClearEstate Home',
			},
			children: [
				{
					path: 'new',
					component: UploadDocument,
					meta: { title: 'Upload New Document' },
				},
				{
					path: '/documents',
					component: ListDocuments,
					meta: { title: 'All Documents' },
				},
			],
		},
		{
			path: '/login',
			name: 'Login',
			component: () => import('../views/Login.vue'),
			meta: {
				title: 'Login to ClearEstate',
			},
		},
		{
			path: '/:pathMatch(.*)*',
			name: 'not-found',
			component: () => import('../views/PageNotFound.vue'),
			meta: {
				title: 'Page not found',
			},
		},
	],
});

// Navigation Guards
router.beforeEach(async (to, from) => {
	const authStore = useAuthStore();
	const userStore = useUserStore();

	const authStoreState = storeToRefs(authStore);
	const userStoreState = storeToRefs(userStore);

	const userProfile = userStore.grabProfileFromCookie();
	/**
	 * Get profile data from cookie. If cookie exists, set user as authenticated.
	 */
	userStoreState.user.value = userProfile;
	if (userProfile) {
		authStoreState.userIsAuthenticated.value = true;
	} else {
		authStoreState.userIsAuthenticated.value = false;
	}

	const isAuthenticated = authStoreState.userIsAuthenticated.value;

	// @ts-expect-error
	document.title = to?.meta?.title ?? 'ClearEstate';
	if (to.name !== 'Login' && !isAuthenticated) {
		return { name: 'Login' };
	}
});

export default router;
