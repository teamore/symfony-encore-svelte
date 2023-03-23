<script>
    let currentPage = "Login"
</script>
{#await import('./'+currentPage+'.svelte') then c1}
    <svelte:component
            this={c1.default}
    />
{/await}