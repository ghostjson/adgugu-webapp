<template>
    <section class="p-t-10">
        <h3 class="m-b-60">Login</h3>
        <div class="container">
            <div class="row">
                <div class="col-lg-8 center no-padding">
                    <form class="form-transparent-grey">
                        <div class="row">

                            <div class="col-lg-12 form-group">
                                <label class="sr-only">Email</label>
                                <input type="text" value="" placeholder="Email" class="form-control">
                            </div>
                            <div class="col-lg-12 form-group">
                                <label class="sr-only">Password</label>
                                <input type="password" value="" placeholder="Password" class="form-control">
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-12 form-group">
                                <button class="btn" type="button">Register</button>
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
    export default {
        name: 'Register'
    }
</script>
