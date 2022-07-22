export default {
	install(Vue) {
		require('text-contents-vue-components').default.install(Vue);
		require('helper-vue-components').default.install(Vue);

		Vue.component('blue-admin-page', require('./AdminPage/Component.vue').default);
		Vue.component('blue-admin-centered-content-page', require('./CenteredContentPage/Component.vue').default);

		Vue.component('blue-admin-form-with-image', require('./Forms/FormWithImage/Component.vue').default);
		Vue.component('blue-admin-input', require('./Forms/Items/Input/Component.vue').default);
		Vue.component('blue-admin-checkbox', require('./Forms/Items/Checkbox/Component.vue').default);
		Vue.component('blue-admin-facebook-button', require('./Forms/Items/Buttons/FacebookButton/Component.vue').default);
		Vue.component('blue-admin-google-button', require('./Forms/Items/Buttons/GoogleButton/Component.vue').default);
		Vue.component('blue-admin-primary-button', require('./Forms/Items/Buttons/PrimaryButton/Component.vue').default);
		Vue.component('blue-admin-centered-link', require('./Forms/Items/CenteredLink/Component.vue').default);

		Vue.component('blue-admin-sidebar', require('./Sidebar/Sidebar/Component.vue').default);
		Vue.component('blue-admin-sidebar-brand-icon', require('./Sidebar/BrandIcon/Component.vue').default);
		Vue.component('blue-admin-sidebar-button', require('./Sidebar/Button/Component.vue').default);
		Vue.component('blue-admin-sidebar-navigation-link', require('./Sidebar/NavigationLink/Component.vue').default);
		Vue.component('blue-admin-sidebar-collapse-navigation-link', require('./Sidebar/CollapseNavigationLink/Component.vue').default);
		Vue.component('blue-admin-sidebar-navigation-link-group', require('./Sidebar/NavigationLinkGroup/Component.vue').default);
		
		Vue.component('blue-admin-navigation-bar', require('./NavigationBar/NavigationBar/Component.vue').default);
		Vue.component('blue-admin-navigation-search', require('./NavigationBar/SearchForm/Component.vue').default);
		Vue.component('blue-admin-list-dropdown', require('./NavigationBar/NavigationLinks/DropdownNavigationLink/Dropdowns/ListDropdown/Component.vue').default);
		Vue.component('blue-admin-list-dropdown-with-edges', require('./NavigationBar/NavigationLinks/DropdownNavigationLink/Dropdowns/ListDropdownWithEdges/Component.vue').default);
		Vue.component('blue-admin-icon-dropdown-item', require('./NavigationBar/NavigationLinks/DropdownNavigationLink/Dropdowns/Items/ItemWithIcon/Component.vue').default);
		Vue.component('blue-admin-message-dropdown-item', require('./NavigationBar/NavigationLinks/DropdownNavigationLink/Dropdowns/Items/MessageItem/Component.vue').default);
		Vue.component('blue-admin-link-dropdown-item', require('./NavigationBar/NavigationLinks/DropdownNavigationLink/Dropdowns/Items/LinkItem/Component.vue').default);
		Vue.component('blue-admin-search-dropdown-item', require('./NavigationBar/NavigationLinks/DropdownNavigationLink/Dropdowns/Items/SearchForm/Component.vue').default);
		Vue.component('blue-admin-dropdown-navigation-link', require('./NavigationBar/NavigationLinks/DropdownNavigationLink/NavigationLink/Component.vue').default);
		Vue.component('blue-admin-dropdown-image-navigation-link', require('./NavigationBar/NavigationLinks/DropdownNavigationLink/ImageNavigationLink/Component.vue').default);
	
		Vue.component('blue-admin-table', require('./Table/Table/Component.vue').default);
		Vue.component('blue-admin-table-select', require('./Table/Select/Component.vue').default);
	}
};