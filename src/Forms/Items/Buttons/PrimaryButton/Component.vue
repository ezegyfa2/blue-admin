<script>
    import IconText from '../../../../../../helper-vue-components/src/IconLinks/IconLink/Component.vue'

    export default {
        mixins: [
            IconText,
        ],
        props: {
            added_classes: {
                type: Object,
                default () {
                    return{
                        root: [
                            'btn',
                            'btn-primary',
                            'btn-user',
                            'btn-block',
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
