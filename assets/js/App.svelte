<script>
    import Application from "./classes/Application";
    let application = new Application('Welcome', true);
    let QUERY = document.QUERY_PARAMETERS;
    if (QUERY?.location) {
        application.redirectTo(QUERY.location);
    }
    if (QUERY?.token) {
        application.network.setBearerToken(QUERY.token);
    }
    if (QUERY?.user) {
        application.currentUser = QUERY.user;
    }
    let currentPage = application.getCurrentPage();
    let pageChangeHandler = function(newPage) {
        currentPage = newPage;
    }
    application.pageChangeHandler = pageChangeHandler;
</script>
<div class="content">
    {#await import('./pages/'+currentPage.charAt(0).toUpperCase()+currentPage.slice(1)+'.svelte') then currentPageComponent}
        <svelte:component
                this={currentPageComponent.default}
                application={application}
        />
    {/await}
</div>
