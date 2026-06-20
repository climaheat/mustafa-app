<script lang="ts">
	export let src: string;
	export let title: string;
	export let subtitle: string;
	export let body: string;
	export let voordelen: string[];
	export let imgClass: string = '';
	export let serviceIcon: any;
	export let priceString: string = '';
	export let priceString2: string = '';
	export let priceString3: string = '';
</script>

<div class="grid grid-cols-2 rounded-3xl bg-digital-blue-200 px-4 py-4 md:px-10">
	<div class="col-span-2 flex flex-col md:col-span-1">
		<div class="bold mt-4 text-2xl font-bold italic">
			{title}
			<svelte:component this={serviceIcon} class="inline-block size-10" />
		</div>

		<div class="bold mt-1 text-lg font-bold italic">
			{subtitle}
		</div>

		<div class="text-md mt-1">
			{#if priceString}
				<br />
				{priceString}
			{/if}
			{#if priceString2}
				<br />
				{priceString2}
			{/if}
			{#if priceString3}
				<br />
				{priceString3}
			{/if}
		</div>

		<div class="py-6">
			{@html body}
		</div>

		{#if voordelen.length > 0}
			<b>Voordelen:</b>
			<ul class="mb-4 list-disc pl-5">
				{#each voordelen as voordeel}
					<li>{voordeel}</li>
				{/each}
			</ul>
		{/if}
	</div>

	<div class="flex flex-col items-center gap-4 col-span-2 lg:col-span-1">
		<img {src} alt="Logo of heat/cold solutions company" class="w-full lg:w-90 rounded-2xl {imgClass}" />

		<div class="flex flex-wrap justify-center gap-2">
			{#each ['Antwerpen', 'Mortsel', 'Edegem', 'Kontich', 'Hove', 'Wilrijk'] as location}
				<span class="rounded-full bg-white px-3 py-1 text-sm font-medium text-black">
					{location}
				</span>
			{/each}
		</div>
	</div>
</div>
