// .vitepress/config.mts
import { defineConfig } from 'vitepress'
import timeline from 'vitepress-markdown-timeline'

export default defineConfig(async () => {
  const zh = await import('../zh/config.mts')
  const mars = await import('../mars/config.mts')
  const lzh = await import('../lzh/config.mts')

  return {
    lastUpdated: true,
    lang: 'zh-Hans',
    title: '樱花庄',
    description: '欢迎来到樱花庄档案库',
    cleanUrls: true,
    head: [['link', { rel: 'icon', href: '/logo.svg' }]],
    markdown: {
      config: (md) => {
        md.use(timeline)
      }
    },
    sitemap: {
      hostname: 'https://sakura.fun',
      transformItems(items) {
        return items
            .filter(item => !item.url.includes('migration'))
            .map(item => ({
              url: item.url,
              lastmod: item.lastUpdated || new Date().toISOString(),
            }))
      }
    }
    ,
    locales: {
      root: {
        label: '简体中文',
        lang: 'zh-Hans',
        ...zh.default
      },
      mars: {
        label: '焱暒妏',
        lang: 'zh-Hans',
        ...mars.default
      },
      lzh: {
        label: '文言',
        lang: 'zh-Hans',
        ...lzh.default
      }
    },
    rewrites: {
      'zh/:rest*': ':rest*'
    },
  }
})
