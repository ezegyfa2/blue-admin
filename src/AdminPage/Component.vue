<template lang="pug">
    include Template.pug
</template>

<script>
    import SessionMessages from './../../../helper-vue-components/src/SessionMessages/SessionMessages.vue'

    export default {
        mixins: [
            SessionMessages,
        ],
        props: {
            sidebar_section: {
                type: Object
            },
            navigation_bar_section: {
                type: Object
            },
            content_sections: {
                type: Array
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>