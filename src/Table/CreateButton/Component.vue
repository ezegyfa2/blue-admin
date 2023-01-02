<script>
    import IconLink from './../../../../helper-vue-components/src/IconLinks/IconLink/Component.vue'

    export default {
        mixins: [
            IconLink
        ],
        data() {
            return {
                addedClasses: {
                    root: [
                        'btn',
                        'btn-success'
                    ]
                }
            }
        }
    }
</script>
