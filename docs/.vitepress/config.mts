import { defineConfig } from 'vitepress'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import { set_sidebar } from "./utils/auto-gen-sidebar.mjs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:"/ViteDocs/",
  title: "学习笔记",
  description: "记录一些学习过程中的笔记",
  themeConfig: {
    aside: "left", // 设置右侧侧边栏在左侧显示
    // https://vitepress.dev/reference/default-theme-config
    outlineTitle:"目录",
    outline:[2,6],
    nav: [
      { text: '主页', link: '/' },
      { text: 'Premiere', link: '/premiere' },
      { text: 'cmd', link: '/cmd' },
      { text: '小软件', link:'/小软件/目录'}
    ],

    // sidebar: { "docs/premiere": set_sidebar("docs/premiere") },
    // sidebar: [
    //   {
    //     text: 'Premiere',
    //     items: [
    //       { text: '调整视频速度不变调', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fgmiia/ViteDocs' }
    ],
   // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },    
  },
  markdown:{
    codeTransformers: [
      transformerTwoslash() 
    ]
  }
})
