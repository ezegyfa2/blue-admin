<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        props: {
            sidebar_section: {
                type: Object
            },
            content_section: {
                type: Object
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "Style.less";
</style>