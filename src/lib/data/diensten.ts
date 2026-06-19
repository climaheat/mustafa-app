import type { Component } from 'svelte';

import gasketelImage from '$lib/assets/gasketel.jpg';
import warmWaterToestelImage from '$lib/assets/warmwatertoestel.jpg';
import gasleidingImage from '$lib/assets/gasleiding.jpg';
import stookolieImage from '$lib/assets/stookolie.jpeg';

import warmtepompIcon from 'phosphor-svelte/lib/ThermometerHot';
import warmWaterToestelIcon from 'phosphor-svelte/lib/DeviceTabletSpeaker';
import gasketelIcon from 'phosphor-svelte/lib/Cube';
import gasleidingIcon from 'phosphor-svelte/lib/Pipe';

export type Dienst = {
	slug: string;
	title: string;
	subtitle: string;
	body: string;
	src: string;
	imgClass?: string;
	priceString?: string;
	priceString2?: string;
	priceString3?: string;
	serviceIcon: Component;
	voordelen: string[];
	metaTitle: string;
	metaDescription: string;
};

export const diensten: Dienst[] = [
	{
		slug: 'gasketel',
		title: 'Verwarmingsketel',
		subtitle: 'Plaatsing, Onderhoud, Herstellingen & Attest',
		body: 'Een <b>verwarmingsketel</b> zorgt voor een betrouwbaar en warm binnenklimaat. Een professionele <b>plaatsing van gas- of condensatieketels</b> garandeert veilige werking en optimaal rendement, zowel in Antwerpen als in heel Vlaanderen.<br> <br> Regelmatig <b>onderhoud</b> en snelle <b>herstellingen</b> zijn wettelijk verplicht in Vlaanderen. Na controle of onderhoud ontvang je een <b>officieel onderhouds- en conformiteitsattest.</b>',
		src: gasketelImage,
		priceString: 'Onderhoud 120€ (exclusief onderhoudset).',
		priceString2: 'Vanaf 3 onderhouden (binnen straal van 1 km): 99€ per onderhoud.',
		priceString3: 'Herstelling: 120€ voor 1 uur, daarna 40€ per extra halfuur.',
		serviceIcon: gasketelIcon,
		voordelen: [
			'Energiezuinig en betrouwbaar',
			'Snelle herstelling bij defecten',
			'Constante warmte en comfort',
			'Lagere energiekosten',
			'Lange levensduur bij correct onderhoud'
		],
		metaTitle: 'Verwarmingsketel - Plaatsing, Onderhoud & Herstellingen',
		metaDescription:
			'Professionele plaatsing, onderhoud, herstellingen en keuring met attest voor verwarmingsketels in Antwerpen en Vlaanderen.'
	},
	{
		slug: 'stookolie',
		title: 'Stookolieketel',
		subtitle: 'Onderhoud, Herstellingen & Keuring',
		body: 'Een <b>stookolieketel</b> levert veilige en efficiënte verwarming. Regelmatig <b>onderhoud, herstellingen en keuring</b> zijn verplicht in Vlaanderen en zorgen voor een lage uitstoot en een betrouwbaar systeem. Na controle ontvang je een <b>officieel onderhouds- en verbrandingsattest.</b>',
		src: stookolieImage,
		imgClass: 'h-100',
		priceString: 'Onderhoud 200€.',
		priceString2: 'Onderhoud vanaf 3 ketels (binnen straal van 1 km): 179€ per onderhoud.',
		priceString3: 'Herstelling: 140€ voor 1 uur, daarna 40€ per extra halfuur.',
		serviceIcon: warmtepompIcon,
		voordelen: [
			'Wettelijk in orde',
			'Minder kans op storingen',
			'Betrouwbare werking en efficiëntie',
			'Langere levensduur van de ketel'
		],
		metaTitle: 'Stookolieketel - Onderhoud, Herstellingen & Keuring',
		metaDescription:
			'Onderhoud, herstellingen en keuring van stookolieketels met officieel attest in Antwerpen en Vlaanderen.'
	},
	{
		slug: 'warmwatertoestel',
		title: 'Warmwater Toestellen',
		subtitle: 'Gas & Elektriciteit',
		body: 'Een <b>warmwater toestel</b> (boiler of doorstromer) zorgt voor continu warm water. Professionele <b>plaatsing en onderhoud</b> garandeert veiligheid en energie-efficiëntie.<br><br> <b>Onderhoud en herstellingen</b> voorkomen storingen en zorgen voor een lange levensduur van het toestel.',
		src: warmWaterToestelImage,
		imgClass: 'h-100',
		serviceIcon: warmWaterToestelIcon,
		voordelen: [
			'Altijd voldoende warm water',
			'Energiezuinig en betrouwbaar',
			'Veilig en conform met Vlaamse normen',
			'Langere levensduur bij correct onderhoud'
		],
		metaTitle: 'Warmwater Toestellen - Plaatsing & Onderhoud',
		metaDescription:
			'Plaatsing, onderhoud en herstellingen van warmwatertoestellen op gas en elektriciteit in Antwerpen en Vlaanderen.'
	},
	{
		slug: 'gasleiding',
		title: 'Gasleidingen',
		subtitle: 'Controle, Vernieuwing & Keuring met Attest',
		body: 'Regelmatige <b>controle en keuring van gasleidingen</b> is cruciaal voor veiligheid. Bij verouderde of beschadigde leidingen bieden wij <b>professionele vernieuwing en herstellingen</b>, volledig volgens de Vlaamse wetgeving. Na keuring ontvang je een <b>officieel gaskeuring attest.</b>',
		src: gasleidingImage,
		serviceIcon: gasleidingIcon,
		voordelen: [
			'Maximale veiligheid',
			'Wettelijk conform met attest',
			'Geschikt voor woningen en bedrijven',
			'Professionele controle en herstellingen inbegrepen'
		],
		metaTitle: 'Gasleidingen - Controle, Vernieuwing & Keuring',
		metaDescription:
			'Controle, vernieuwing en keuring van gasleidingen met officieel attest in Antwerpen en Vlaanderen.'
	}
];

export const dienstenBySlug = Object.fromEntries(diensten.map((dienst) => [dienst.slug, dienst])) as Record<
	string,
	Dienst
>;
