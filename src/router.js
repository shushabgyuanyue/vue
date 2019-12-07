import Vue from 'vue'
import Router from 'vue-router'

import index from './views/index'
import login from './views/login'
import user from './views/user'
import about from './views/about'
import search from './views/search'
import recommend from './views/recommend'
import project from './views/project'
import activity from './views/activity'
import team from './views/team'
import details from './views/details'


Vue.use(Router)

export default new Router({
  routes: [{
      path: "/index",
      name: "index",
      component: index,
      children: [{
          path: "/recommend",
          name: "recommend",
          component: recommend
        },
        {
          path: "/activity",
          name: "activity",
          component: activity
        },
        {
          path: "/team",
          name: "team",
          component: team
        },
        {
          path: "/project",
          name: "project",
          component: project
        },
        {
          redirect: '/recommend',
          path: '/'
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: login
    },
    {
      path: "/user",
      name: "user",
      component: user
    },
    {
      path: "/about",
      name: "about",
      component: about
    },
    {
      path: "/search",
      name: "search",
      component: search
    },
    {
      path: "/details",
      name: "details",
      component: details
    },
    {
      redirect: '/index',
      path: '/'
    },
  ],
})