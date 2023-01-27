<template>
    <div id="base">
        <app-login></app-login>
    </div>
</template>

<script>
import login_header from './login.vue';

export default {
    components: {
        'app-login': login_header

    }


}
</script>

<style>

</style>