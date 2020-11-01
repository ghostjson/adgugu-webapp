<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="alert" :class="typeClass" role="alert">
                {{ content }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AlertBox',
        props: ['content', 'type'],

        computed: {
            typeClass(){
                return this.type !== undefined ? `alert-${this.type}` : 'alert-primary';
            }
        }

    }
</script>
