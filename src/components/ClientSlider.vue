<template>
    <div class="slider">
        <div class="slide" v-if="slide === 0" style="background-image:url('/images/home-slider/advertise1.jpg')">
            <div class="overlay">
                <div class="text">
                    <h1>Advertise Your Products & Services as an Advertiser</h1>
                </div>
            </div>
        </div>
        <div class="slide" v-if="slide === 1" style="background-image:url('/images/home-slider/promoter1.jpg')">
            <div class="overlay">
                <div class="text">
                    <h1>Earn Extra Income as a Promoter.</h1>
                </div>
            </div>
        </div>
        <div class="slide" v-if="slide === 2" style="background-image:url('/images/home-slider/shoppers1.jpg')">
            <div class="overlay">
                <div class="text">
                    <h1>Enjoy Great Deals & Discounts as a Shopper.</h1>
                </div>
            </div>
        </div>
        <div @click="prevButton" class="nav-buttons prev-button"><i class="fas fa-chevron-left"></i></div>
        <div @click="nextButton" class="nav-buttons next-button"><i class="fas fa-chevron-right"></i></div>
    </div>
</template>

<style scoped>
    .slide {
        width: 100vw;
        height: 85vh;
        background-size: cover;
    }

    .slide h1 {
        font-size: 2em;
        text-transform: uppercase;
    }

    .overlay {
        width: inherit;
        height: inherit;
        background-color: rgba(0, 0, 0, 0.31);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .text h1 {
        font-size: 2.5em;
        color: white;
    }

    .nav-buttons {
        background: rgba(0, 0, 0, 0.51);
        width: 30px;
        height: 30px;
        color: white;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        z-index: 100;
        top: 58%;
        cursor: pointer;
    }

    .prev-button {
        left: 40px;
    }

    .next-button {
        right: 40px;
    }

    .prev-button i {
        position: relative;
        right: 1px;
    }
</style>

<script>
    export default {
        name: 'ClientSlider',
        data() {
            return {
                slide: 0,
            }
        },
        methods: {
            nextButton() {
                this.slide !== 2 ? this.slide++ : this.slide = 0;
            },
            prevButton() {
                this.slide !== 0 ? this.slide-- : this.slide = 2;
            },
        },
        mounted() {
            setInterval(this.nextButton , 7000)
        }
    }
</script>
