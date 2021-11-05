<script>
    export let application;
    let user = application.getCurrentUser();
    let fields = [];
    for(let key in user) {
        fields.push({ name: key, value: user[key] });
    }
</script>
<div>
    <button on:click={() => application.redirectTo('Dashboard')}>
        Dashboard
    </button>
    <h2>Profile information</h2>
    <form>
        {#each fields as field}
            <div class="input-text">
                <label for="input-{field.name}">{field.name}</label>
                <input type="text" id="input-{field.name}" name="{field.name}" bind:value="{user[field.name]}" disabled="{field.name === 'id' ? 'disabled' : undefined}" />
            </div>
        {/each}
        <input type="submit" on:click|preventDefault={() => application.network.callApi('/api/users/'+user.id, user, {'content-type': 'application/json'}, 'PUT')}/>
    </form>
</div>