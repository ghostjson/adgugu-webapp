<template>

    <div class="container mt-6">
        <data-table
                title="Ad Campaigns"
                :table-data="campaigns"
                :table-headings="heading"
                delete-link="ad-campaigns/delete/"
                view-link="ad-campaigns/">
        </data-table>
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
