<script>
    import IconLink from './../../../../helper-vue-components/src/IconLinks/IconLink/Component.vue'

    export default {
        mixins: [
            IconLink
        ],
        props: {
            added_classes: {
                type: Object,
                default () {
                    return{
                        root: [
                            'btn',
                            'btn-green'
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
