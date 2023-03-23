<script>
    let user = {name: "your name", email : "your email", password : "password"}
    export let application;
</script>
<form method="POST">
    <h1>Signup</h1>
    <div class="login-text">
        <label for="input-name">
            Name
        </label>
        <input id="input-name" type="text" bind:value={user.name} onfocus="this.value=''" />
    </div>
    <div class="login-text">
        <label for="input-email">
            Email
        </label>
        <input id="input-email" type="text" bind:value={user.email} onfocus="this.value=''" />
    </div>
    <div class="login-text">
        <label for="input-password">
            Password
        </label>
        <input id="input-password" type="password" bind:value={user.password} onfocus="this.value=''" />
    </div>
    <input type="submit" on:click|preventDefault={() => application.network.callApi('auth/register', user, undefined, 'POST')} value="SIGN UP"/>
</form>
You already have an account? Then please <button on:click={() => application.redirectTo("Login")}>log in</button> here.