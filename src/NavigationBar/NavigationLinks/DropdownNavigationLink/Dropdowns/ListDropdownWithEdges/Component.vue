<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        props: {
            dropdown_link_id: {
                type: String
            },
            header: {
                type: String
            },
            dropdown_item_sections: {
                type: Array
            },
            footer_link: {
                type: Object
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
