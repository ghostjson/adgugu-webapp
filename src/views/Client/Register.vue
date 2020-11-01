<template>
    <section class="p-t-10">
        <h3 class="m-b-60">Register</h3>
        <div class="container">

            <alert-box v-if="anyAlert" type="danger" :content="alert"></alert-box>

            <div class="row">
                <div class="col-lg-8 center no-padding">
                    <form class="form-transparent-grey" @submit="submit">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <label for="fun" class="col-sm-4 col-md-4 control-label text-right">Who are you?</label>
                                    <div class="col-sm-7 col-md-7">
                                        <div class="input-group">
                                            <div id="role" class="btn-group">
                                                <a class="btn btn-primary btn-sm" v-on:click="changeRole('Advertiser')" :class="whichRole('Advertiser')" data-toggle="fun" data-title="Y">Advertiser</a>
                                                <a class="btn btn-primary btn-sm" v-on:click="changeRole('Promoter')" :class="whichRole('Promoter')"  data-toggle="fun" data-title="X">Promoter</a>
                                                <a class="btn btn-primary btn-sm" v-on:click="changeRole('Shopper')" :class="whichRole('Shopper')"  data-toggle="fun" data-title="N">Shopper</a>
                                            </div>
                                            <input type="hidden" name="fun" id="fun">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 form-group">
                                <label class="sr-only">First Name</label>
                                <input required type="text" v-model="register.first_name" placeholder="First Name" class="form-control">
                            </div>
                            <div class="col-lg-6 form-group">
                                <label class="sr-only">Last Name</label>
                                <input required type="text" v-model="register.last_name" placeholder="Last Name" class="form-control">
                            </div>
                            <div class="col-lg-12 form-group">
                                <label class="sr-only">Email</label>
                                <input required type="email" v-model="register.email" placeholder="Email" class="form-control">
                            </div>
                            <div class="col-lg-12 form-group">
                                <label class="sr-only">Password</label>
                                <input required type="password" v-model="register.password" placeholder="Password" class="form-control">
                            </div>
                            <div class="col-lg-12 form-group">
                                <label class="sr-only">Conform Password</label>
                                <input required type="password" v-model="register.confirm_password" placeholder="Conform Password" class="form-control">
                            </div>
                            <div class="col-lg-12 form-group">
                                <label class="sr-only">Phone</label>
                                <input required type="text" v-model="register.phone" placeholder="Phone" class="form-control">
                            </div>
                            <div class="col-lg-12 form-group">
                                <label class="sr-only" for="address">Address</label>
                                <textarea required id="address" v-model="register.address" class="form-control" placeholder="Address"></textarea>
                            </div>


                            <div class="col-lg-12 form-group" style="text-align: left">
                                <div class="form-check">
                                    <input required class="form-check-input" v-model="register.terms" type="checkbox" id="terms">
                                    <label class="form-check-label" for="terms">
                                        <router-link to="/">Agree with Terms of Service</router-link>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-12 form-group">
                                <button class="btn" type="submit">Register</button>
                            </div>
                        </div>
                        <small>Already a member? <router-link to="/login">Login here.</router-link></small>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
    #role .notActive{
        color: #3276b1;
        background-color: #fff;
    }
</style>

<script>

    import Form from "../../helpers/Form";
    import AlertBox from "../../components/AlertBox";
    import FormMixin from "../../mixins/FormMixin";
    import router from "../../router";

    export default {
        name: 'Register',
        components: {AlertBox},
        mixins: [FormMixin],
        data(){
            return {
                register: {
                    first_name: '',
                    last_name: '',
                    email: '',
                    password: '',
                    confirm_password: '',
                    address: '',
                    role: 'Advertiser',
                    terms: false,
                    phone: '',
                }
            };
        },
        methods: {
            whichRole(role)
            {
                return role === this.register.role ? 'active' : 'notActive';
            },
            changeRole(role)
            {
                this.register.role = role;
            },
            submit(e)
            {
                e.preventDefault();
                const form = new Form(this.register);

                if(!this.register.terms){
                    this.alert = "You should agree with the terms of service to continue";
                    return;
                }


                if(!form.validateForm(['role']))
                {
                    this.alert = form.getFieldError();
                }else{
                    //DEMO CODE
                    if(this.register.role === 'Advertiser') {
                        router.push('advertiser-form')
                    }else{
                        router.push('promoter-form')
                    }
                }


            }
        }
    }
</script>
