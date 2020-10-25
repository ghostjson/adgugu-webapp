<template>
    <!-- Footer -->
    <footer id="footer">
        <div class="footer-content">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3">
                        <div class="widget">

                            <div class="widget-title">Adgugu</div>
                            <p class="mb-5">Adgugu company address here, Address, USA</p>
                            <router-link class="btn btn-inverted" to="/contact">Contact Us</router-link>
                        </div>
                    </div>
                    <div class="col-lg-9">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="widget">
                                    <div class="widget-title">Press & News</div>
                                    <ul class="list">
                                        <li><a href="#">Advertising</a></li>
                                        <li><a href="#">Promote your ad</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="widget">
                                    <div class="widget-title">Help & Support</div>
                                    <ul class="list">
                                        <li><a href="#">FAQ</a></li>
                                        <li><a href="#">Customer Support: info@agugu.com</a></li>
                                        <li><a href="#">Technical Support: tech@adgugu.com</a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </div>
        <div class="copyright-content">
            <div class="container">
                <div class="copyright-text text-center">&copy; 2020 Adgugu - Advertising Company. All Rights Reserved.</div>
            </div>
        </div>
    </footer>
    <!-- end: Footer -->
</template>

<script>
    export default {
        name: 'ClientFooter'
    }
</script>