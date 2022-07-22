<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        props: {
            type: {
                type: String,
                default: 'text'
            },
            placeholder: {
                type: String
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>