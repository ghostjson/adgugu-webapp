<template>

  <modal style="overflow: scroll" title="How does it work for Advertisers?" :show="modal.advertiser" @close="closeModal">
    <div class="modal-body">
      <div class="content">
        <!-- Timeline -->
        <ul class="timeline" v-if="modal.slide_number === 0">
          <!--Timeline item-->
          <li class="timeline-item" style="text-align: left">
            <div class="timeline-icon">1</div>
            <h4 style="padding-bottom: 20px">Register as "Promoter"</h4>
            <img src="/images/home/register_icon.png">
          </li>
          <!--end: Timeline item-->
          <!--Timeline item-->
        </ul>
        <ul class="timeline" v-if="modal.slide_number === 1">
          <!--Timeline item-->
          <li class="timeline-item" style="text-align: left">
            <div class="timeline-icon">2</div>
            <h4 style="padding-bottom: 20px">Post the Ads and Commit to Pay "Promoters" After They've Shared Your Ads</h4>
            <img src="/images/home/ads_icon.png">
          </li>
          <!--end: Timeline item-->
          <!--Timeline item-->
        </ul>
        <ul class="timeline" v-if="modal.slide_number === 2">
          <!--Timeline item-->
          <li class="timeline-item" style="text-align: left">
            <div class="timeline-icon">3</div>
            <h4 style="padding-bottom: 20px"> Select "Promoters" Based on Your Preferences: Promoter's Location, Gender, Age Group, Interests</h4>
            <img src="/images/home/select_icon.png">
          </li>
          <!--end: Timeline item-->
          <!--Timeline item-->
        </ul>
        <ul class="timeline" v-if="modal.slide_number === 3">
          <!--Timeline item-->
          <li class="timeline-item" style="text-align: left">
            <div class="timeline-icon">4</div>
            <h4 style="padding-bottom: 20px">Pay "Promoters" After Their Friends Acted on Your Posts</h4>
            <img src="/images/home/pay_icon.png">
          </li>
          <!--end: Timeline item-->
          <!--Timeline item-->
        </ul>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" v-on:click="nextModal" v-if="modal.next_button" class="btn btn-primary">Next</button>
      <button type="button" v-if="modal.register_button" class="btn btn-primary">Register as Advertiser</button>
      <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
    </div>
  </modal>
  <modal style="overflow: scroll" title="How does it work for Promoters?" :show="modal.promoter" @close="closeModal">
    <div class="modal-body">
      <div class="content">
        <!-- Timeline -->
        <ul class="timeline" v-if="modal.slide_number === 0">
          <!--Timeline item-->
          <li class="timeline-item" style="text-align: left">
            <div class="timeline-icon">1</div>
            <h4 style="padding-bottom: 20px">Register as "Promoter"</h4>
            <img src="/images/home/register_icon.png">
          </li>
          <!--end: Timeline item-->
          <!--Timeline item-->
        </ul>
        <ul class="timeline" v-if="modal.slide_number === 1">
          <!--Timeline item-->
          <li class="timeline-item" style="text-align: left">
            <div class="timeline-icon">2</div>
            <h4 style="padding-bottom: 20px">Receive the propositions from "Advertisers" to share the ads with your Friends</h4>
            <img src="/images/home/post_ad_icon.png">
          </li>
          <!--end: Timeline item-->
          <!--Timeline item-->
        </ul>
        <ul class="timeline" v-if="modal.slide_number === 2">
          <!--Timeline item-->
          <li class="timeline-item" style="text-align: left">
            <div class="timeline-icon">3</div>
            <h4 style="padding-bottom: 20px">Start sharing the ads with your Friends</h4>
            <img src="/images/home/share_icon.png">
          </li>
          <!--end: Timeline item-->
          <!--Timeline item-->
        </ul>
        <ul class="timeline" v-if="modal.slide_number === 3">
          <!--Timeline item-->
          <li class="timeline-item" style="text-align: left">
            <div class="timeline-icon">4</div>
            <h4 style="padding-bottom: 20px">Get paid right after your Friends acted on your sharings</h4>
            <img src="/images/home/get_paid_icon.png">
          </li>
          <!--end: Timeline item-->
          <!--Timeline item-->
        </ul>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" v-on:click="nextModal" v-if="modal.next_button" class="btn btn-primary">Next</button>
      <button type="button" v-if="modal.register_button" class="btn btn-primary">Register as Promoter</button>
      <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
    </div>
  </modal>
  <modal style="overflow: scroll" title="How does it work for Shoppers?" :show="modal.shopper" @close="closeModal">
    <div class="modal-body">
      <div class="content">
        <!-- Timeline -->
        <ul class="timeline" v-if="modal.slide_number === 0">
          <!--Timeline item-->
          <li class="timeline-item" style="text-align: left">
            <div class="timeline-icon">1</div>
            <h4 style="padding-bottom: 20px">Register as "Shopper"</h4>
            <img src="/images/home/register_icon.png">
          </li>
          <!--end: Timeline item-->
          <!--Timeline item-->
        </ul>
        <ul class="timeline" v-if="modal.slide_number === 1">
          <!--Timeline item-->
          <li class="timeline-item" style="text-align: left">
            <div class="timeline-icon">2</div>
            <h4 style="padding-bottom: 20px">Receive from Your Friends the Great Shopping Deals & Discounts offered by "Advertisers"</h4>
            <img src="/images/home/ads_icon.png">
          </li>
          <!--end: Timeline item-->
          <!--Timeline item-->
        </ul>
        <ul class="timeline" v-if="modal.slide_number === 2">
          <!--Timeline item-->
          <li class="timeline-item" style="text-align: left">
            <div class="timeline-icon">3</div>
            <h4 style="padding-bottom: 20px">Shop & Enjoy The Great Shopping Deals & Discounts</h4>
            <img src="/images/home/sale_icon.png">
          </li>
          <!--end: Timeline item-->
          <!--Timeline item-->
        </ul>
        <ul class="timeline" v-if="modal.slide_number === 3">
          <!--Timeline item-->
          <li class="timeline-item" style="text-align: left">
            <div class="timeline-icon">4</div>
            <h4 style="padding-bottom: 20px">Get Paid After You Have Acted on Your Friends Sharings</h4>
            <img src="/images/home/pay_icon.png">
          </li>
          <!--end: Timeline item-->
          <!--Timeline item-->
        </ul>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" v-on:click="nextModal" v-if="modal.next_button" class="btn btn-primary">Next</button>
      <button type="button" v-if="modal.register_button" class="btn btn-primary">Register as Shopper</button>
      <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
    </div>
  </modal>


  <client-slider></client-slider>

  <client-about></client-about>

  <section class="p-b-30" >
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5"> <img alt="" style="width: inherit" src="images/home/section1.png"> </div>
        <div class="col-lg-7" style="text-align: left">
          <div class="heading-text heading-section mt-5">
            <h1>ADVERTISERS</h1>
            <p>Post your ad to get it shared by "Promoters" in friends social network</p>
            <ul class="points">
              <li>Get More Online Clicks & Video Ad Views</li>
              <li> Increase Traffice to Your Offline Stores</li>
              <li>Increase Brand & Products Awareness</li>
              <li>Grow Your Business</li>
            </ul>
            <router-link class="btn" :to="{name: 'register', params: { type: 'Advertiser' }}">Register as Advertiser</router-link>
            <div class="know-more">
              <a href="#" @click="knowMore('advertiser')">Know More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="background-grey p-b-3">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-7">
          <div class="heading-text heading-section mt-5" style="text-align: left">
            <h1>Promoters</h1>
            <p>Share Ad with friends and earn money</p>
            <ul class="points">
              <li>Earn Extra Income by Sharing Ads & Deals with Friends</li>
              <li>Enjoy Great Shopping Discounts</li>
              <li>Please Your Friends with Great Discount News</li>
            </ul>
            <router-link class="btn" :to="{name: 'register', params: { type: 'Promoter' }}">Register as Promoter</router-link>
            <div class="know-more">
              <a href="#"  @click="knowMore('promoter')">Know More</a>
            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <img alt=""  style="width: inherit" src="images/home/section5.png">
        </div>
      </div>
    </div>
  </section>
  <section class="p-b-3">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5"> <img alt="" style="width: inherit" src="images/home/section3.png"> </div>
        <div class="col-lg-7">
          <div class="heading-text heading-section mt-5" style="text-align: left">
            <h1>Shoppers</h1>
            <p>Enjoy the great deals shared by "Promoters" easy shopping and earn money</p>
            <ul class="points">
              <li>Enjoy Great Deals & Discounts</li>
              <li>Earn Extra Income</li>
              <li>Save Time on Shopping</li>
              <li>Have Fun Shopping</li>
            </ul>
            <router-link class="btn" :to="{name: 'register', params: { type: 'Shopper' }}">Register as Shopper</router-link>
            <div class="know-more">
              <a href="#" @click="knowMore('shopper')" >Know More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <!-- Call to action -->
  <section class="background-colored text-center">
    <div class="container register">
      <div class="row justify-content-center">
        <div class="col-lg-9r">
          <h3 class="text-light">Like To Make Some Money? Register as a Promoter</h3>
          <router-link class="btn btn-light btn-outline btn-rounded" :to="{name: 'register', params: { type: 'Promoter' }}">Register</router-link>
        </div>
      </div>
    </div>
  </section>
  <!-- end: Call to action -->


  <client-partners></client-partners>

