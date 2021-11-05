<script>
    let QUERY = document.QUERY_PARAMETERS;
    window.setTimeout(function(){
        window.location.href = QUERY?.to;
    }, 5000);
</script>
Please hang on while you will be redirected to <a href="{QUERY?.to}">{QUERY?.to}</a>