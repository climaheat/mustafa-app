<script lang="ts">
    export let src: string;
    export let title: string;
    export let body: string;
    export let imgClass: string = "";
</script>

<div class="grid grid-cols-2 bg-brown-rust-200 px-10 py-4 rounded-3xl">
    <div class="grid grid-rows-3">
        <div class="bold text-2xl font-bold italic mt-8">
            {title}
        </div>

        <div class="flex items-center row-span-3">
            {body}
        </div>
    </div>

    <img 
    {src}
    alt="Logo of heat/cold solutions company" 
    class="w-80 mx-auto rounded-2xl {imgClass}"
    >
</div>