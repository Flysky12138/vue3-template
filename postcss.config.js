/** @type {import('postcss').ProcessOptions} */
export default {
  // 插件执行顺序有要求的，从上至下
  plugins: {
    'tailwindcss/nesting': 'postcss-nested',
    tailwindcss: {},
    autoprefixer: {}
  }
}
