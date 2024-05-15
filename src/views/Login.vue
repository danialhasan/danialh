<template>
	<div
		class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
	>
		<div class="sm:mx-auto sm:w-full sm:max-w-sm">
			<img
				class="mx-auto h-10 w-auto"
				src="https://tailwindui.com/img/logos/mark.svg?color=gray&shade=900"
				alt="Your Company"
			/>
			<h2
				class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-800"
			>
				Sign in to your account
			</h2>
		</div>

		<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
			<form class="space-y-6" action="#" method="POST">
				<div>
					<label
						for="email"
						class="block text-sm font-medium leading-6 text-gray-800"
					>
						Email address
					</label>
					<div class="mt-2">
						<input
							id="email"
							name="email"
							type="email"
							autocomplete="email"
							required=""
							class="block w-full rounded-md border-0 py-1.5 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div>
					<div class="flex items-center justify-between">
						<label
							for="password"
							class="block text-sm font-medium leading-6 text-gray-800"
						>
							Password
						</label>
						<div class="text-sm">
							<a
								href="#"
								class="font-semibold text-gray-800 hover:text-gray-700"
							>
								Forgot password?
							</a>
						</div>
					</div>
					<div class="mt-2">
						<input
							id="password"
							name="password"
							type="password"
							autocomplete="current-password"
							required=""
							class="block w-full rounded-md border-0 py-1.5 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div>
					<button
						type="submit"
						class="flex w-full justify-center rounded-md bg-neon-purple px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						Sign in
					</button>
				</div>
				<div id="Google_SSO" @click="launchGoogleSSO">
					<button class="gsi-material-button">
						<div class="gsi-material-button-state"></div>
						<div class="gsi-material-button-content-wrapper">
							<div class="gsi-material-button-icon">
								<svg
									version="1.1"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 48 48"
									xmlns:xlink="http://www.w3.org/1999/xlink"
									style="display: block"
								>
									<path
										fill="#EA4335"
										d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
									></path>
									<path
										fill="#4285F4"
										d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
									></path>
									<path
										fill="#FBBC05"
										d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
									></path>
									<path
										fill="#34A853"
										d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
									></path>
									<path fill="none" d="M0 0h48v48H0z"></path>
								</svg>
							</div>
							<span class="gsi-material-button-contents">
								Sign in with Google
							</span>
							<span style="display: none">Sign in with Google</span>
						</div>
					</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script setup>
import { computed } from 'vue';
const launchGoogleSSO = () => {
	window.open(encodeURI(`${backendUrl.value}/auth/google`), '_self');
};
const backendUrl = computed(() => {
	return window.location.origin.includes('localhost')
		? 'http://localhost:3000'
		: 'https://clearestate-be-28d3a56bc3af.herokuapp.com';
	// return 'http://localhost:5006';
});
</script>
