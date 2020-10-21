import { createRouter, createWebHistory } from 'vue-router'
import delay from '@/utils/delay'

import Home from '../pages/Home.vue'
import Foo from '../pages/Foo.vue'
import Bar from '../pages/Bar.vue'

export const routerHistory = createWebHistory()

export const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/foo',
      component: Foo
    },
    {
      path: '/bar',
      component: Bar
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const isLoggedIn = await auth.checkAuth()
  if (!isLoggedIn) {
    next(false)
    auth.login()
  } else {
    next()
  }
})

router.beforeEach(async (to, from, next) => {
  console.log(`Guard from ${from.fullPath} to ${to.fullPath}`)
  if (to.params.id === 'no-name') {
    return next(false)
  }

  const time = Number(to.query.delay)
  if (time > 0) {
    console.log('⏳ waiting ' + time + 'ms')
    to.meta.waitedFor = time
    await delay(time)
  }
  next()
})

router.beforeEach((to, from, next) => {
  console.log(to)
  console.log('second guard: query redirecting to = ', to.query.to)
  if (to.query.to) {
    next(to.query.to as string)
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  console.log(
    `After guard: from ${from.fullPath} to ${
      to.fullPath
    } | location = ${location.href.replace(location.origin, '')}`
  )
})

const dirLog = {
  '': '？',
  back: '⏪',
  forward: '⏩'
}

routerHistory.listen((to, from, info) => {
  console.log('====')
  console.log(`${dirLog[info.direction]} as a ${info.type}`)
})
