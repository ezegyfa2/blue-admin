<template lang="pug">
    include Template.pug
</template>

<script>
    import Toggler from '../../../../helper-vue-components/src/Toggle/Toggler.vue'
    import Togglable from '../../../../helper-vue-components/src/Toggle/Togglable.vue'
    import DeepData from '../../../../helper-vue-components/src/DeepData.vue'
    import ClassAdder from '../../../../helper-vue-components/src/ClassAdder.vue'

    export default {
        mixins: [
            Toggler,
            Togglable,
            DeepData,
            ClassAdder,
        ],
        props: {
            brand_section: {
                type: Object
            },
            navigation_link_group_sections: {
                type: Array
            }
        },
        data() {
            return {
                deepProperties: {
                    'toggled': [
                        'brand_section',
                        'navigation_link_group_sections',
                    ]
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>