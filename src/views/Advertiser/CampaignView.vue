<template>
    <div class="container mt-4">
        <div class="card">
            <div class="card-header">
                <div>
                    <h2>Super Tire Sale</h2>
                </div>
            </div>
            <div class="card-body">
                <table class="table align-items-center">
                    <tbody style="text-align: left">
                        <tr>
                            <th>AD CAMPAIGN ID</th>
                            <td>ID12345-4567890</td>
                        </tr>
                        <tr>
                            <th>AD CAMPAIGN TYPE</th>
                            <td>Online Non-Video Ad</td>
                        </tr>
                        <tr>
                            <th>AD CAMPAIGN NAME</th>
                            <td>Super Tire Sale</td>
                        </tr>
                        <tr>
                            <th>AD CAMPAIGN END TIME</th>
                            <td>06-May-2019 18:15</td>
                        </tr>
                        <tr>
                            <th>BUDGET ASSIGNED, US$</th>
                            <td>$500.00</td>
                        </tr>
                        <tr>
                            <th>CATEGORY</th>
                            <td>Auto Part & Accessories</td>
                        </tr>
                        <tr>
                            <th>SUBCATEGORY 1</th>
                            <td>Auto Parts</td>
                        </tr>
                        <tr>
                            <th>SUBCATEGORY 2</th>
                            <td>Wheels & Tires</td>
                        </tr>
                        <tr>
                            <th>SUBCATEGORY 3</th>
                            <td>Wheels</td>
                        </tr>
                    </tbody>
                </table>
                <div class="row mt-2">
                    <div class="col text-right">
                        <router-link to="/advertiser/ad-campaigns/edit/1" class="m-1">
                            <button type="button" id="edit_button" class="btn btn-default">Edit</button>
                        </router-link>
                        <router-link to="/advertiser/ad-campaigns">
                            <button type="button" id="delete_button" class="btn btn-danger">Delete</button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<style>

</style>

<script>
    export default {
        name: 'CampaignView',
    }
</script>
