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
        text: '拾色冒险IF',
        items:[
          {text: '设定及世界观', link: '/server/CosPlay/Color-Picking-Adventure-IF-Worldview'},
        ]
      },
      {
        text: '更多信息',
        items:[
            {text: '特别鸣谢', link: '/info/Thx'},
        ]
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Star-Moon-Night/sakura.github.io' }
    ],
    footer:{
      message: 'Powered by <a href="https://github.com/vuejs/vitepress">Vitepress</a>.',
      copyright: 'Copyright © 2025 樱花庄 All rights reserved.<br>V1.1.0',
    },

  }
})
