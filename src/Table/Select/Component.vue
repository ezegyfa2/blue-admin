<script>
    import Select from '../../../../helper-vue-components/src/Form/Select/Component.vue'
    import ClassAdder from '../../../../helper-vue-components/src/ClassAdder.vue'

    export default {
        mixins: [
            Select,
            ClassAdder,
        ],
        data() {
            return {
                addedClasses: {
                    root: [
                        'custom-select',
                        'custom-select-sm',
                        'form-control',
                        'form-control-sm',
                    ]
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>