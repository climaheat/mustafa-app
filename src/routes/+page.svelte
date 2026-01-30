<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import logo from '$lib/assets/logo.jpeg';
	import antwerp_picture from '$lib/assets/antwerpen.jpg';
	import badkamer from '$lib/assets/badkamer.jpg';
	import { Button } from 'bits-ui';

	import CheckFat from 'phosphor-svelte/lib/CheckFat';
</script>

<div class="justify-items-center bg-digital-blue-50 px-16 pt-2 pb-10">
	<div class="grid grid-cols-2 place-items-center gap-x-8 gap-y-12">
		<div class="h-min rounded-3xl bg-digital-blue-200 px-4 py-8 my-auto">
			<div class="bold mt-4 mb-8 text-2xl font-bold italic">Clima Heat Solutions</div>

			<div>
				Clima Heat Solutions - Uw specialist in herstellingen & onderhoud <br/><br/>

Bij Clima Heat Solutions bent u aan het juiste adres voor herstellingen en onderhoud van gasketels, stookolieketels en warmwater­toestellen. Wij staan garant voor kwaliteit, vakmanschap en een betrouwbare service waarop u kunt rekenen, het hele jaar door. <br/><br/>

Een goed onderhouden installatie betekent meer comfort, een lager energieverbruik en een langere levensduur. Daarom werken wij nauwkeurig, veilig en volgens de geldende normen. Of het nu gaat om een dringende herstelling, een periodiek onderhoud of een controle van uw installatie: wij denken met u mee en bieden een efficiënte oplossing op maat.<br/><br/>

Particulier of professioneel project? U kunt rekenen op een ervaren vakman, duidelijke communicatie en een snelle service.<br/><br/>

Aarzel niet om ons te contacteren voor onderhoud, herstellingen of advies — Clima Heat Solutions zorgt voor warmte en comfort zonder zorgen.
			</div>

			<div class="mt-10">
				<Button.Root
					class="inline-flex h-12 items-center justify-center rounded-input bg-dark
          px-5.25 text-[15px] font-semibold text-background shadow-mini
          hover:bg-dark/95 active:scale-[0.98] active:transition-all"
				>
					<a href="/services"> Bekijk alle services </a>
				</Button.Root>
			</div>
		</div>

		<img src={badkamer} alt="Shower" class="h-40 w-40 rounded-3xl md:h-100 md:w-100" />
	</div>

	<div class="mt-16 h-min w-fit mx-auto rounded-3xl bg-digital-blue-200 px-8 py-8">
		<div class="bold mt-4 mb-4 text-2xl font-bold italic">
			Waarom Kiezen voor Ons in Antwerpen en Vlaanderen?
			<CheckFat class="ml-2 inline-block size-12" />
		</div>

		<ul class="col-span-3 ml-5 list-disc">
			<li>Professionele installatie, onderhoud en herstellingen</li>
			<li>Keuringen en attesten conform Vlaamse wetgeving</li>
			<li>Energiezuinig, veilig en betrouwbaar</li>
			<li>Snelle service in Antwerpen en heel Vlaanderen</li>
		</ul>
	</div>
</div>
