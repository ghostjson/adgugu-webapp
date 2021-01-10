<template>
    <div class="container mt-4">
        <div class="card">
            <div class="card-header">
                <h2>Offline Store Information</h2>
            </div>
            <div class="card-body text-left">
                <div class="row">
                    <div class="col">
                        <form @submit="submit">
                            <div class="form-group">
                                <label for="store_name">Store Name :</label>
                                <input type="text" class="form-control" id="store_name">
                            </div>
                            <h3>Store Location:</h3>
                            <div class="form-group">
                                <label for="address_line_1">Address Line 1:</label>
                                <input type="text" class="form-control" id="address_line_1">
                            </div>
                            <div class="form-group">
                                <label for="address_line_2">Address Line 2 :</label>
                                <input type="text" class="form-control" id="address_line_2">
                            </div>
                            <div class="form-group">
                                <label for="country">Country :</label>
                                <input type="text" class="form-control" id="country">
                            </div>
                            <div class="form-group">
                                <label for="state">State :</label>
                                <input type="text" class="form-control" id="state">
                            </div>
                            <div class="form-group">
                                <label for="city">City :</label>
                                <input type="text" class="form-control" id="city">
                            </div>
                            <div class="form-group">
                                <label for="zip">Zip :</label>
                                <input type="text" class="form-control" id="zip">
                            </div>
                            <div class="form-group">
                                <label for="telephone">Telephone :</label>
                                <input type="text" class="form-control" id="telephone">
                            </div>

                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OfflineAd',
        methods: {
            submit(e){ e.preventDefault()
                this.$router.push({name: 'Budget'})
            }
        }
    }
</script>
