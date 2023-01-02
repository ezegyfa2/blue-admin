<template lang="pug">
    include Template.pug
</template>

<script>
    import SessionMessageBox from './../../../../helper-vue-components/src/SessionMessages/SessionMessage.vue'

    export default {
        mixins: [
            SessionMessageBox,
        ],
        data() {
            return {
                messageClass: '',
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style";
</style>
