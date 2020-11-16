<template>
    <section class="p-t-40">
        <h3 class="m-b-60">Login</h3>
        <div class="container">

            <alert-box v-if="anyAlert" type="danger" :content="alert"></alert-box>

            <div class="row">
                <div class="col-lg-8 center no-padding no-margin">
                    <form class="form-transparent-grey" @submit="submit">
                        <div class="row">

                            <div class="col-lg-12 form-group">
                                <label for="email" class="sr-only">Email</label>
                                <input id="email" type="email" v-model="login.email" placeholder="Email" class="form-control">
                            </div>
                            <div class="col-lg-12 form-group">
                                <label for="password" class="sr-only">Password</label>
                                <input id="password" type="password" v-model="login.password" placeholder="Password" class="form-control">
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-12 form-group">
                                <button class="btn" type="submit">Login</button>
                            </div>
                        </div>
                        <small>Not a member? <router-link to="/register">Register here.</router-link></small>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

    import AlertBox from "../../components/AlertBox";
    import Form from "../../helpers/Form";
    import FormMixin from "../../mixins/FormMixin";

    export default {
        name: 'Register',
        components: {AlertBox},
        mixins: [FormMixin],
        data(){
            return {
                login: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
          submit(e){

              const form = new Form(this.login);

              if(!form.validateForm())
              {
                  this.alert = form.getFieldError();
              }else{
                  console.log(this.login)
              }

              this.$router.push('/advertiser')

              e.preventDefault();
          },
        }
    }
</script>
