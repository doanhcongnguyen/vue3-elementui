import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'

NProgress.configure({ showSpinner: false })

router.beforeEach((to, from, next) => {
  NProgress.start()
  const hasToken = getToken()
  if (hasToken) {
    loginedUser(to, next)
  } else {
    notLogined(to, next)
  }
})

function loginedUser(to, next) {
  if (to.path === '/login') {
    next({ path: '/' })
  } else {
    next()
  }
}

function notLogined(to, next) {
  const whiteList = ['/login']
  if (whiteList.indexOf(to.path) !== -1) {
    next()
  } else {
    next(`/login?redirect=${to.path}`)
  }
}

router.afterEach(() => {
  NProgress.done()
})
