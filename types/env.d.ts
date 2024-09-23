// https://cn.vitejs.dev/guide/env-and-mode
interface ImportMetaEnv {
  readonly VITE_BASE_URL: StartsWith<'http://' | 'https://'>
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
