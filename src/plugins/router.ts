import { createRouter, createWebHashHistory, ExtractPaths, RouteRecordRaw } from 'vue-router'

const routes = [{ path: '/', component: () => import('@/views/home/index.vue') }] as const satisfies RouteRecordRaw[]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 路由切换动画
router.afterEach((to, from) => {
  // 动画相关
  if (from.matched.length == 0) return // 排除第一次进入动画
  const paths = new Set(from.meta.disabledTransitionNextPaths)
  if (to.matched.some(it => paths.has(it.path)) || paths.has(to.path)) return
  const toDepth = to.path.split('/').filter(it => it).length
  const fromDepth = from.path.split('/').filter(it => it).length
  to.meta.transition = toDepth > fromDepth ? 'slide-right' : 'slide-left'
})

/** 路由路径 */
export type RoutePaths = (ExtractPaths<(typeof routes)[number]> & {}) | (string & {})
