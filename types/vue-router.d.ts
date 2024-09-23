import { RoutePaths } from '@/plugins/router'

declare module 'vue-router' {
  interface RouteMeta {
    /** 切换动画 */
    transition?: 'slide-right' | 'slide-left'
    /** 离开当前页面，进入的下个页面不需要动画 */
    disabledTransitionNextPaths?: string[]
    /** 标题 */
    title?: string
  }

  interface RouterLinkProps {
    to: RoutePaths
  }

  interface Router {
    push(to: RoutePaths): Promise<NavigationFailure | void | undefined>
    replace(to: RoutePaths): Promise<NavigationFailure | void | undefined>
  }

  /** 提取路由路径 */
  type ExtractPaths<T> = T extends { path: infer P; children?: infer C }
    ? P extends string
      ? C extends RouteRecordRaw[]
        ? P | `${P}/${ExtractPaths<C[number]>}`
        : P
      : never
    : never
}
