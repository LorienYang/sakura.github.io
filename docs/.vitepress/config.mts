import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-Hans',
  head: [['link', { rel: 'icon', href: '../resource/img/sakura.png' }]],
  title: "樱花庄",
  description: "欢迎来到樱花庄档案库",
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '了解我们', link: '/server/introduction' },
      { text: '更多信息', link: '/info/Thx' },
    ],
    sidebar: [
      {
        text: '了解我们',
        collapsed:false,
        items:[
          {text: '组织介绍', link: '/server/introduction'},
          {text: '组织政策', link: '/server/rule'},
          {text: '组织成员', link: '/server/team'},
        ]
      },
      {
        text: '拾色冒险IF',
        collapsed:false,
        items:[
          {text: '设定及世界观', link: '/server/CosPlay/Color-Picking-Adventure-IF-Worldview'},
        ]
      },
      {
        text: '更多信息',
        collapsed:false,
        items:[
            {text: '特别鸣谢', link: '/info/Thx'},
        ]
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Star-Moon-Night/sakura.github.io' }
    ],
    logo:'../resource/img/sakura.png',
    footer:{
      message: 'Powered by <a href="https://github.com/vuejs/vitepress">Vitepress</a>.',
      copyright: 'Copyright © 2025 樱花庄 All rights reserved.<br>V1.1.0',
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      label: '页面导航'
    },
    notFound: {
      title: '页面未找到',
      quote:
          '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
      linkLabel: '前往首页',
      linkText: '带我回首页'
    },
    lastUpdated: {
      text: '最后更新于'
    },
    editLink: {
      pattern: 'https://github.com/Star-Moon-Night/sakura.github.io/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面',
    },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容'
  }
})
