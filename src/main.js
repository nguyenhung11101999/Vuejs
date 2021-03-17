import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import CustomerList from './components/views/dictionary/customers/CustomerList'
import EmployeeList from './components/views/dictionary/employees/EmployeeList'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/Customers', component: CustomerList },
  { path: '/Employees', component: EmployeeList }
]
const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
