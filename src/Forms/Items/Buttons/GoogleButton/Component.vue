<script>
    import IconText from '../../../../../../helper-vue-components/src/IconLinks/IconLink/Component.vue'

    export default {
        mixins: [
            IconText,
        ],
        props: {
            icon_class: {
                type: String,
                default: 'fab fa-google fa-fw'
            }
        },
        data() {
            return {
                addedClasses: {
                    root: [
                        'btn',
                        'btn-google',
                        'btn-user',
                        'btn-block',
                    ]
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
