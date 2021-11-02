<h1>Symfony + Svelte = &lt;3</h1>

<script>
    let name = 'world';
    let envVariable = process.env.foo;
</script>

<style>
    h1{
        color: tomato
    }
</style>

<h1>Hello {name}!</h1>
<p>env variable: {envVariable}</p>