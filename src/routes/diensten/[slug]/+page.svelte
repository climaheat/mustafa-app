<script lang="ts">
	import Service from '$lib/components/Service.svelte';
	import { Button } from 'bits-ui';
	import ArrowLeft from 'phosphor-svelte/lib/ArrowLeft';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.dienst.metaTitle}</title>
	<meta name="description" content={data.dienst.metaDescription} />
</svelte:head>

<div class="relative z-100 gap-x-8 gap-y-12 bg-digital-blue-50 px-2 pt-2 pb-12 md:px-64">
	<div class="max-w-2lg relative z-100 mx-auto px-4 lg:px-8 py-8">
		<div class="mb-8 flex justify-center">
			<Button.Root
				class="inline-flex h-12 items-center justify-center rounded-input bg-dark px-6 text-[15px] font-semibold text-background shadow-mini hover:bg-dark/95 active:scale-[0.98] active:transition-all"
			>
				<a href="/contact">Offerte vragen</a>
			</Button.Root>
		</div>

		<Service
			src={data.dienst.src}
			title={data.dienst.title}
			subtitle={data.dienst.subtitle}
			body={data.dienst.body}
			priceString={data.dienst.priceString ?? ''}
			priceString2={data.dienst.priceString2 ?? ''}
			priceString3={data.dienst.priceString3 ?? ''}
			serviceIcon={data.dienst.serviceIcon}
			imgClass={data.dienst.imgClass ?? ''}
			voordelen={data.dienst.voordelen}
		/>
	</div>

	<a
		href="/diensten"
		class="relative z-100 mx-auto mt-4 flex w-fit items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-digital-blue-100"
	>
		<ArrowLeft class="size-4" />
		Alle diensten
	</a>
</div>
