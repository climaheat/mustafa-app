<script lang="ts">
	import Navbar from "$lib/components/Navbar.svelte";
  import logo from "$lib/assets/logo.jpeg";
  import mailsImage from "$lib/assets/mails.jpg";
  import phoneImage from "$lib/assets/phone.jpg"

  import { Tooltip, Button } from "bits-ui";
  import Envelope from "phosphor-svelte/lib/Envelope";
  import Phone from "phosphor-svelte/lib/Phone";
	import PhoneNumber from "$lib/components/PhoneNumber.svelte";
</script>

<Navbar/>

<div class="grid grid-cols-2 gap-y-16 gap-x-2 px-48 pt-10 justify-items-center bg-brown-rust-50 items-stretch">
  <img 
    src="{logo}" 
    alt="Logo of heat/cold solutions company" 
    class="w-32 h-32 md:w-40 md:h-40 rounded-full col-span-2 mx-auto"
  >

  <form method="POST" class="p-4 bg-brown-rust-200 rounded-2xl" name="contact" data-netlify="true">
    <fieldset>
        <legend class="italic text-lg font-bold pb-8">Stuur een Bericht!</legend>

        <div class="grid grid-cols-2">
          <input type="hidden" name="form-name" value="contact"/>

          <div>
            <div class="pb-4">
              <label for="voornaam">Voornaam*</label> <br/>
              <input type="text" id="voornaam" name="voornaam" class="mt-1 border-2 border-gray-700 bg-brown-rust-100" required maxlength="100">
            </div>
        
            <div class="pb-4">
                <label for="naam">Naam*</label> <br/>
                <input type="text" id="naam" name="naam" class="mt-1 border-2 border-gray-700 bg-brown-rust-100" required maxlength="100">
            </div>
        
            <div class="pb-4">
                <label for="telefoonnummer">Telefoonnummer</label> <br/>
                <input type="tel" id="telefoonnummer" name="telefoonnummer" class="mt-1 border-2 border-gray-700 bg-brown-rust-100" maxlength="20">
            </div>
            
            <div class="pb-4">
                <label for="email">Email*</label> <br/>
                <input type="email" id="email" name="email" required class="mt-1 border-2 border-gray-700 bg-brown-rust-100" maxlength="100">
            </div>
          </div>

          <div>
            <div class="pb-4">
              <label for="bericht">Bericht of vraag*</label> <br/>
              <textarea id="bericht" name="bericht" rows="8" required class="mt-1 border-2 border-gray-700 bg-brown-rust-100" maxlength="2000"></textarea>
            </div>

            <div>
              <button type="submit" class="p-4 bg-brown-rust-500 rounded-2xl">Versturen</button>
            </div>
          </div>
        </div>
    </fieldset>
  </form>

  <img 
      src="{mailsImage}" 
      alt="mails"
      class="rounded-3xl"
  >

  <div class="bg-brown-rust-200 rounded-3xl py-2 px-4 h-full">
    <div class="bold text-2xl mt-4 mb-8 font-bold italic flex justify-center">
      <Phone class="size-20"/>
    </div>
  
    <div>
      Aarzel niet om ons te bellen of een sms te sturen. We proberen zo snel mogelijk uw verzoek te beantwoorden.
    </div>

    <div class="mt-10">
      <Button.Root
        class="rounded-input bg-dark text-background shadow-mini hover:bg-dark/95 inline-flex
        h-12 items-center justify-center px-[21px] text-[15px]
        font-semibold active:scale-[0.98] active:transition-all"
      >

          <PhoneNumber number="+32476073612" --padding-top=0 --padding-bottom=0px/>

      </Button.Root>
    </div>
  </div>

  <img 
      src="{phoneImage}" 
      alt="Shower"
      class="rounded-3xl"
  >

  <span class="py-6"></span>

</div>