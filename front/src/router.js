import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from "./components/Login"
import Chat from "./components/Chat"

Vue.use(VueRouter);

const routes = [
	{path: "/", component: Login},
	{path: "/chat", component: Chat}
]

export default new VueRouter({
	mode: 'history',
	routes: routes
});
