<template lang="pug">
    include Template.pug
</template>

<script>
    import IconLink from '../../../../helper-vue-components/src/IconLinks/IconWithRightText/Component.vue'
    import Togglable from '../../../../helper-vue-components/src/Toggle/Togglable.vue'

    export default {
        mixins: [
            IconLink,
            Togglable
        ]
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>