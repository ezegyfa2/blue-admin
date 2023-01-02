<script>
    import Layout from '../Layout/Component.vue'

    export default {
        mixins: [
            Layout
        ],
        data() {
            return {
                mainTemplatePath: 'edit',
                templates: {
                    edit: require('./edit').default,
                }
            }
        }
    }
</script>
