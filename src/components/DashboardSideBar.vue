<template>
    <nav class="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
        <div class="scrollbar-inner">
            <!-- Brand -->
            <div class="sidenav-header  align-items-center">
                <a class="navbar-brand" href="javascript:void(0)">
                    <img id="logo" src="../../public/images/logo/logo.jpg" class="navbar-brand-img" alt="...">
                </a>
            </div>
            <div class="navbar-inner">
                <!-- Collapse -->
                <div class="collapse navbar-collapse" id="sidenav-collapse-main">
                    <!-- Nav items -->
                    <ul class="navbar-nav">
                        <router-link  v-for="(menu,index) in menus" v-bind:key="index" v-bind:to="menu.link">
                        <li class="nav-item">
                                <a class="nav-link active">
                                    <i class="text-primary" :class="'ni '+menu.icon"></i>
                                    <span class="nav-link-text">{{ menu.title }}</span>
                                </a>
                        </li>
                        </router-link>
                    </ul>
                </div>
            </div>
        </div>
    </nav>

</template>

<style>
    #logo {
        width: 100px;
        height: auto;
    }

    .sidenav {
        z-index: 99 !important;
    }

    .navbar-nav{
        margin-top: 12px;
    }

    .nav-link i{
        font-size: 1.2em !important;
    }

    .nav-link-text{
        line-height: 20px;
        padding-top: 3px;
        font-size: 1.2em;

    }

</style>

<script>
    export default {
        name: 'DashboardSideBar',
        props: ['menus'],
        data() {
            return {
            }
        }
    }
</script>
