import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			name: "DashBoard",
			component: require("@/components/DashBoard").default
		},
		{
			path: "*",
			redirect: "/"
		}
	]
});
