import { defineConfig } from 'vitepress'

export default defineConfig({

  lang: 'zh-cn',
  head: [['link', { rel: 'icon', href: '../resource/img/sakura.png' }]],
  title: "樱花庄",
  description: "欢迎来到樱花庄档案库",
  themeConfig: {
    logo:'../resource/img/sakura.png',
    nav: [
      { text: '主页', link: '/' },
      { text: '了解我们', link: '/server/introduction' },
      { text: '更多信息', link: '/info/Thx' },
      { text: '开发文档', link: '/dev/markdown-examples' },
    ],
    sidebar: [
      {
        text: '了解我们',
        items:[
          {text: '组织介绍', link: '/server/introduction'},
          {text: '组织政策', link: '/server/rule'},
          {text: '组织成员', link: '/server/team'},
        ]
      },
      {
        text: '更多信息',
        items:[
            {text: '特别鸣谢', link: '/info/Thx'},
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/dev/markdown-examples' },
          { text: 'Runtime API Examples', link: '/dev/api-examples' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer:{
      copyright: 'Copyright © 2025 樱花庄 All rights reserved.<br>V1.1.0',
    },

  }
})
