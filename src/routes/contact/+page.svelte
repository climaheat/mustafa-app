<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import logo from '$lib/assets/logo.jpeg';
	import mailsImage from '$lib/assets/mails.jpg';
	import phoneImage from '$lib/assets/phone.jpg';

	import { Tooltip, Button } from 'bits-ui';
	import Envelope from 'phosphor-svelte/lib/Envelope';
	import Phone from 'phosphor-svelte/lib/Phone';
	import PhoneNumber from '$lib/components/PhoneNumber.svelte';

	export let pageTitle = 'Contacteer ons';
	export let pageDescription = 'Hier vind je onze contactgegevens voor e-mail en telefoon';
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />
</svelte:head>

<div
	class="relative z-100 grid grid-cols-2 gap-x-12 gap-y-4 px-2 pt-4 md:gap-y-16 md:px-64 md:pt-10"
>
	<form
		method="POST"
		class="col-span-2 my-auto h-fit w-full max-w-md justify-self-end rounded-3xl border-digital-blue-200 bg-digital-blue-200 p-5 shadow-[0_18px_45px_rgba(0,20,51,0.12)] md:col-span-1 md:w-md md:p-7"
		name="contact"
		data-netlify="true"
	>
		<fieldset class="space-y-6">
			<legend class="pb-1 text-2xl font-bold text-digital-blue-950 italic">Stuur een bericht</legend
			>
			<input type="hidden" name="form-name" value="contact" />

			<div class="grid gap-4 sm:grid-cols-2">
				<div>
					<label for="voornaam" class="text-sm font-semibold text-digital-blue-950">Voornaam*</label
					>
					<input
						type="text"
						id="voornaam"
						name="voornaam"
						class="mt-2 h-11 w-full rounded-input border-digital-blue-200 bg-white px-3 text-digital-blue-950 transition outline-none focus:border-digital-blue-500 focus:bg-white focus:ring-4 focus:ring-digital-blue-100"
						required
						maxlength="100"
					/>
				</div>

				<div>
					<label for="naam" class="text-sm font-semibold text-digital-blue-950">Naam*</label>
					<input
						type="text"
						id="naam"
						name="naam"
						class="mt-2 h-11 w-full rounded-input -digital-blue-200 bg-white px-3 text-digital-blue-950 transition outline-none focus:-digital-blue-500 focus:bg-white focus:ring-4 focus:ring-digital-blue-100"
						required
						maxlength="100"
					/>
				</div>

				<div class="sm:col-span-2">
					<label for="telefoonnummer" class="text-sm font-semibold text-digital-blue-950"
						>Telefoonnummer</label
					>
					<input
						type="tel"
						id="telefoonnummer"
						name="telefoonnummer"
						class="mt-2 h-11 w-full rounded-input -digital-blue-200 bg-white px-3 text-digital-blue-950 transition outline-none focus:-digital-blue-500 focus:bg-white focus:ring-4 focus:ring-digital-blue-100"
						maxlength="20"
					/>
				</div>

				<div class="sm:col-span-2">
					<label for="email" class="text-sm font-semibold text-digital-blue-950">Email*</label>
					<input
						type="email"
						id="email"
						name="email"
						required
						class="mt-2 h-11 w-full rounded-input border-digital-blue-200 bg-white px-3 text-digital-blue-950 transition outline-none focus:border-digital-blue-500 focus:bg-white focus:ring-4 focus:ring-digital-blue-100"
						maxlength="100"
					/>
				</div>
			</div>

			<div class="space-y-5">
				<div>
					<label for="bericht" class="text-sm font-semibold text-digital-blue-950"
						>Bericht of vraag*</label
					>
					<textarea
						id="bericht"
						name="bericht"
						rows="8"
						required
						class="mt-2 w-full resize-y rounded-input border-digital-blue-200 bg-white px-3 py-3 text-digital-blue-950 transition outline-none focus:border-digital-blue-500 focus:bg-white focus:ring-4 focus:ring-digital-blue-100"
						maxlength="2000"
					></textarea>
				</div>

				<div>
					<button
						type="submit"
						class="inline-flex h-12 w-full cursor-pointer items-center justify-center rounded-input bg-dark px-5 text-[15px] font-semibold text-background shadow-mini transition hover:bg-dark/95 active:scale-[0.98]"
						>Versturen</button
					>
				</div>

				<p class="text-sm leading-6 text-digital-blue-950/70">
					Uw privacy telt: gegevens dienen enkel voor contact en worden daarna verwijderd.
				</p>
			</div>
		</fieldset>
	</form>

	<div class="col-span-2 mb-8 flex h-full w-full flex-col md:col-span-1 md:max-w-md">
		<div class="w-full rounded-3xl bg-digital-blue-200 px-4 py-2">
			<div class="bold mt-4 mb-8 flex justify-center text-2xl font-bold italic">
				<Phone class="size-20" />
			</div>

			<div>
				Aarzel niet om ons te bellen of een sms te sturen. We proberen zo snel mogelijk uw verzoek
				te beantwoorden.
			</div>

			<div class="mt-10">
				<Button.Root
					class="inline-flex h-12 items-center justify-center rounded-input bg-dark
            px-[21px] text-[15px] font-semibold text-background shadow-mini
            hover:bg-dark/95 active:scale-[0.98] active:transition-all"
				>
					<PhoneNumber number="+32476073612" --padding-top="0" --padding-bottom="0px" />
				</Button.Root>
			</div>
		</div>

		<div class="mt-4 md:mt-auto">
			<img src={phoneImage} alt="Shower" class="rounded-3xl" />

			<p class="mx-auto mt-2 text-center text-lg font-semibold">
				Stuur een mail: <a
					href="mailto:info@climaheatsolutions.be"
					class="text-blue-600 hover:underline">info@climaheatsolutions.be</a
				>
			</p>
		</div>
	</div>
</div>
