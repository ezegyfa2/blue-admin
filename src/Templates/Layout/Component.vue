<script>
    import Template from '../../../../helper-vue-components/src/Template/Component.vue'

    export default {
        mixins: [
            Template
        ],
        data() {
            return {
                templates: {
                    layout: require('./layout').default,
                    navigationBar: require('./NavigationBar/navigationBar').default,
                    notificationLink: require('./NavigationBar/notificationsLink').default,
                    sidebar: require('./sidebar').default,
                }
            }
        }
    }
</script>
