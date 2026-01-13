<script lang="ts">
    export let src: string;
    export let title: string;
    export let body: string;
    export let imgClass: string = "";
    export let serviceIcon: any;
</script>

<div class="grid grid-cols-2 bg-brown-rust-200 px-10 py-4 rounded-3xl">
    <div class="flex flex-col">
        <div class="bold text-2xl font-bold italic mt-8">
            {title}
        </div>

        <div class="py-4">
            {body}
        </div>

        <svelte:component this={serviceIcon} class="size-30 mx-auto my-auto"/>
    </div>

    <img 
    {src}
    alt="Logo of heat/cold solutions company" 
    class="w-90 mx-auto rounded-2xl border-3 {imgClass}"
    >
</div>