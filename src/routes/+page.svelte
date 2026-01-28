<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import logo from '$lib/assets/logo.jpeg';
	import antwerp_picture from '$lib/assets/antwerpen.jpg';
	import badkamer from '$lib/assets/badkamer.jpg';
	import { Button } from 'bits-ui';

	import CheckFat from 'phosphor-svelte/lib/CheckFat';
</script>

<div class="justify-items-center bg-digital-blue-50 px-64 pt-2 pb-10">
	<div class="grid grid-cols-2 gap-x-8 gap-y-12">
		<div class="h-min rounded-3xl bg-digital-blue-200 px-4 py-8">
			<div class="bold mt-4 mb-8 text-2xl font-bold italic">Clima Heat Solutions</div>

			<div>
				Wij staan voor kwaliteit, vakmanschap en betrouwbare service. Ons team helpt u graag met
				duurzame en efficiënte oplossingen voor uw woning of project. Aarzel niet om ons te
				contacteren — wij denken met u mee.
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

		<img src={badkamer} alt="Shower" class="mt-10 h-40 w-40 rounded-3xl md:h-100 md:w-100" />
	</div>

	<div class="mt-16 h-min rounded-3xl bg-digital-blue-200 px-8 py-8">
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
