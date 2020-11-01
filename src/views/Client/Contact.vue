<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <h3 class="text-uppercase">Get In Touch</h3>
                    <p>The most happiest time of the day!. Suspendisse condimentum porttitor cursus. Duis nec nulla turpis. Nulla lacinia laoreet odio, non lacinia nisl malesuada vel. Aenean malesuada fermentum bibendum.</p>
                    <div class="m-t-30">
                        <form class="widget-contact-form" novalidate role="form" method="post">
                            <div class="row">
                                <div class="form-group col-md-6">
                                    <input type="text" id="name" aria-required="true" name="widget-contact-form-name" required class="form-control required name" placeholder="Enter your Name">
                                </div>
                                <div class="form-group col-md-6">
                                    <input type="email" id="email" aria-required="true" name="widget-contact-form-email" required class="form-control required email" placeholder="Enter your Email">
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-md-12">
                                    <input type="text" id="subject" name="widget-contact-form-subject" required class="form-control required" placeholder="Subject...">
                                </div>
                            </div>
                            <div class="form-group">
                                <textarea type="text" id="message" name="widget-contact-form-message" required rows="5" class="form-control required" placeholder="Enter your Message"></textarea>
                            </div>
                            <button class="btn" type="submit" id="form-submit"><i class="fa fa-paper-plane"></i>&nbsp;Send message</button>
                        </form>
                    </div>
                </div>
                <div class="col-lg-6">
                    <h3 class="text-uppercase">Address & Map</h3>
                    <div class="row">
                        <div class="col-lg-6">
                            <address>
                                <strong>Adgugu Pvt</strong><br>
                                Some Address, Suite 600<br>
                                San Francisco, CA 94107<br>
                                <abbr title="Phone">P:</abbr> (123) 456-7890
                            </address>
                        </div>
                        <div class="col-lg-6">
                            <address>
                                <strong>Adgugu</strong><br>
                                Some Address, Suite 600<br>
                                San Francisco, CA 94107<br>
                                <abbr title="Phone">P:</abbr> (123) 456-7890
                            </address>
                        </div>
                    </div>
                    <!-- Google Map -->
                    <div class="map" data-latitude="-37.817240" data-longitude="144.955826" data-style="light" data-info=""></div>
                    <!-- end: Google Map -->
                </div>
            </div>
        </div>
    </section>
</template>


<script>
    export default {
        name: 'Contact'
    }
</script>
