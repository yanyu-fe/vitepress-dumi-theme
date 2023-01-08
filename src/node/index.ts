import type { PluginOption } from 'vite'
export const VitePluginVitepressDumi = (): PluginOption => {
  return {
    name: 'vitepress-dumi',
    config: () => ({
      ssr: {
        noExternal: ['vitepress-dumi-theme'],
      },
    }),
  }
}

export default VitePluginVitepressDumi
