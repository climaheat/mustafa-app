<script lang="ts">
    export let src: string;
    export let title: string;
    export let subtitle: string;
    export let body: string;
    export let voordelen: string[];
    export let imgClass: string = "";
    export let serviceIcon: any;
</script>

<div class="grid grid-cols-2 bg-digital-blue-200 px-10 py-4 rounded-3xl">
    <div class="flex flex-col">
        <div class="bold text-2xl font-bold italic mt-8">
            {title}
            <svelte:component this={serviceIcon} class="size-10 inline-block"/>
        </div>

        <div class="bold text-lg font-bold italic mt-1">
            {subtitle}
        </div>

        <div class="py-6">
            {@html body}
        </div>


        {#if voordelen.length > 0}
            <b>Voordelen:</b>
            <ul class="list-disc pl-5">
                {#each voordelen as voordeel}
                    <li>{voordeel}</li>
                {/each}
            </ul>
        {/if}
    </div>

    <img 
    {src}
    alt="Logo of heat/cold solutions company" 
    class="w-90 mx-auto my-auto rounded-2xl {imgClass}"
    >
</div>