<script lang="ts">
	import './layout.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import favicon from '$lib/assets/favicon.svg';
	import logo from '$lib/assets/logo.jpeg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div class="bg-digital-blue-50">
	<Navbar/>

	<img
		src={logo}
		alt="Logo of heat/cold solutions company"
		class="mx-auto h-40 w-40 rounded-full my-4"
	/>

	{@render children()}

	<div class="flex py-8">
		<a href="https://www.instagram.com/climaheatsolutions/" target="_blank" rel="noopener noreferrer" class="mx-auto">
			<i class="fab fa-instagram text-3xl"></i>
		</a>
	</div>
</div>
