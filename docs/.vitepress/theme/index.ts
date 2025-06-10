// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import "vitepress-markdown-timeline/dist/theme/index.css";
import CopyRight from './components/CopyRight.vue';
import NonCopyRight from './components/NonCopyRight.vue';


export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
    })
  },
  enhanceApp({ app, router, siteData }) {
      app.component('CopyRight', CopyRight)
      app.component('NonCopyRight', NonCopyRight)
  }
} satisfies Theme
