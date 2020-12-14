<template>
    <div class="container mt-4">
        <div class="card">
            <div class="card-header">
                <h2>Video Ad</h2>
            </div>
            <div class="card-body text-left">
                <div class="row">
                    <div class="col">
                        <form @submit="submit">
                            <div class="form-group">
                                <label for="link">Your online video link :</label>
                                <input type="text" class="form-control" id="link">
                                <small id="linkHelp" class="form-text text-muted">Should enter only website's home page ( not inner page link )</small>
                            </div>
                            <div class="form-group">
                                <label for="name">Ad campaign name :</label>
                                <input type="text" class="form-control" id="name">
                            </div>
                            <div class="form-group">
                                <label for="brand">Brand :</label>
                                <input type="text" class="form-control" id="brand">
                            </div>
                            <div class="form-group">
                                <label for="category">Category</label>
                                <select class="form-control" id="category">
                                    <option>Category 1</option>
                                    <option>Category 2</option>
                                    <option>Category 3</option>
                                    <option>Category 4</option>
                                    <option>Category 5</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="sub-category1">Sub Category 1</label>
                                <select class="form-control" id="sub-category1">
                                    <option>Category 1</option>
                                    <option>Category 2</option>
                                    <option>Category 3</option>
                                    <option>Category 4</option>
                                    <option>Category 5</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="sub-category2">Sub Category 2</label>
                                <select class="form-control" id="sub-category2">
                                    <option>Category 1</option>
                                    <option>Category 2</option>
                                    <option>Category 3</option>
                                    <option>Category 4</option>
                                    <option>Category 5</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="sub-category3">Sub Category 3</label>
                                <select class="form-control" id="sub-category3">
                                    <option>Category 1</option>
                                    <option>Category 2</option>
                                    <option>Category 3</option>
                                    <option>Category 4</option>
                                    <option>Category 5</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="target-gender">Target Audience :</label>
                                <select class="form-control" id="target-gender">
                                    <option>All Genders</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="target-age">Target Audience Age Group:</label>
                                <select class="form-control" id="target-age">
                                    <option>All Age Groups</option>
                                    <option>10-17</option>
                                    <option>18-22</option>
                                    <option>23-30</option>
                                    <option>31-50</option>
                                    <option>51 and above</option>
                                </select>
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
        name: 'VideoAd',
        data(){

        },
        methods: {
            submit(e) {
                e.preventDefault()
            }
        }
    }
</script>
