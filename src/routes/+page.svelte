<script lang="ts">
	import Navbar from "$lib/components/Navbar.svelte";
  import logo from "$lib/assets/logo.jpeg";
  import antwerp_picture from "$lib/assets/antwerpen.jpg";
  import badkamer from "$lib/assets/badkamer.jpg";
  import { Button } from "bits-ui";

</script>

  <Navbar/>

  <div class="grid grid-cols-2 gap-y-12 gap-x-8 px-64 pt-10 justify-items-center bg-brown-rust-50">
    <img 
      src="{logo}" 
      alt="Logo of heat/cold solutions company" 
      class="w-32 h-32 md:w-40 md:h-40 rounded-full col-span-2 mx-auto"
    >

    <div class="bg-brown-rust-200 rounded-3xl py-8 px-4 h-min">
      <div class="bold text-2xl mt-4 mb-8 font-bold italic">
        Clima Heat Solutions
      </div>
    
      <div>
        Wij staan voor kwaliteit, vakmanschap en betrouwbare service. Ons team helpt u graag met duurzame en efficiënte oplossingen voor uw woning of project. Aarzel niet om ons te contacteren — wij denken met u mee.
      </div>

      <div class=mt-10>
        <Button.Root
          class="rounded-input bg-dark text-background shadow-mini hover:bg-dark/95 inline-flex
          h-12 items-center justify-center px-5.25 text-[15px]
          font-semibold active:scale-[0.98] active:transition-all"
        >
        <a href="/services">
          Bekijk alle services
        </a>
        </Button.Root>
      </div>

    </div>
    

    <img 
      src="{badkamer}" 
      alt="Shower"
      class="w-40 h-40 md:w-100 md:h-100 rounded-3xl mt-10"
    >

    <div class="bg-brown-rust-200 rounded-3xl py-8 px-4 h-min mt-2">
      <div class="bold text-2xl mt-4 mb-8 font-bold italic">
        Regio Antwerpen
      </div>
    
      <div>
                Antwerpen is geen stad, maar een mentaliteit.
        Recht door zee, met trots en vakmanschap.

        Als Antwerps bedrijf in clima & heat solutions leveren wij oplossingen die werken: betrouwbare warmte, efficiënte koeling en duurzame systemen. Geen blabla, gewoon goed gedaan.

        Geboren aan de Schelde.
        Sterk in techniek, warm in service.
        Da's Antwerps.
      </div>

      <div class=mt-10>
        <Button.Root
          class="rounded-input bg-dark text-background shadow-mini hover:bg-dark/95 inline-flex
          h-12 items-center justify-center px-5.25 text-[15px]
          font-semibold active:scale-[0.98] active:transition-all"
        >
        <a href="/contact">
          Contacteer ons
        </a>
        </Button.Root>
      </div>
    </div>

      <img 
      src="{antwerp_picture}" 
      alt="Antwerp"
      class="w-40 h-40 md:w-100 md:h-100 rounded-3xl mt-10 mb-20"
      >
  </div>
