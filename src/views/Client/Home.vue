<template>

  <client-slider></client-slider>

  <client-about></client-about>

  <!-- Call to action -->
  <section class="background-colored text-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-9r">
          <h3 class="text-light">Like To Make Some Money? Register as a Promoter</h3><a class="btn btn-light btn-outline btn-rounded">Register</a>
        </div>
      </div>
    </div>
  </section>
  <!-- end: Call to action -->


  <client-partners></client-partners>

</template>



<script>
// @ is an alias to /src

import ClientSlider from "../../components/ClientSlider";
import ClientAbout from "../../components/ClientAbout";
import ClientPartners from "../../components/ClientPartners";


export default {
  name: 'Home',
  components: {
    ClientPartners,
    ClientAbout,
    ClientSlider,
  },
  mounted() {
    console.log(this.$parent.spinner)
  }
}
</script>
