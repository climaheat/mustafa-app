<script lang="ts">
    import parsePhoneNumber from 'libphonenumber-js'
    let { number }: { number: string } = $props()

    const parsedNumber = parsePhoneNumber(number, 'BE')
</script>

<style>
    a {
        padding-top: var(--padding-top, 30px);
        padding-bottom: var(--padding-bottom, 30px);
        margin: 0px;
        font-size: 20px;
        text-align: center;
    }
</style>

<a href="tel:{number}">
    {parsedNumber.formatInternational()}
</a>