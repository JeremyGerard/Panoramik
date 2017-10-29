// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(VueRouter)
Vue.use(BootstrapVue)

//Components
import Home from './components/HelloWorld'
import About from './components/About'
import Portfolio from './components/Portfolio'

//Define routes
const routes = [
{ path: '/', component: Home },
{ path: '/about', component: About },
    {path: '/portfolio', component: Portfolio}
]

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    routes, // short for routes: routes
    mode: 'history'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  //pass in the router to the Vue instance
  router
}).$mount('#app')//mount the router on the app