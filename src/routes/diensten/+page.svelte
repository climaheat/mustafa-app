<script lang="ts">
	import Navbar from "$lib/components/Navbar.svelte";
    import logo from "$lib/assets/logo.jpeg";
	import Service from "$lib/components/Service.svelte";

    import aircoImage from "$lib/assets/airco.jpg"
    import warmtePompImage from "$lib/assets/warmtepomp.jpg";
    import warmWaterToestelImage from "$lib/assets/warmwatertoestel.jpg";
    import gasketelImage from "$lib/assets/gasketel.jpg";
    import showerServiceImage from "$lib/assets/showerservice.jpg";
    import centraleVerwarmingImage from "$lib/assets/centraleverwarming.jpg";
    import sanitairImage from "$lib/assets/sanitair.jpg";
    import gasleidingImage from "$lib/assets/gasleiding.jpg";
    import stookolieImage from "$lib/assets/stookolie.jpeg";

    import aircoIcon from "phosphor-svelte/lib/Wind";
    import warmtepompIcon from "phosphor-svelte/lib/ThermometerHot";
    import warmWaterToestelIcon from "phosphor-svelte/lib/DeviceTabletSpeaker";
    import gasketelIcon from "phosphor-svelte/lib/Cube";
    import badkamerIcon from "phosphor-svelte/lib/Shower";
    import centraleverwarmingIcon from "phosphor-svelte/lib/Thermometer";
    import sanitairIcon from "phosphor-svelte/lib/Toilet";
    import gasleidingIcon from "phosphor-svelte/lib/Pipe";
</script>

<svelte:head>
	<title>Verwarming & Warm Water - Plaatsing & Onderhoud</title>
    <meta name="description" content="Professionele installatie, onderhoud, herstellingen en keuring met attest voor verwarmingsketels, stookolieketels, warmwater toestellen en gasleidingen in Antwerpen en Vlaanderen." />
</svelte:head>

<div class="gap-y-12 gap-x-8 px-2 md:px-64 pt-2 justify-items-center bg-digital-blue-50">
    <div class="px-8 w-2lg max-w-2lg text-justify">
        Clima Heat Solutions biedt een complete service voor verwarming, warm water in Antwerpen en heel Vlaanderen. Wij verzorgen plaatsing, onderhoud, herstellingen en keuringen met attest voor zowel woningen als bedrijven. <br/> <br/>

        Onze diensten omvatten gasketels, stookolieketels, warmwatertoestellen en gasleidingen. Elk project wordt uitgevoerd met aandacht voor veiligheid, kwaliteit en energie-efficiëntie, volgens de geldende normen. Prijs indicaties zijn hieronder inclusief btw.
    </div>

    <div id="service-gasketel" class="grid grid-cols-1 py-8 relative z-100">
        <Service src={gasketelImage}
         title="Verwarmingsketel"
         subtitle="Plaatsing, Onderhoud, Herstellingen & Attest"
         body="Een <b>verwarmingsketel</b> zorgt voor een betrouwbaar en warm binnenklimaat. Een professionele <b>plaatsing van gas- of condensatieketels</b> garandeert veilige werking en optimaal rendement, zowel in Antwerpen als in heel Vlaanderen.<br> <br> Regelmatig <b>onderhoud</b> en snelle <b>herstellingen</b> zijn wettelijk verplicht in Vlaanderen. Na controle of onderhoud ontvang je een <b>officieel onderhouds- en conformiteitsattest.</b>"
            priceString="Onderhoud 120€."
            priceString2="Onderhoud vanaf 3 onderhouden (binnen straal van 1 km): 99€ per onderhoud."
            priceString3="Herstelling: 120€ voor 1 uur, daarna 30€ per extra halfuur."
            serviceIcon={gasketelIcon}
            voordelen={["Energiezuinig en betrouwbaar", "Snelle herstelling bij defecten", "Constante warmte en comfort", "Lagere energiekosten", "Lange levensduur bij correct onderhoud"]}/>
    </div>


    <div id="service-stookolie" class="grid grid-cols-1 py-8 relative z-100">
        <Service src={stookolieImage} 
        title="Stookolieketel" 
        subtitle="Onderhoud, Herstellingen & Keuring"
        body="Een <b>stookolieketel</b> levert veilige en efficiënte verwarming. Regelmatig <b>onderhoud, herstellingen en keuring</b> zijn verplicht in Vlaanderen en zorgen voor een lage uitstoot en een betrouwbaar systeem. Na controle ontvang je een <b>officieel onderhouds- en verbrandingsattest.</b>"
        imgClass="h-100"
        priceString="Onderhoud 200€."
        priceString2="Onderhoud vanaf 3 ketels (binnen straal van 1 km): 179€ per onderhoud."
        priceString3="Herstelling: 140€ voor 1 uur, daarna 30€ per extra halfuur."
        serviceIcon={warmtepompIcon}
        voordelen={["Wettelijk in orde", "Minder kans op storingen", "Betrouwbare werking en efficiëntie", "Langere levensduur van de ketel"]}
        />
    </div>


    <div id="service-warmwatertoestel" class="grid grid-cols-1 py-8 relative z-100">
        <Service src={warmWaterToestelImage} 
        title="Warmwater Toestellen" 
        subtitle="Gas & Elektriciteit"
        body="Een <b>warmwater toestel</b> (boiler of doorstromer) zorgt voor continu warm water. Professionele <b>plaatsing en onderhoud</b> garandeert veiligheid en energie-efficiëntie.<br><br> <b>Onderhoud en herstellingen</b> voorkomen storingen en zorgen voor een lange levensduur van het toestel."
        serviceIcon={warmWaterToestelIcon}
        imgClass="h-100"
        voordelen={["Altijd voldoende warm water", "Energiezuinig en betrouwbaar", "Veilig en conform met Vlaamse normen", "Langere levensduur bij correct onderhoud"]}
        />
    </div>

    <div id="service-gasleiding" class="grid grid-cols-1 py-8 relative z-100">
        <Service src={gasleidingImage}
         title="Gasleidingen"
         subtitle="Controle, Vernieuwing & Keuring met Attest"
          body="Regelmatige <b>controle en keuring van gasleidingen</b> is cruciaal voor veiligheid. Bij verouderde of beschadigde leidingen bieden wij <b>professionele vernieuwing en herstellingen</b>, volledig volgens de Vlaamse wetgeving. Na keuring ontvang je een <b>officieel gaskeuring attest.</b>" 
          serviceIcon={gasleidingIcon}
          voordelen={["Maximale veiligheid", "Wettelijk conform met attest", "Geschikt voor woningen en bedrijven", "Professionele controle en herstellingen inbegrepen"]}/>
    </div>
</div>