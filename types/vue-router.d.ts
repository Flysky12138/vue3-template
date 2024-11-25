import { routes } from '@/plugins/router'

declare module 'vue-router' {
  interface RouteMeta {
    /** 切换动画 */
    transition?: 'slide-right' | 'slide-left'
    /**
     * 离开当前页面，进入的下个页面不需要动画
     * @param path 定义路由的 path 模板或页面 `route.path`
     * @example
     * /work/process/:id
     * /work/process/1
     */
    disabledTransitionNextPaths?: string[]
    /**
     * 缓存页面
     * @default false
     */
    keepAlive?: boolean
    /** 标题 */
    title?: string
  }

  /** 提取路由路径 */
  type ExtractPaths<T> = T extends { path: infer P; children?: infer C }
    ? P extends string
      ? C extends RouteRecordRaw[]
        ? P | `${P extends '/' ? '' : P}/${ExtractPaths<C[number]>}`
        : P
      : never
    : never

  /** 路由路径 */
  type RoutePaths = (ExtractPaths<(typeof routes)[number]> & {}) | (string & {})

  interface RouterLinkProps {
    to: RoutePaths
  }

  interface Router {
    push(to: RoutePaths): Promise<NavigationFailure | void | undefined>
    replace(to: RoutePaths): Promise<NavigationFailure | void | undefined>
  }
}
