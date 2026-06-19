<script lang="ts">
	import { diensten } from '$lib/data/diensten';
	import ArrowRight from 'phosphor-svelte/lib/ArrowRight';
</script>

<svelte:head>
	<title>Verwarming & Warm Water - Plaatsing & Onderhoud</title>
	<meta
		name="description"
		content="Professionele installatie, onderhoud, herstellingen en keuring met attest voor verwarmingsketels, stookolieketels, warmwater toestellen en gasleidingen in Antwerpen en Vlaanderen."
	/>
</svelte:head>

<div class="relative z-100 gap-y-12 gap-x-8 bg-digital-blue-50 px-2 pt-2 pb-12 md:px-64">
	<div class="max-w-2lg px-8 text-justify">
		Clima Heat Solutions biedt een complete service voor verwarming, warm water in Antwerpen en heel
		Vlaanderen. Wij verzorgen plaatsing, onderhoud, herstellingen en keuringen met attest voor zowel
		woningen als bedrijven. <br />
		<br />

		Onze diensten omvatten gasketels, stookolieketels, warmwatertoestellen en gasleidingen. Elk
		project wordt uitgevoerd met aandacht voor veiligheid, kwaliteit en energie-efficiëntie, volgens
		de geldende normen. Prijzen op de detailpagina's zijn inclusief btw.
	</div>

	<ul class="mx-auto mt-8 flex max-w-2lg flex-col gap-3 px-8">
		{#each diensten as dienst (dienst.slug)}
			<li>
				<a
					href="/diensten/{dienst.slug}"
					class="group flex items-center justify-between gap-4 rounded-2xl bg-digital-blue-100 px-6 py-5 transition-colors hover:bg-digital-blue-200"
				>
					<div class="flex flex-col gap-1">
						<div class="flex items-center gap-2 text-lg font-bold italic md:text-xl">
							<svelte:component this={dienst.serviceIcon} class="size-7 shrink-0" />
							{dienst.title}
						</div>
						<p class="text-sm font-semibold italic text-gray-700">{dienst.subtitle}</p>
					</div>
					<ArrowRight
						class="size-5 shrink-0 transition-transform group-hover:translate-x-1"
					/>
				</a>
			</li>
		{/each}
	</ul>
</div>
