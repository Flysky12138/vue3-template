import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import tseslint from 'typescript-eslint'

// https://eslint.org/docs/latest/rules
const eslintRules = {
  // 要求使用箭头函数进行回调
  'prefer-arrow-callback': 'error',
  // 禁止导出指定名称
  'no-restricted-exports': [
    'error',
    {
      restrictDefaultExports: {
        direct: true // 限制 export default 声明
      }
    }
  ],
  // import 之间不允许有空行，之后必须有空行
  'padding-line-between-statements': ['error', { blankLine: 'always', prev: 'import', next: '*' }, { blankLine: 'never', prev: 'import', next: 'import' }]
}

// https://typescript-eslint.io/rules/
const tseslintRules = {
  // 禁用 var
  'no-var': 'error',
  // 禁用 any
  '@typescript-eslint/no-explicit-any': 'error'
}

// https://eslint.vuejs.org/rules/
const vueRules = {
  // 没有内容的元素自动关闭
  'vue/html-self-closing': ['error', { html: { void: 'always', normal: 'always', component: 'always' }, svg: 'always', math: 'always' }],
  // 限制每个块的最大行数
  'vue/max-lines-per-block': ['error', { template: 300, script: 500, style: 100, skipBlankLines: true }],
  // 强制使用 <script setup> 风格
  'vue/component-api-style': ['error', ['script-setup']],
  // 强制使用 defineEmits v3.3风格
  'vue/define-emits-declaration': ['error', 'type-literal'],
  // 强制编译器宏顺序
  'vue/define-macros-order': ['error', { order: ['defineOptions', 'defineModel', 'defineProps', 'defineEmits', 'defineSlots'], defineExposeLast: true }],
  // 指定宏变量名
  'vue/require-macro-variable-name': ['error', { defineProps: 'props', defineEmits: 'emit', defineSlots: 'slots', useSlots: 'slots', useAttrs: 'attrs' }],
  // ref,shallowRef 必须具备类型
  'vue/require-typed-ref': ['error'],
  // v-for 使用 in，禁止使用 of
  'vue/v-for-delimiter-style': ['error', 'in'],
  // 禁止使用静态的内联 style 属性
  'vue/no-static-inline-styles': ['error'],
  // 在 template,script,style 代码块之间添加一个空行
  'vue/padding-line-between-blocks': ['error', 'always'],
  // 禁止所有标签之间有空行
  'vue/padding-line-between-tags': ['error', [{ blankLine: 'never', prev: '*', next: '*' }]],
  // 取消组件名称始终由多个单词组成的限制
  'vue/multi-word-component-names': 'off'
}

export default tseslint.config(
  // https://typescript-eslint.io/users/configs/#projects-without-type-checking
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  // https://eslint.vuejs.org/user-guide/#configuration-eslint-config-js
  ...pluginVue.configs['flat/recommended'],
  // 关闭与 Prettier 冲突的 ESLint 规则
  // https://github.com/prettier/eslint-plugin-prettier?tab=readme-ov-file#configuration-new-eslintconfigjs
  eslintPluginPrettierRecommended,
  // 自定义规则
  {
    ignores: ['*.config.*'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parserOptions: {
        parser: tseslint.parser,
        ecmaVersion: 2020,
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    rules: {
      ...eslintRules,
      ...tseslintRules,
      ...vueRules
    }
  }
)
