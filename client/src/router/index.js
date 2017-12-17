import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Profile from '@/components/user/Profile'
import Login from '@/components/user/authentication/Login'
import Register from '@/components/user/authentication/Register'
import Search from '@/components/Search'
import Company from '@/components/Company'
import Job from '@/components/company/Job'
import JobCreation from '@/components/company/JobCreationForm'
// import BootstrapVue from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)
// Vue.use(BootstrapVue)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/company',
      name: 'Company',
      component: Company
    },
    {
      path: '/company/job/:id',
      props: true,
      name: 'Job',
      component: Job
    },
    {
      path: '/company/createjob',
      name: 'JobCreate',
      component: JobCreation
    }
  ],
  mode: 'history'
})
