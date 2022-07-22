<script>
    import Template from '../../../../helper-vue-components/src/Template/Component.vue'

    export default {
        mixins: [
            Template
        ],
        data() {
            return {
                main_template_path: 'welcome',
                subTemplates: {
                    welcome: require('../welcome').default,
                    contactUs: require('../contactUs').default,
                    footer: require('../footer').default,
                    header: require('../header').default,
                    navbar: require('../Layout/navbar').default,
                    offers: require('../offers').default,
                    services: require('../services').default
                }
            }
        }
    }
</script>
