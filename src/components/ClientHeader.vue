<template>
    <!-- Topbar -->
    <div id="topbar" class="d-none d-xl-block d-lg-block topbar-fullwidth">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <ul class="top-menu">
                        <li><a href="#">Career</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Cookie Policy</a></li>
                    </ul>
                </div>
                <div class="col-md-6 d-none d-sm-block">
                    <div class="social-icons social-icons-colored-hover">
                        <ul>
                            <li class="social-facebook"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                            <li class="social-twitter"><a href="#"><i class="fab fa-twitter"></i></a></li>
                            <li class="social-google"><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                            <li class="social-pinterest"><a href="#"><i class="fab fa-pinterest"></i></a></li>
                            <li class="social-vimeo"><a href="#"><i class="fab fa-vimeo"></i></a></li>
                            <li class="social-linkedin"><a href="#"><i class="fab fa-linkedin"></i></a></li>
                            <li class="social-dribbble"><a href="#"><i class="fab fa-dribbble"></i></a></li>
                            <li class="social-youtube"><a href="#"><i class="fab fa-youtube"></i></a></li>
                            <li class="social-rss"><a href="#"><i class="fa fa-rss"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- end: Topbar -->
    <!-- Header -->
    <header id="header" class="shadow-sm" data-fullwidth="true">
        <div class="header-inner">
            <div class="container">
                <!--Logo-->
                <div id="logo">
                    <a href="index.html">
                        <img src="images/logo/logo.jpg" class="logo-default">
                    </a>
                </div>
                <!--End: Logo-->
                <!-- Search -->
<!--                <div id="search"><a id="btn-search-close" class="btn-search-close" aria-label="Close search form"><i class="icon-x"></i></a>-->
<!--                    <form class="search-form" action="search-results-page.html" method="get">-->
<!--                        <input class="form-control" name="q" type="text" placeholder="Type & Search..." />-->
<!--                        <span class="text-muted">Start typing & press "Enter" or "ESC" to close</span>-->
<!--                    </form>-->
<!--                </div>-->
                <!-- end: search -->
                <!--Header Extras-->
<!--                <div class="header-extras">-->
<!--                    <ul>-->
<!--                        <li>-->
<!--                            <a id="btn-search" href="#"> <i class="icon-search"></i></a>-->
<!--                        </li>-->
<!--                        <li>-->
<!--                            <div class="p-dropdown">-->
<!--                                <a href="#"><i class="icon-globe"></i><span>EN</span></a>-->
<!--                                <ul class="p-dropdown-content">-->
<!--                                    <li><a href="#">French</a></li>-->
<!--                                    <li><a href="#">Spanish</a></li>-->
<!--                                    <li><a href="#">English</a></li>-->
<!--                                </ul>-->
<!--                            </div>-->
<!--                        </li>-->
<!--                    </ul>-->
<!--                </div>-->
                <!--end: Header Extras-->
                <!--Navigation Resposnive Trigger-->
<!--                <div id="mainMenu-trigger">-->
<!--                    <a class="lines-button x"><span class="lines"></span></a>-->
<!--                </div>-->
                <!--end: Navigation Resposnive Trigger-->
                <!--Navigation-->
                <div id="mainMenu">
                    <div class="container">
                        <nav>
                            <ul>
                                <li><router-link to="/">Home</router-link></li>
                                <li><router-link to="/contact">Contact</router-link></li>
                                <li><router-link to="/register">Register</router-link></li>
                                <li><router-link to="/login">Login</router-link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <!--end: Navigation-->
            </div>
        </div>
    </header>
    <!-- end: Header -->
</template>

<style>
    #logo-image{
        height: inherit;
    }
</style>


<script>
    export default {
        name: 'ClientHeader'
    }
</script>
