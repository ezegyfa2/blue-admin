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
            collapsed_title: {
                type: String
            },
            icon_class: {
                type: String
            },
            collapsed_links: {
                type: Array
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>