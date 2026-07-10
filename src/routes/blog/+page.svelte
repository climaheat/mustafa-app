<script lang="ts">
</script>

<svelte:head>
	<title>Blog | climaheatsolutions</title>
	<meta
		name="description"
		content="Ontdek nieuws over onze diensten, producten, klanten en partners"
	/>
</svelte:head>

{#snippet partnerCard(
	title: string,
	teaser: string,
	href: string,
	isKlant: boolean,
	isSoftwareTool: boolean,
	isPartner: boolean
)}
	<div class="flex flex-col border border-slate-300 bg-white p-8 rounded-4xl">
		<h2 class="mb-4 px-0 text-left text-2xl lg:text-3xl">
			{title}
		</h2>

		<p class="text text-gray-500">
			{teaser}
		</p>

		<div class="mt-auto mb-0">
			<div class="my-4 flex flex-row gap-x-4">
				{#if isKlant}
					<p class="rounded-2xl px-3 py-1 font-bold italic bg-gray-100">Klant</p>
				{/if}
				{#if isPartner}
					<p class="rounded-2xl px-3 py-1 font-bold italic bg-gray-100">Partner</p>
				{/if}
			</div>

			<a {href} class="my-4 block w-fit text-blue-500 hover:underline"> Lees Meer </a>
		</div>
	</div>
{/snippet}

<div class="flex flex-col items-center">
	<h1 class="mb-4 text-2xl lg:text-5xl">Blog</h1>
	<p class="mb-4 text-center text-slate-500 lg:text-xl">
		Ontdek nieuws over onze diensten, producten, klanten en partners
	</p>

	<div class="mx-4 lg:mx-40 mt-16 grid gap-y-8 lg:grid-cols-3 lg:gap-x-8">
		{@render partnerCard(
			'vindflexijob',
			"Vindflexijob is onze partner voor flexijob vacatures. Dankzij de software beheren we onze vacatures op een eenvoudige manier en kunnen we snel inspelen op drukke periodes. Zo hebben we tijdens de zomer bijvoorbeeld extra volk nodig om airco's te herstellen.",
			'/blog/vindflexijob',
			true,
			false,
			true
		)}
	</div>
</div>
