<template>

    <section class="p-t-40">
        <h3 class="m-b-60">Let us know more about you</h3>

        <div class="container">

            <alert-box v-if="anyAlert" type="s" :content="alert"></alert-box>

            <div class="row">
                <div class="col-lg-8 center no-padding">
                    <form class="form-transparent-grey" @submit="submit">
                        <div class="row">

                            <div class="col-lg-12 form-group">
                                <label for="gender" class="sr-only">Gender</label>
                                <select required v-model="form.gender" id="gender" class="form-control">
                                    <option value="" selected>Select your gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div class="col-lg-12 form-group">
                                <label for="dob" class="sr-only">DOB</label>
                                <input required placeholder="DOB" class="form-control" v-model="form.dob" type="text" id="dob" onfocus="(this.type='date')">
                            </div>
                            <div class="col-lg-12 form-group">
                                <label for="interest" class="sr-only">Interests</label>
                                <input id="interest" required type="text" v-model="form.interest" placeholder="Interest" class="form-control">
                            </div>

                            <div class="form-group col-lg-12 text-left">
                                <h5>Social Media Links</h5>
                            </div>
                            <div class="form-group col-lg-12">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                                <span class="input-group-text">
                                                    <i class="fab fa-facebook"></i>
                                                </span>
                                    </div>
                                    <input v-model="form.facebook" type="text" class="form-control" placeholder="Facebook">
                                </div>
                            </div>
                            <div class="form-group col-lg-12">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                                <span class="input-group-text">
                                                    <i class="fab fa-twitter"></i>
                                                </span>
                                    </div>
                                    <input v-model="form.twitter" type="text" class="form-control" placeholder="Twitter">
                                </div>
                            </div>
                            <div class="form-group col-lg-12">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                                <span class="input-group-text">
                                                    <i class="fab fa-instagram"></i>
                                                </span>
                                    </div>
                                    <input v-model="form.instagram" type="text" class="form-control" placeholder="Instagram">
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-12 form-group">
                                <button class="btn" type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>



    import FormMixin from "../../mixins/FormMixin";
    import AlertBox from "../../components/AlertBox";
    import Form from "../../helpers/Form";
    import router from "../../router";

    export  default {
        name: 'PromoterForm',

        components: {AlertBox},
        mixins: [FormMixin],

        data(){
            return {
                alert: '',
                form: {
                    gender: '',
                    dob: '',
                    interest: '',
                    facebook: '',
                    twitter: '',
                    instagram: ''
                }
            }
        },
        methods: {
            submit(e)
            {
                const form = new Form(this.form);
                if(!form.validateForm(['facebook', 'twitter', 'instagram']))
                {
                    this.alert = form.getFieldError();
                }else{
                    router.push('promoter')
                }

                e.preventDefault();
            }
        }
    }
</script>
