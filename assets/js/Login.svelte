<script>
    let user = {email : "your email", password : "password"}
    export let application;
</script>
<form method="POST">
    <h1>Login</h1>
    <div class="login-text">
        <label for="input-name">
            Email
        </label>
        <input id="input-name" type="text" bind:value={user.email} onfocus="this.value=''" />
    </div>
    <div class="login-text">
        <label for="input-password">
            Password
        </label>
        <input id="input-password" type="password" bind:value={user.password} onfocus="this.value=''" />
    </div>
    <input type="submit" on:click|preventDefault={() => application.network.callApi('auth/login', user, undefined, 'POST')}/>
</form>
You do not have an account yet? Then please <button on:click={() => application.redirectTo("Signup")}>sign up</button> here.