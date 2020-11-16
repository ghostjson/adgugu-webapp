<template>
    <div class="overlay" v-if="show">


        <div class="m">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">{{ title }}</h5>
                        <button v-on:click="close" type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .overlay{
        position: fixed;
        background-color: rgba(0, 0, 0, 0.83);
        z-index: 100;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .m {
        width: 600px;
        z-index: 4;
    }
</style>

<script>
    export default {
        name: 'Modal',
        props: ['title', 'show'],
        methods: {
            close(){
                this.$emit('close', false);
            }
        },
    }
</script>
