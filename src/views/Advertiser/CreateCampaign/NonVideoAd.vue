<template>
    <div class="container mt-4">
        <div class="card">
            <div class="card-header">
                <h2>Non Video Ad</h2>
            </div>
            <div class="card-body text-left">
                <div class="row">
                    <div class="col">
                        <form @submit="submit">
                            <h4>Brand Information</h4>
                            <div class="form-group">
                                <label for="link">Your online non-video link :</label>
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
                                <h4>Target Audience Age Group:</h4>
<!--                                <select class="form-control" id="target-age">-->
<!--                                    <option>All Age Groups</option>-->
<!--                                    <option>10-17</option>-->
<!--                                    <option>18-22</option>-->
<!--                                    <option>23-30</option>-->
<!--                                    <option>31-50</option>-->
<!--                                    <option>51 and above</option>-->
<!--                                </select>-->
                                <div>
                                    <label for="from-age">From Age:</label> <input min="1" max="100" v-model="form.from_age" class="form-control" id="from-age" type="number" >
                                    <label for="to-age">To Age:</label> <input min="1" max="100" v-model="form.to_age" class="form-control" id="to-age" type="number">
                                </div>

                            </div>
                            <h4>Product Information</h4>
                            <div class="form-group">
                                <label for="regular_price">Regular Price: </label>
                                <input id="regular_price" v-model="form.regular_price" class="form-control" type="number">
                            </div>
                            <div class="form-group">
                                <label for="discount">Discount: </label>
                                <input id="discount" v-model="form.discount" class="form-control" type="number">
                            </div>
                            <div class="form-group">
                                <label for="sale_price">Discounted Sale Price: </label>
                                <input readonly id="sale_price" v-model="form.sale_price" class="form-control" type="number">
                            </div>
                            <div class="form-group">
                                <label for="coupon_code">Discount Coupon Code:
                                    <button @click="generateCoupon" type="button" class="btn btn-dark btn-sm">Generate</button>
                                </label>
                                <input id="coupon_code" v-model="form.coupon_code" class="form-control" type="text">
                            </div>
                            <div class="form-group">
                                <label for="description">Description: </label>
                                <textarea id="description" class="form-control"></textarea>
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
        name: 'NonVideoAd',
        data(){
            return {
                form: {
                    from_age: 21,
                    to_age: 51,
                    regular_price: 100,
                    discount: 20,
                    sale_price: 80,
                    coupon_code: ''
                }
            }
        },
        methods: {
            submit(e){ e.preventDefault()
                this.$router.push('/advertiser/ad-campaigns/budget/')
            },
            generateCoupon(){
                let coupon_length = 8;
                let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789abcdefghijklmnopqrstuvwxyz'
                let coupon = ''

                for (let i=0;i<coupon_length;i++){
                    let rand = Math.floor((Math.random() * characters.length));
                    coupon += characters[rand]
                }
                this.form.coupon_code = coupon
            },
            computeSalePrice(){
                this.form.sale_price = (this.form.regular_price * (1 - (this.form.discount/100))).toFixed(2)
            }
        },
        watch: {
            'form.regular_price': function () {
                this.computeSalePrice()
            },
            'form.discount': function () {
                this.computeSalePrice()
            }
        }
    }
</script>
