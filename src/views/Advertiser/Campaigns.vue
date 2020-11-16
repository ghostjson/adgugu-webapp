<template>

    <div class="container mt-4">
        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col-4"></div>
                    <div class="col-4">
                       <h3>Ad Campaigns</h3>
                    </div>
                    <div class="col-4">
                        <button class="btn btn-sm btn-primary">Start AD Campaign</button>
                    </div>
                </div>
            </div>
            <div class="card-body">
                            <div class="custom-control custom-radio custom-control-inline active">
                                <input type="radio" checked id="customRadioInline1" name="customRadioInline1" class="custom-control-input">
                                <label class="custom-control-label" for="customRadioInline1">Active</label>
                            </div>
                            <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input">
                                <label class="custom-control-label" for="customRadioInline2">Expired</label>
                            </div>

                    <data-table
                            :table-data="campaigns"
                            :table-headings="heading"
                            delete-link="ad-campaigns/delete/"
                            view-link="ad-campaigns/">
                    </data-table>
            </div>
        </div>

    </div>




</template>

<script>
    import DataTable from "../../components/DataTable";

    export default {
        name: 'Campaigns',
        components: {DataTable},

        data() {
            return {
                heading: [
                    {id: 'CAMPAIGN ID'},
                    {type: 'CAMPAIGN TYPE'},
                    {name: 'CAMPAIGN NAME'},
                    {budget_remaining: 'BUDGET REMAINING'},
                    {end_time: 'CAMPAIGN END TIME'}
                ],
                campaigns: [
                    {
                        id: 1,
                        type: 'some type',
                        name: 'some name',
                        budget_remaining: 200,
                        end_time: new Date(),
                    },
                    {
                        id: 2,
                        type: 'some type2',
                        name: 'some name2',
                        budget_remaining: 200,
                        end_time: new Date(),
                    }
                ]
            }
        }
    }
</script>
