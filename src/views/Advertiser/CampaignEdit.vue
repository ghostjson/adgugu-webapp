<template>
    <div class="container mt-6">
        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-header">
                        <h2>Super Tire Sale</h2>
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="form-group">
                                <label for="ad-campaign-id" class="form-control-label">AD CAMPAIGN ID</label>
                                <input class="form-control" id="ad-campaign-id" value="ID12345-4567890">
                            </div>
                            <div class="form-group">
                                <label for="ad-campaign-type" class="form-control-label">AD CAMPAIGN TYPE</label>
                                <input class="form-control" id="ad-campaign-type" value="Online Non-Video Ad">
                            </div>
                            <div class="form-group">
                                <label for="ad-campaign-name" class="form-control-label">AD CAMPAIGN Name</label>
                                <input class="form-control" id="ad-campaign-name" value="Super Tire Sale">
                            </div>
                            <div class="form-group">
                                <label for="ad-campaign-end-time" class="form-control-label">AD CAMPAIGN END TIME</label>
                                <input class="form-control" type="datetime-local" id="ad-campaign-end-time" value="2020-11-20T01:11">
                            </div>
                            <div class="form-group">
                                <label for="budget-assigned" class="form-control-label">BUDGET ASSIGNED</label>
                                <input class="form-control" id="budget-assigned" value="$500.00">
                            </div>
                            <div class="form-group">
                                <label for="category" class="form-control-label">CATEGORY</label>
                                <input class="form-control" id="category" value="Auto Part & Accessories">
                            </div>
                            <div class="form-group">
                                <label for="subcategory-1" class="form-control-label">SUBCATEGORY 1</label>
                                <input class="form-control" id="subcategory-1" value="Auto Parts">
                            </div>
                            <div class="form-group">
                                <label for="subcategory-2" class="form-control-label">SUBCATEGORY 2</label>
                                <input class="form-control" id="subcategory-2" value="Wheels & Tires">
                            </div>
                            <div class="form-group">
                                <label for="subcategory-3" class="form-control-label">SUBCATEGORY 3</label>
                                <input class="form-control" id="subcategory-3" value="Wheels">
                            </div>
                            <div class="row">
                                <div class="col text-right">
                                    <button v-on:click="update" type="button" class="btn btn-success">Update</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>

<style>
    .form-group{
        text-align: left;
    }
</style>

<script>
    export default {
        name: 'CampaignEdit',
        methods: {
            update(){
                this.$router.push('/advertiser/ad-campaigns')
            }
        }
    }
</script>
