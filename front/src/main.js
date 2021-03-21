import 'babel-polyfill';
import Vue from 'vue';
import router from './router';
import store from './store';
import App from "./App";
import Fragment from 'vue-fragment'
import vuetify from "./plugin/vuetify"

const app = new Vue({
	router,
	store,
	vuetify,
	el: "#app",
	render: h => h(App)
});

Vue.use(Fragment.Plugin)
