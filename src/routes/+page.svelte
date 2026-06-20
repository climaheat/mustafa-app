<script lang="ts">
	import badkamer from '$lib/assets/badkamer.jpg';
	import { Button } from 'bits-ui';

	import CheckFat from 'phosphor-svelte/lib/CheckFat';
	import Certificate from 'phosphor-svelte/lib/Certificate';
	import Lightning from 'phosphor-svelte/lib/Lightning';
	import MapPin from 'phosphor-svelte/lib/MapPin';
	import SealCheck from 'phosphor-svelte/lib/SealCheck';
	import Star from 'phosphor-svelte/lib/Star';

	export let pageTitle = 'Home';
	export let pageDescription =
		'Welkom bij climaheatsolutions. Hier vind je informatie over onze diensten.';

	const trustBadges = [
		{ label: 'Erkende technieker', icon: SealCheck },
		{ label: 'Officieel onderhoudsattest', icon: Certificate },
		{ label: 'Snelle service', icon: Lightning },
		{ label: 'Werkgebied Antwerpen en omgeving', icon: MapPin }
	];
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />
</svelte:head>

<div class="bg-digital-blue-50 px-4 pt-6 pb-10 md:pt-10">
	<div class="mx-auto flex w-full max-w-5xl flex-col gap-6 md:gap-10">
		<div
			class="relative z-10 w-full rounded-3xl border border-slate-300 bg-white px-4 py-5 md:px-8"
		>
			<div class="flex flex-col items-center justify-between gap-5 lg:flex-row">
				<div class="flex flex-col items-center gap-2 text-center lg:items-start lg:text-left">
					<div class="text-sm font-semibold tracking-wide text-digital-blue-800 uppercase">
						Google Reviews
					</div>
					<div class="flex items-center gap-1 text-amber-500" aria-label="5 sterren Google Reviews">
						{#each Array(5) as _}
							<Star class="size-6 fill-current" weight="fill" />
						{/each}
					</div>
					<div class="text-sm font-semibold text-digital-blue-950">
						5 sterren op basis van 9 reviews
					</div>
					<div class="text-xs text-digital-blue-950/70">
						Aantal reviews correct op 20 juni 2026.
					</div>
				</div>

				<div class="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:w-auto lg:min-w-xl">
					{#each trustBadges as badge}
						<div
							class="flex min-h-12 items-center gap-2 rounded-2xl border border-slate-300 bg-digital-blue-50 px-4 py-2 font-semibold text-digital-blue-950"
						>
							<svelte:component
								this={badge.icon}
								class="size-6 shrink-0 text-digital-blue-700"
								weight="duotone"
							/>
							<span class="text-sm">{badge.label}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<div class="relative z-10 grid grid-cols-10 gap-6 md:gap-8">
			<div
				class="col-span-10 h-min w-full rounded-3xl bg-digital-blue-200 px-4 py-4 md:col-span-5 md:py-8"
			>
				<div class="bold mt-4 mb-8 text-2xl font-bold italic">Clima Heat Solutions</div>

				<div>
					Clima Heat Solutions - Uw specialist in herstellingen & onderhoud <br /><br />

					Bij Clima Heat Solutions bent u aan het juiste adres voor herstellingen en onderhoud van
					gasketels, stookolieketels en warmwater­toestellen. Wij staan garant voor kwaliteit,
					vakmanschap en een betrouwbare service waarop u kunt rekenen, het hele jaar door.
					<br /><br />

					Een goed onderhouden installatie betekent meer comfort, een lager energieverbruik en een
					langere levensduur. Daarom werken wij nauwkeurig, veilig en volgens de geldende normen. Of
					het nu gaat om een dringende herstelling, een periodiek onderhoud of een controle van uw
					installatie: wij denken met u mee en bieden een efficiënte oplossing op maat.<br /><br />

					Particulier of professioneel project? U kunt rekenen op een ervaren vakman, duidelijke
					communicatie en een snelle service.<br /><br />

					Aarzel niet om ons te contacteren voor onderhoud, herstellingen of advies — Clima Heat
					Solutions zorgt voor warmte en comfort zonder zorgen.
				</div>

				<div class="mt-10">
					<Button.Root
						class="inline-flex h-12 items-center justify-center rounded-input bg-dark
						px-5.25 text-[15px] font-semibold text-background shadow-mini
						hover:bg-dark/95 active:scale-[0.98] active:transition-all"
					>
						<a href="/diensten"> Bekijk alle diensten </a>
					</Button.Root>
				</div>
			</div>

			<img
				src={badkamer}
				alt="Shower"
				class="col-span-10 min-h-80 w-full rounded-3xl object-cover md:col-span-5 md:mx-auto md:h-auto md:max-h-[624px] md:max-w-[504px] md:self-center"
			/>
		</div>

		<div
			class="relative z-10 w-full rounded-3xl bg-digital-blue-200 px-6 py-8 md:mx-auto md:w-fit md:px-8"
		>
			<div class="mx-auto max-w-3xl">
				<div class="bold mt-4 mb-4 text-center text-2xl font-bold italic">
					<span>
						Waarom Kiezen voor Ons in Antwerpen en Vlaanderen?
						<CheckFat class="ml-2 hidden md:inline-block size-10 align-middle" />
					</span>
				</div>

				<ul class="mx-auto w-fit list-disc pl-5">
					<li>Professionele installatie, onderhoud en herstellingen</li>
					<li>Keuringen en attesten conform Vlaamse wetgeving</li>
					<li>Energiezuinig, veilig en betrouwbaar</li>
					<li>Snelle service in Antwerpen en heel Vlaanderen</li>
				</ul>
			</div>
		</div>
	</div>
</div>
