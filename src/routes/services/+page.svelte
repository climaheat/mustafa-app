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

</script>

<Navbar/>

<div class="gap-y-12 gap-x-8 px-64 pt-10 justify-items-center bg-brown-rust-50">
    <img 
        src="{logo}" 
        alt="Logo of heat/cold solutions company" 
        class="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto"
    >

    <div id="service-airco" class="grid grid-cols-1 py-4">
        <Service src={aircoImage} title="Airco Onderhoud/Plaatsing" body="We zijn experts als het gaat over onderhoud/plaatsing van Airco toestellen. Zo kunnen we snel en efficient uw airco in orde brengen."/>
    </div>

    <div id="service-warmtepomp" class="grid grid-cols-1 py-4">
        <Service src={warmtePompImage} title="Warmte Pomp Plaatsing" body="We plaatsen uw warmte pomp op professionele en efficiente wijze. Daarna controleren we deze zodat hij zeker goed werkt."/>
    </div>

    <div id="service-warmWaterToestel" class="grid grid-cols-1 py-4">
        <Service src={warmWaterToestelImage} 
        title="Warm Water toestellen" 
        body="We installeren en onderhouden energiezuinige warmwatertoestellen op maat van elke klant. We adviseren eerlijk en gericht op comfort en duurzaamheid. Ook na de installatie zorgen we voor een betrouwbare service."
        imgClass="h-60"
        />
    </div>

    <div id="service-gasketel" class="grid grid-cols-1 py-4">
        <Service src={gasketelImage} title="Herstelling gasketel" body="We verzorgen snelle en vakkundige herstellingen van gasketels, met focus op veiligheid en betrouwbaarheid."/>
    </div>

    <div id="service-badkamer" class="grid grid-cols-1 py-4">
        <Service src={showerServiceImage} title="Badkamer Renovatie" body="We voeren complete badkamerrenovaties uit, van afbraak tot afwerking, met oog voor kwaliteit en comfort."/>
    </div>


    <div id="service-centraleVerwarming" class="grid grid-cols-1 py-4">
        <Service src={centraleVerwarmingImage} title="Centrale Verwarming" body="We installeren, onderhouden en herstellen centrale verwarmingssystemen voor een efficiënte en comfortabele warmte in elke ruimte."/>
    </div>


    <div id="service-sanitair" class="grid grid-cols-1 py-4">
        <Service src={sanitairImage} 
        title="Sanitair" 
        body="We installeren en onderhouden sanitaire installaties met focus op kwaliteit, comfort en een perfecte afwerking."
        />
    </div>

    <div id="service-gasleiding" class="grid grid-cols-1 py-4">
        <Service src={gasleidingImage} title="Gasleiding" body="We plaatsen, onderhouden en keuren gasleidingen veilig en betrouwbaar, volledig volgens de geldende normen."/>
    </div>
</div>