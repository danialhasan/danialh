export const cleanUpUser = (user: any) => {
	try {
		if (!user.includes('undefined')) {
			// return JSON.parse(user.trim().slice(4, -2).unshift('"'));
			const trimmedUserArr = user.trim().slice(5, -2).split('');
			trimmedUserArr.unshift('"');
			trimmedUserArr.push('"');
			const cleanedUser = JSON.parse(JSON.parse(trimmedUserArr.join('')));
			return cleanedUser;
		} else {
			return user;
		}
	} catch (error) {
		console.error('ERROR IN cleanUser.ts:', error);
	}
};
