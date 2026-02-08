<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import logo from '$lib/assets/logo.jpeg';
	import mailsImage from '$lib/assets/mails.jpg';
	import phoneImage from '$lib/assets/phone.jpg';

	import { Tooltip, Button } from 'bits-ui';
	import Envelope from 'phosphor-svelte/lib/Envelope';
	import Phone from 'phosphor-svelte/lib/Phone';
	import PhoneNumber from '$lib/components/PhoneNumber.svelte';

	export let pageTitle = "Contacteer ons";
  	export let pageDescription = "Hier vind je onze contactgegevens voor e-mail en telefoon";
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={pageDescription} />
</svelte:head>

<div class="relative z-100 grid grid-cols-2 gap-x-12 gap-y-4 md:gap-y-16 px-2 md:px-64 pt-4 md:pt-10">
	<form
		method="POST"
		class="my-auto h-fit w-full md:w-md max-w-md justify-self-end rounded-2xl bg-digital-blue-200 p-4 col-span-2 md:col-span-1"
		name="contact"
		data-netlify="true"
	>
		<fieldset>
			<legend class="pb-8 text-lg font-bold italic">Stuur een Bericht!</legend>
			<input type="hidden" name="form-name" value="contact" />

			<div>
				<div class="pb-4">
					<label for="voornaam">Voornaam*</label> <br />
					<input
						type="text"
						id="voornaam"
						name="voornaam"
						class="mt-1 border-2 border-gray-700 bg-digital-blue-100"
						required
						maxlength="100"
					/>
				</div>

				<div class="pb-4">
					<label for="naam">Naam*</label> <br />
					<input
						type="text"
						id="naam"
						name="naam"
						class="mt-1 border-2 border-gray-700 bg-digital-blue-100"
						required
						maxlength="100"
					/>
				</div>

				<div class="pb-4">
					<label for="telefoonnummer">Telefoonnummer</label> <br />
					<input
						type="tel"
						id="telefoonnummer"
						name="telefoonnummer"
						class="mt-1 border-2 border-gray-700 bg-digital-blue-100"
						maxlength="20"
					/>
				</div>

				<div class="pb-4">
					<label for="email">Email*</label> <br />
					<input
						type="email"
						id="email"
						name="email"
						required
						class="mt-1 w-full border-2 border-gray-700 bg-digital-blue-100"
						maxlength="100"
					/>
				</div>
			</div>

			<div>
				<div class="pb-4">
					<label for="bericht">Bericht of vraag*</label> <br />
					<textarea
						id="bericht"
						name="bericht"
						rows="8"
						required
						class="mt-1 w-full border-2 border-gray-700 bg-digital-blue-100"
						maxlength="2000"
					></textarea>
				</div>

				<div>
					<button
						type="submit"
						class="cursor-pointer rounded-2xl border-2 border-black bg-digital-blue-400 p-2"
						>Versturen</button
					>
				</div>
			</div>
		</fieldset>
	</form>

	<div class="flex h-full md:max-w-md w-full flex-col col-span-2 md:col-span-1 mb-8">
		<div class="rounded-3xl bg-digital-blue-200 px-4 py-2 w-full">
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

		<div class="md:mt-auto mt-4">
			<img src={phoneImage} alt="Shower" class="rounded-3xl" />

			<p class="mx-auto mt-2 text-lg font-semibold text-center">
				Stuur een mail: <a href="mailto:info@climaheatsolutions.be" class="text-blue-600 hover:underline">info@climaheatsolutions.be</a>
			</p>
		</div>
	</div>
</div>
