<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        props: {
            navigation_link_sections: {
                type: Array
            },
            left_item_sections: {
                type: Array
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>