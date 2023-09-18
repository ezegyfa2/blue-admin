export default {
    install(Vue) {
        registerVueComponent(
            'blue-admin-navigation-bar',
            require('./Component.vue').default,
            Vue
        );
    }
}