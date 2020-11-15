<template>
    <div class="card">
        <div class="card-body">

            <h3>{{ title }}</h3>
            <div class="table-responsive">
                <div>
                    <table class="table align-items-center">
                        <thead class="thead-light">
                        <tr>
                            <th v-for="(col, key) in tableHeadings" :key="key" v-on:click="sort()"
                                :data-sort="parseTableKey(col)">
                                {{ parseTableData(col) }}
                            </th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="d in tableData" :key="d.id">
                            <td>{{ d.id }}</td>
                            <td>{{ d.type }}</td>
                            <td>{{ d.name }}</td>
                            <td>{{ d.budget_remaining }}</td>
                            <td>{{ d.end_time }}</td>
                            <td>
                                <router-link :to="viewLink + d.id" v-if="viewLink !== ''">
                                    <span class="badge badge-primary m-1">View</span>
                                </router-link>
                                <router-link :to="deleteLink + d.id" v-if="deleteLink !== ''">
                                    <span class="badge badge-danger m-1">Delete</span>
                                </router-link>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'DataTable',
        props: ['title', 'tableData', 'tableHeadings', 'delete-link', 'view-link'],
        methods: {
            parseTableData(data) {
                return Object.values(data)[0]
            },
            parseTableKey(data) {
                return Object.keys(data)[0];
            }
        },
        mounted() {
        }
    }
</script>
