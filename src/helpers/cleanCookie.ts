import { getCookie } from './getCookie';

export const cleanCookie = (name: string) => {
	const cookie = getCookie(name);
	if (!cookie) {
		return;
	}
	return JSON.parse(cookie.trim().slice(2));
};
