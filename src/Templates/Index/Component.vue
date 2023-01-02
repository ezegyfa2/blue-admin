<script>
    import Layout from '../Layout/Component.vue'

    export default {
        mixins: [
            Layout
        ],
        data() {
            return {
                mainTemplatePath: 'index',
                templates: {
                    index: require('./index').default,
                }
            }
        }
    }
</script>