</template>

<style scoped>
  .heading-text h1{
    font-size: 2.2em;
  }
  section .container{
    padding-bottom: 75px;
  }

  section .container.register{
    padding-bottom: 0;
  }

  ul.points{
    display: flex;
    flex-direction: column;
    padding-left: 15px;
    padding-bottom: 10px;
  }

  ul.points li{
    font-size: 0.8em;
    text-align: left;
    text-transform: none;
    color: gray;
    font-family: "Poppins", sans-serif;
    font-weight: 200;
  }

  .know-more{
    font-size: 0.7em;
    font-weight: 200;
    text-transform: none;
    text-decoration: underline;
  }

  .heading-text{
    font-size: 1.5em;
  }
</style>


<script>
// @ is an alias to /src

import ClientSlider from "../../components/ClientSlider";
import ClientAbout from "../../components/ClientAbout";
import ClientPartners from "../../components/ClientPartners";
import Modal from "../../components/Modal";


export default {
  name: 'Home',
  data(){
    return {
      modal: {
        advertiser: false,
        promoter: false,
        shopper: false,
        register_button: false,
        next_button: true,
        slide_number: 0
      }
    }
  },
  components: {
    Modal,
    ClientPartners,
    ClientAbout,
    ClientSlider,
  },
  methods: {
    closeModal(){
      this.modal.advertiser = false
      this.modal.promoter = false
      this.modal.shopper = false
      this.modal.slide_number = 0
      this.modal.next_button = true
      this.modal.register_button = false
    },
    nextModal(){
      if(this.modal.slide_number === 2){
        this.modal.next_button = false
        this.modal.register_button = true
      }
      this.modal.slide_number++
    },
    knowMore(value){
      this.modal[value] = true;
    }
  },
  mounted() {
    console.log(this.$parent.spinner)
  }
}
</script>
