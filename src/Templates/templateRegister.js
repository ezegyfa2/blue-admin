export default {
    install() {
        if (!window.templates) {
            window.templates = {}
        }
        window.templates.layout = require('./Layout/layout').default
        window.templates.navigationBar = require('./Layout/NavigationBar/navigationBar').default
        window.templates.notificationLink = require('./Layout/NavigationBar/notificationsLink').default
        window.templates.sidebar = require('./Layout/sidebar').default
        window.templates.edit = require('./Edit/edit').default
    }
}