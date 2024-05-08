import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),

//   base: '/LetsCode/',

  lang: 'zh-CN',
  title: 'LetsCode',
  description: 'LetsLearning频道文档网站',

  theme: defaultTheme({
    logo: '/images/logo.png',
    navbar: [
        {
            text: '🏠️首页',
            link: '/',
        },
        {
            text:'Python',
            children:[
                {
                    text:'Python基础',
                    children:
                    [
                        '/Python/Python基础/readme.md',
                        '/Python/Python基础/00.md',
                        '/Python/Python基础/01.md',
                        '/Python/Python基础/02.md',
                        '/Python/Python基础/03.md'    
                    ]
                }
            ]
        },
        {
            text: '🧑🏻‍💻C++',
            children: [
                {
                    text: 'C++算法',
                    children:
                    [ 
                        '/C-plusplus/Cplusplus算法/readme.md',
                        '/C-plusplus/Cplusplus算法/00.md',
                        '/C-plusplus/Cplusplus算法/01.md'
                    ]
                },
                {
                    text: 'C++核心',
                    children: 
                    [
                        '/C-plusplus/cplusplus编程核心/00.md'
                    ]
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
