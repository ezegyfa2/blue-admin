<script>
    import IconLink from '../../../../helper-vue-components/src/IconLinks/IconWithRightText/Component.vue'
    import Togglable from '../../../../helper-vue-components/src/Toggle/Togglable.vue'

    export default {
        mixins: [
            IconLink,
            Togglable
        ],
        props: {
            added_classes: {
                type: Object,
                default () {
                    return{
                        'root': [
                            'sidebar-brand',
                            'justify-content-center'
                        ],
                        '.content': [
                            'sidebar-brand-text',
                            'mx-3'
                        ],
                        'i': [
                            'sidebar-brand-icon',
                            'rotate-n-15'
                        ]
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>