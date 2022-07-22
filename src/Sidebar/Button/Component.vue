<template lang="pug">
    include Template.pug
</template>

<script>
    import Togglable from '../../../../helper-vue-components/src/Toggle/Togglable.vue'

    export default {
        mixins: [
            Togglable
        ],
        props: {
            title: {
                type: String
            },
            content: {
                type: String
            },
            image_url: {
                type: String
            },
            image_alt: {
                type: String
            },
            url: {
                type: String
            },
            button_title: {
                type: String
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>