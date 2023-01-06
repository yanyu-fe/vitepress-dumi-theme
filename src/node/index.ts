import type { Plugin } from 'vite'
export const VitePluginVitepressDumi = (): Plugin => {
  return {
    name: 'vitepress-dumi',
    config: () => ({
      ssr: {
        external: ['vitepress-dumi-theme'],
      },
    }),
  }
}

export default VitePluginVitepressDumi
