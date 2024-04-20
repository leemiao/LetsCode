import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),

  base: '/LetsCode/',

  lang: 'zh-CN',
  title: 'LetsCode',
  description: 'LetsLearning下LetsCode文档网站',

  theme: defaultTheme({
    logo: '/images/logo.png',
    navbar: [
        {
            text: '首页',
            link: '/',
        },
        {
            text: 'AboutMe',
            link: '/about/aboutme.md',
        }
    ]
  }),

})
