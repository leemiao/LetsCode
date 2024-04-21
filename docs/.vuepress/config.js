import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),

//   base: '/LetsCode/',

  lang: 'zh-CN',
  title: 'LetsCode',
  description: 'LetsLearning下LetsCode文档网站',

  theme: defaultTheme({
    logo: '/images/logo.png',
    navbar: [
        {
            text: '🏠️首页',
            link: '/',
        },
        {
            text: '🧑🏻‍💻C++',
            children: [
                {
                    text: 'C++算法',
                    link: '/C++/C++算法/readme.md',
                }
            ],
        },
        {
            text: 'bilibili',
            link: 'https://space.bilibili.com/25488437',
        },
        {
            text: '🤙AboutMe',
            link: '/about/aboutme.md',
        },
        
    ]
  }),

})
