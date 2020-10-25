<template>

    <!-- Inspiro Slider -->
    <div id="slider" class="inspiro-slider slider-fullscreen" data-height-xs="360">
        <!-- Slide 1 -->
        <div class="slide" style="background-image:url('images/homepage-image.jpg');">
            <div class="bg-overlay"></div>

            <div class="container">
                <div class="container-fullscreen text-light text-center">
                    <div class="text-middle">
                        <h3 data-caption-animate="" data-animate-delay="600">Advertise Your Products & Services as an Advertiser</h3>
                        <h4 data-animate="fadeInUp" data-animate-delay="700" class="animated fadeInUp visible">Earn Extra Income as a Promoter</h4>
                        <h1 data-animate="fadeIn" data-animate-delay="500" class="text-lg text-colored animated fadeIn visible">Enjoy Great Deals & Discounts as a Shopper</h1>

                        <div data-animate="fadeInDown" data-animate-delay="900" class="animated fadeInDown visible">
                            <a class="btn btn-dark" href="#">Know More</a>
                            <a class="btn btn-light btn-outline" href="#">Get Started</a>
                        </div>
                    </div>
                </div>
            </div>

            <div id="scroll-down" class="scrolldown-animation scrolldown-bottom">
                <a href="#about" class="scroll-to"><img alt="" src="images/scrolldown.png">
                </a>
            </div>
        </div>
        <!-- end: Slide 1 -->
    </div>
    <!--end: Inspiro Slider -->
</template>


<script>
    export default {
        name: 'ClientSlider'
    }
</script>