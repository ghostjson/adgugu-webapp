<template>
    <section class="p-t-10">
        <h3 class="m-b-60">Register</h3>
        <div class="container">
            <div class="row">
                <div class="col-lg-8 center no-padding">
                    <form class="form-transparent-grey">
                        <div class="row">
                            <div class="col-lg-6 form-group">
                                <label class="sr-only">First Name</label>
                                <input type="text" value="" placeholder="First Name" class="form-control">
                            </div>
                            <div class="col-lg-6 form-group">
                                <label class="sr-only">Last Name</label>
                                <input type="text" value="" placeholder="Last Name" class="form-control">
                            </div>
                            <div class="col-lg-12 form-group">
                                <label class="sr-only">Email</label>
                                <input type="text" value="" placeholder="Email" class="form-control">
                            </div>
                            <div class="col-lg-12 form-group">
                                <label class="sr-only">Password</label>
                                <input type="password" value="" placeholder="Password" class="form-control">
                            </div>
                            <div class="col-lg-12 form-group">
                                <label class="sr-only">Conform Password</label>
                                <input type="password" value="" placeholder="Conform Password" class="form-control">
                            </div>
                            <div class="col-lg-12 form-group">
                                <label class="sr-only">Phone</label>
                                <input type="text" value="" placeholder="Phone" class="form-control">
                            </div>
                            <div class="col-lg-12 form-group">
                                <label class="sr-only" for="address">Address</label>
                                <textarea id="address" class="form-control" placeholder="Address"></textarea>
                            </div>


                            <div class="col-lg-12 form-group" style="text-align: left">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="terms">
                                    <label class="form-check-label" for="terms">
                                        <router-link to="/">Agree with Terms of Service</router-link>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-12 form-group">
                                <button class="btn" type="button">Register</button>
                            </div>
                        </div>
                        <small>Already a member? <router-link to="/login">Login here.</router-link></small>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Register'
    }
</script>
