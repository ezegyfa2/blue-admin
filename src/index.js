export default {
	install(Vue) {
		Vue.component('blue-admin-page', require('./AdminPage/Component.vue').default);
	}
};