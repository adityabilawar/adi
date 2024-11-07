import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// import Home from './components/Home.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

import Blog from './components/Blog.vue'
import Goals from './components/Goals.vue'
import Dashboard from './components/Dashboard.vue'

const routes = [
  { path: '/', redirect: '/dashboard' },
  { path: '/dashboard', component: Dashboard },
  { path: '/blog', component: Blog },
  { path: '/goals', component: Goals }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
