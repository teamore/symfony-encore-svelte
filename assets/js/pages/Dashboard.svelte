<script>
    export let application;
    let user = application.getCurrentUser();
</script>
<div>
    <h1>Dashboard</h1>
    Welcome back, {application.getCurrentUser().name}
    <button on:click={() => application.redirectTo('Editor')}>
        Profile
    </button>
    <button on:click={() => application.logout()}>
        Logout
    </button>
</div>