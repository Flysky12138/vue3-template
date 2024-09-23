/** 以 `T` 开头的字符串 */
type StartsWith<T extends string> = `${T}${string}`

/** 以 `T` 结尾的字符串 */
type EndsWith<T extends string> = `${string}${T}`

/** 移除对象的键只读限制 */
type Writable<T> = {
  -readonly [P in keyof T]: T[P]
}
