<script setup lang="ts">
import { onMounted, ref } from 'vue';
import SideMenu from '../components/SideMenu.vue';
import { useRoute } from 'vue-router';

const route = useRoute();

onMounted(async () => {
	if (
		typeof route.query.code === 'string' &&
		typeof route.query.scope === 'string'
	) {
		localStorage.setItem('googleAuthToken', route.query.code);
		localStorage.setItem('googleAuthScope', route.query.scope);
	}
});
</script>

<template>
	<div>
		<div class="h-screen w-full flex">
			<SideMenu></SideMenu>
			<!-- 
				For the screen that will display insights, we can start developing that based on the
			  insightsObject returned by the backend. 
				-->
			<RouterView></RouterView>
		</div>
	</div>
</template>
