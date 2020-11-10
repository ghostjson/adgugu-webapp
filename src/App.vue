<template>
  <spinner-component v-if="spinner"></spinner-component>

  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>

  import SpinnerComponent from "./components/SpinnerComponent";

  export default {
    components: {SpinnerComponent},
    data(){
      return {
        spinner: true
      }
    },
    created() {

      setTimeout( ()=>{
        this.spinner = false;
        console.log(this.spinner)
      }, 1000)

    },
    mounted() {
    },

  }

</script>
