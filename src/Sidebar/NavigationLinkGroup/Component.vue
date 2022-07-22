<template lang="pug">
    include Template.pug
</template>

<script>
    import Togglable from '../../../../helper-vue-components/src/Toggle/Togglable.vue'
    import DeepData from '../../../../helper-vue-components/src/DeepData.vue'
    import DataTransmitting from '../../../../helper-vue-components/src/DataTransmitting.vue'

    export default {
        mixins: [
            Togglable,
            DeepData,
            DataTransmitting
        ],
        props: {
            title: {
                type: String
            },
            navigation_link_sections: {
                type: Array
            }
        },
        mounted() {
            this.navigationLinkSections = []
        },
        data() {
            return {
                navigationLinkSections: [],
                dataTransmits: {
                    'navigationLinkSections': 'navigation_link_sections'
                },
                deepProperties: {
                    'toggled': [
                        'navigationLinkSections'
                    ]
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>