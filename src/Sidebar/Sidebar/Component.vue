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
                deepProperties: {
                    'toggled': [
                        'brand_section',
                        'navigation_link_group_sections',
                    ]
                }
            }
        },
        watch: {
            toggled: {
                immediate: true,
                handler(newToggled) {
                    this.brand_section.data.toggled = newToggled
                    this.brand_section = this.brand_section
                    this.navigation_link_group_sections.forEach(navigationLinkGroupSection => {
                        navigationLinkGroupSection.data.toggled = newToggled
                    })
                    this.navigation_link_group_sections = this.navigation_link_group_sections
                },
                flush: 'sync'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
