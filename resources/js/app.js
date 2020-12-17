require('./bootstrap');

import router from './router';

import App from './components/App.vue';
import Vue from 'vue';
import '~/plugins'
export default new Vue({
	router,
	render: h => h(App)
});