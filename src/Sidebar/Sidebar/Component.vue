<template lang="pug">
    include Template.pug
</template>

<script>
    import Toggler from '../../../../helper-vue-components/src/Toggle/Toggler.vue'
    import Togglable from '../../../../helper-vue-components/src/Toggle/Togglable.vue'
    import DeepData from '../../../../helper-vue-components/src/DeepData.vue'
    import ClassAdder from '../../../../helper-vue-components/src/ClassAdder.vue'
    import DataTransmitting from '../../../../helper-vue-components/src/DataTransmitting.vue'

    export default {
        mixins: [
            Toggler,
            Togglable,
            DeepData,
            ClassAdder,
            DataTransmitting
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
                dataTransmits: {
                    'toggled': 'isToggled',
                    'brandSection': 'brand_section',
                    'navigationLinkGroupSections': 'navigation_link_group_sections'
                },
                brandSection: null,
                navigationLinkGroupSections: [],
                deepProperties: {
                    'toggled': [
                        'brandSection',
                        'navigationLinkGroupSections'
                    ]
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>