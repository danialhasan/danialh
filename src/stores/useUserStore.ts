import { ref, computed } from 'vue';
import type { Ref } from 'vue';
import { defineStore } from 'pinia';
import { getCookie, cleanUpUser } from '../helpers/index';

interface User {
	name?: string;
	email?: string;
	profilePicture?: string;
	createdAt?: string;
	id?: string;
}

export const useUserStore = defineStore('user', () => {
	// state
	const user: Ref<User> = ref();
	// computed
	const getName = computed(() => user.value.name);
	// actions/methods
	const grabProfileFromCookie = (): any | undefined => {
		const user = JSON.stringify(`{ ${getCookie('userCookie')} }`);
		if (!user.includes('undefined')) return cleanUpUser(user);
		return undefined;
	};

	return { user, getName, grabProfileFromCookie };
});
