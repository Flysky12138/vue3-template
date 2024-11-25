/** 以 `T` 开头的字符串 */
type StartsWith<T extends string> = `${T}${string}`

/** 以 `T` 结尾的字符串 */
type EndsWith<T extends string> = `${string}${T}`

/** 移除对象的键只读限制 */
type Writable<T> = {
  -readonly [P in keyof T]: T[P]
}

/** 移除对象值的可选 */
type MakeRequired<T> = {
  [K in keyof T]-?: T[K]
}

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never }
/** 对象进行异或 */
type XOR<T, U> = T | U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U

/** 解包 `Promise` */
type UnwrapPromise<T> = T extends Promise<infer D> ? D : T

/** 深度可选 */
type DeepPartial<T> = { [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P] }
