
<template>


    <div class="container mt-4">
        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col-4"></div>
                    <div class="col-4">
                        <h3>Offers List</h3>
                    </div>
                    <div class="col-4">
                        <button v-on:click="startAdCampaign" class="btn btn-sm btn-primary">Start AD Campaign</button>
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
        name: 'PromoterOfferList',
        components: { DataTable},

        data() {
            return {
                heading: [
                    {id: 'ID'},
                    {type: 'TYPE'},
                    {name: 'SUBMISSION TIME'},
                    {budget_remaining: 'VALIDITY'},
                    {end_time: 'ADVERTISER'},
                    {end_time: 'CATEGORY'}
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
                ],
                modal_show: false,
                ad_campaign: {
                    start_type: '',
                    sell_type: '',
                    scope: '',
                    ad_type: ''
                },
                step: 0
            }
        },
        methods: {
            startAdCampaign(){
                this.modal_show = true
            },
            closeModal(){
                this.modal_show = false;

                // set all fields blank
                Object.keys(this.ad_campaign).forEach(v => this.ad_campaign[v] = '')
                this.step = 0; // reset form
            },
            selectOption(field, value){
                this.ad_campaign[field] = value;
                this.step += 1;

                if(this.step === 4){
                    this.formRedirect(this.ad_campaign.ad_type, this.ad_campaign)
                }
            },
            formRedirect(value, ad_campaign){
                switch (value) {
                    case 'non_video':
                        this.$router.replace({name: 'newNonVideoAd', params: {ad_campaign}})
                        break;
                    case 'video':
                        this.$router.push({name: 'newVideoAd', params: {ad_campaign}})
                        break;
                    case 'offline':
                        this.$router.push({name: 'newOfflineAd', params: {ad_campaign}})
                        break;
                    default:
                        this.modal_show = false
                        break;
                }
            },
            renewCampaign(){
                this.$router.push({name: 'RenewCampaign'})
            }
        },
        created() {
            console.log('working')
        }
    }
</script>
