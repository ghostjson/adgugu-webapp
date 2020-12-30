<template>

    <modal title="Filter" :show="filter_modal">
        <div class="modal-body text-left">
            <form @submit="filter">
                <div class="form-group">
                    <label for="promoters_country">Country: </label>
                    <select class="form-control" id="promoters_country">
                        <option>USA</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="promoters_gender">Gender: </label>
                    <select class="form-control" id="promoters_gender">
                        <option>Any</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Age</label>
                    <div class="row">
                        <div class="col">
                            <label class="sr-only" for="from_age">From Age</label>
                            <input placeholder="From" class="form-control" value="10" type="number" id="from_age">
                        </div>
                        <div class="col">
                            <label class="sr-only" for="to_age">To Age</label>
                            <input class="form-control" placeholder="To" value="80" type="number" id="to_age">
                        </div>
                    </div>


                </div>
                <div class="form-group">
                    <label for="interest">Interests</label>
                    <input class="form-control" id="interest">
                </div>
                <div class="form-group">
                    <button class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    </modal>

    <div class="container">
        <div class="card mt-4">
            <div class="card-header">
                <h3>Promoters List</h3>
            </div>
            <div class="card-body text-left">
                <div class="row">
                    <div class="col">
                        <p class="font-weight-600">Promoters selected: {{ selected_promoters }} / {{ promoters_limit }}</p>
                    </div>
                    <div class="col d-flex justify-content-end">
                        <div>
                            <input placeholder="Search by name">
                        </div>
                        <p id="filter" @click="filter_modal = true" class="font-weight-600 ml-3">Filter: <i class="fas fa-filter"></i></p>
                        <div class="ml-3">
                            <button @click="selectRandom" class="btn btn-sm btn-dark">Random</button>
                        </div>
                    </div>
                </div>
                <person-tile
                        :selected="person.selected"
                        :person="person"
                        v-for="(person,index) in persons"
                        :key="index" @click="selectPerson(index)">
                </person-tile>
            </div>
            <div class="card-footer text-right">
                <button class="btn btn-dark">Finish</button>
            </div>
        </div>

    </div>
</template>

<script>
    import PersonTile from "../../../components/PersonTile";
    import Modal from "../../../components/Modal";

    export default {
        components: {Modal, PersonTile},
        data() {
            return {
                persons: [
                    {
                        name: 'John Walker',
                        image: 'https://i.pravatar.cc/300?img=3',
                        country: 'USA',
                        gender: 'Male',
                        age: '30',
                        interest: 'Music, Travel, Music',
                        selected: false
                    },
                    {
                        name: 'Kevin Miller',
                        image: 'https://i.pravatar.cc/300?img=4',
                        country: 'USA',
                        gender: 'Male',
                        age: '19',
                        interest: 'Music, Travel, Music',
                        selected: false
                    },
                    {
                        name: 'Teressa Thomas',
                        image: 'https://i.pravatar.cc/300?img=5',
                        country: 'Canada',
                        gender: 'Female',
                        age: '25',
                        interest: 'Music, Travel, Music',
                        selected: false
                    },
                    {
                        name: 'Weird Person',
                        image: 'https://i.pravatar.cc/300?img=6',
                        country: 'USA',
                        gender: 'Male',
                        age: '20',
                        interest: 'Music, Travel, Music',
                        selected: false
                    }
                ],
                selected_promoters: 0,
                filter_modal: false,
                promoters_limit: 3
            }
        },
        methods: {
            selectPerson(index) {

                if (!this.persons[index].selected) {
                    if(this.promoters_limit <= this.selected_promoters){
                        return
                    }
                    this.selected_promoters++
                    this.persons[index].selected = !this.persons[index].selected

                } else {
                    this.selected_promoters--
                    this.persons[index].selected = !this.persons[index].selected
                }

            },
            filter(e){
                e.preventDefault()
                this.filter_modal = false
            },
            selectRandom(){
                this.selected_promoters = 0

                for (let j=0; j< this.persons.length;j++){
                    this.persons[j].selected = false
                }

                for (let i=0; i < this.promoters_limit; i++){
                    this.selectPerson(i)
                }
            }
        }
    }
</script>

<style>
    #filter {
        cursor: pointer;
    }
</style>
