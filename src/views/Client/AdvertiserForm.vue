<template>
    <section class="p-t-40">
        <h3 class="m-b-60">Let us know more about your business</h3>

        <div class="container">

            <alert-box v-if="anyAlert" type="s" :content="alert"></alert-box>

            <div class="row">
                <div class="col-lg-8 center no-padding">
                    <form class="form-transparent-grey" @submit="submit">
                        <div class="row">

                            <div class="col-lg-12 form-group">
                                <label for="brand" class="sr-only">Brand</label>
                                <input id="brand" required type="text" v-model="form.brand" placeholder="Brand" class="form-control">
                            </div>
                            <div class="col-lg-12 form-group">
                                <label for="business_website" class="sr-only">Business Website</label>
                                <input id="business_website" required type="url" v-model="form.business_website" placeholder="Business Website" class="form-control">
                            </div>
                            <div class="col-lg-12 form-group">
                                <label for="category" class="sr-only">Category</label>
                                <input id="category" required type="text" v-model="form.category" placeholder="Category" class="form-control">
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
        name: 'AdvertiserForm',

        components: {AlertBox},
        mixins: [FormMixin],

        data(){
            return {
                alert: '',
                form: {
                    brand: '',
                    business_website: '',
                    category: '',
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
