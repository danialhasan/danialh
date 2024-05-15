<template>
	<div class="card flex justify-content-center h-screen">
		<Menu :model="items" class="w-full md:w-15rem">
			<template #start>
				<span class="inline-flex align-items-center gap-1 px-2 py-2">
					<img src="../assets/logo.png" />
					<span class="text-xl font-semibold">ClearEstate</span>
				</span>
			</template>
			<template #submenuheader="{ item }">
				<span class="text-primary font-bold">{{ item.label }}</span>
			</template>
			<template #item="{ item, props }">
				<a v-ripple class="flex align-items-center" v-bind="props.action">
					<span :class="item.icon" />
					<span class="ml-2">{{ item.label }}</span>
				</a>
			</template>
		</Menu>
	</div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import Menu from 'primevue/menu';
import { useRouter } from 'vue-router';
import type { MenuItem } from 'primevue/menuitem';

const router = useRouter();
const documentItems: MenuItem[] = [
	{
		label: 'Residential Appraisal Re...',
		icon: 'pi pi-chevron-circle-right',
		command: () => {},
	},
];
const items: MenuItem[] = ref([
	{
		label: 'Documents',
		items: [
			{
				label: 'New',
				icon: 'pi pi-plus',
				command: () => {
					router.push('/new');
				},
			},
			{
				label: 'Documents',
				icon: 'pi pi-file-pdf',
				command: () => {
					router.push('/documents');
				},
			},
		],
	},
	{
		label: 'Profile',
		items: [
			{
				label: 'Settings',
				icon: 'pi pi-vog',
				command: () => {
					console.log('Nav to settings page');
				},
			},
			{
				label: 'Logout',
				icon: 'pi pi-sign-out',
				command: () => {
					document.cookie =
						'userCookie=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
					router.push('/login');
				},
			},
		],
	},
	{
		label: '',
		items: documentItems,
	},
	{
		separator: true,
	},
]);
</script>
