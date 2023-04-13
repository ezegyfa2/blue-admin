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
            ClassAdder
        ],
        props: {
            brand_section: {
                type: Object
            },
            navigation_link_group_sections: {
                type: Array
            },
            toggled: {
                type: Boolean,
                default() {
                    return false
                }
            }
        },
        watch: {
            toggled: {
                immediate: true,
                handler(newToggled) {
                    this.brand_section.data.toggled = newToggled
                    this.navigation_link_group_sections.forEach((navigationLinkSection) => {
                        navigationLinkSection.data.toggled = newToggled
                    })
                    if (newToggled) {
                        this.addClass('root', 'toggled')
                    }
                    else {
                        this.removeClass('root', 'toggled')
                    }
                },
                fulsh: 'sync'
            }
        },

        mounted() {
            this.initToggler()
        },
        updated() {
            this.$nextTick(function () {
                this.initToggler()
            })
        },
        methods: {
            initToggler() {
                if (!this.isToggleEventRegistered()) {
                    $(this.$refs.toggler).on('click', this.toggle)
                }
            },
            toggle() {
                //$("body").toggleClass("sidebar-toggled")
                console.log('toggling')
                this.$emit('update:toggled', !this.toggled)
                this.$emit('update:asd', 'sdf')
                //$(this.$refs.sidebar).toggleClass("toggled")
            },
            isToggleEventRegistered() {
                let registeredEventsOnToggler = jQuery._data($(this.$refs.toggler)[0], "events")
                if (registeredEventsOnToggler && 'click' in registeredEventsOnToggler) {
                    let self = this
                    let registeredToggleEvents = registeredEventsOnToggler.click.filter(function (event) {
                        return event.origType == 'click' && event.handler == self.toggle
                    })
                    return registeredToggleEvents.length > 0
                }
                else {
                    return false
                }
            }
        },
        computed: {
            toggledClass() {
                if (this.toggled) {
                    return 'toggled'
                }
                else {
                    return ''
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>