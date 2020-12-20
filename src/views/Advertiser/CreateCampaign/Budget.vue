<template>

    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h2>Advertising budget and period information</h2>
            </div>
            <div class="card-body text-left">
                <form @submit="submit">
                    <div class="form-group">
                        <label for="budget">Budget Allocate for this Ad Campaign: </label>
                        <input id="budget" value="1000" type="number" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="start-date">Ad Campaign Start Date: </label>
                        <input id="start-date" type="date" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="end-date">Ad Campaign End Date: </label>
                        <input id="end-date" type="date" class="form-control">
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>




</template>

<script>
    export default {
        name: 'Budget',

        methods: {
            submit(e){
                e.preventDefault()
            }
        }
    }
</script>
