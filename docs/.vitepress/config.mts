// .vitepress/config.mts
import { defineConfig } from 'vitepress'
import timeline from 'vitepress-markdown-timeline'
import UnoCSS from 'unocss/vite'
import { presetIcons } from '@unocss/preset-icons'

export default defineConfig(async () => {
  const zh = await import('../zh/config.mts')
  const mars = await import('../mars/config.mts')
  const lzh = await import('../lzh/config.mts')

  //引入谷歌分析GID
  const GA_MEASUREMENT_ID = 'G-KK8QSKCV0Q';

  //自定义配置
  return {
    lastUpdated: true,
    lang: 'zh-Hans',
    title: '樱花庄',
    description: '欢迎来到樱花庄档案库',
    cleanUrls: true,
    outline:[1,2,3,4],
    head: [
      ['link', { rel: 'icon', href: '/logo-mini.svg' }],
      // Google Analytics 4 (GA4) 代码
      ['script', { async: true, src: `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}` }],
      ['script', {}, `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}');
      `]
    ],
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
    },
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
    vite: {
      plugins: [UnoCSS({
            presets: [
              presetIcons(), // 启用图标预设
            ],
          }
      )]
    }
  }
})