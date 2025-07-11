import { DefaultTheme } from 'vitepress'

export default {
    themeConfig: {
        i18nRouting: true,
        nav: [
            { text: '主页', link: '/' },
            {
                text: '了解我们',
                items: [
                    { text: '组织介绍', link: '/server/introduction' },
                    { text: '组织政策', link: '/server/rule' },
                    { text: '组织成员', link: '/server/team' }
                ]
            },
            {
                text: '更多信息',
                items: [
                    { text: '特别鸣谢', link: '/info/Thx' }
                ]
            }
        ],
        sidebar: [
            {
                text: '了解我们',
                collapsed: false,
                items: [
                    { text: '组织介绍', link: '/server/introduction' },
                    { text: '组织政策', link: '/server/rule' },
                    { text: '组织成员', link: '/server/team' },
                    { text: '加入我们', link: '/server/join' }
                ]
            },
            {
                text: '拾色世界：色彩的残党',
                collapsed: false,
                items: [
                    { text: '基础设定及世界观', link: '/server/CosPlay/docs/Color-Picking-Adventure-IF-Worldview' },
                    { text: '人物设定', link: '/server/CosPlay/docs/OC-Or-Coser' },
                    { text:'剧情',
                    items: [
                        { text: '序章', link: '/server/CosPlay/docs/Color-Picking-Adventure-IF-Preface' }
                    ]
                    },
                    { text:'其他资料',
                        items:[
                            {text: '实验记录 1',link: '/server/CosPlay/docs/other/ExperimentLog-One'}
                        ]
                    },
                    { text:'野史',
                        items:[
                            {text: '野史 1',link: '/server/CosPlay/docs/UnofficialHistory/UnofficialHistory-One'}
                        ]

                    }
                ]
            },
            {
                text: '更多信息',
                collapsed: false,
                items: [
                    { text: '特别鸣谢', link: '/info/Thx' }
                ]
            }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/LorienYang/sakura.github.io' }
        ],
        logo: '/Logo.svg',
        footer: {
            message: 'Powered by <a href="https://github.com/vuejs/vitepress">VitePress</a>.',
            copyright: 'Copyright © 2025 樱花庄 All rights reserved.<br>V1.3.0'
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
            quote: '哪怕迷失方向，也要在迷途中前行。',
            linkLabel: '前往首页',
            linkText: '带我回首页'
        },
        lastUpdated: {
            text: '最后更新于'
        },
        editLink: {
            pattern: 'https://github.com/LorienYang/sakura.github.io/edit/main/docs/:path',
            text: '在 GitHub 上编辑此页面'
        },
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '投掷闪光弹',
        darkModeSwitchTitle: '天黑了，星闪烁，大海静悄悄',
        skipToContentLabel: '跳转到内容'
    }
} satisfies { themeConfig: DefaultTheme.Config }
