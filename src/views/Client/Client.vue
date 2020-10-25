<template>
    <client-header></client-header>
    <router-view></router-view>
    <client-footer></client-footer>

</template>


<script>
    import ClientHeader from "../../components/ClientHeader";
    import ClientFooter from "../../components/ClientFooter";
    export default {
        name: 'Client',
        components: {ClientFooter, ClientHeader}
    }
</script>