<template lang="pug">
    include Template.pug
</template>

<script>
    import DropdownNavigationLink from '../../../../../../helper-vue-components/src/NavigationBar/NavigationLinks/DropdownNavigationLink/DropdownNavigationLink.vue'

    export default {
        mixins: [
            DropdownNavigationLink,
        ],
        props: {
            image_url: {
                type: String
            },
            title: {
                type: String
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
