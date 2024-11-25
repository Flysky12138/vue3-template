import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes = [{ path: '/', component: () => import('@/views/home/index.vue') }] as const satisfies RouteRecordRaw[]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 记录是否是路由回退
let isRouteBack = false
const routerBack = router.back
router.back = () => {
  isRouteBack = true
  routerBack()
}

router.afterEach((to, from) => {
  // 路由切换动画
  if (from.matched.length == 0) return // 排除第一次进入动画
  const paths = new Set(from.meta.disabledTransitionNextPaths)
  if (to.matched.some(it => paths.has(it.path)) || paths.has(to.path)) return
  to.meta.transition = isRouteBack ? 'slide-left' : 'slide-right'
  isRouteBack = false
})
