<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        props: {
            label_content: {
                type: String
            }
        },
        computed: {
            inputId() {
                return 'input' + this._uid
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>