import { viteBundler } from '@vuepress/bundler-vite'
import { commentPlugin } from '@vuepress/plugin-comment'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),

//   base: '/LetsCode/',

  lang: 'zh-CN',
  title: 'LetsCode',
  description: 'LetsLearning频道文档网站 | 内容正逐步上传更新中...',

  plugins: [
    commentPlugin({

    })
  ],

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
                },
                {
                    text:'数据科学',
                    children:
                    [
                        '/Python/数据科学/00.md'
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
                        '/C-plusplus/cplusplus编程核心/00.md',
                        '/C-plusplus/cplusplus编程核心/01.md'
                    ]
                }
            ],
        },
        {
            text: '英语学习',
            children:[
                {
                    text: '词汇',
                    children:
                    [
                        '/英语学习/词汇/GSL词汇学习/00.md',
                        '/英语学习/词汇/雅思听力词汇/00.md',
                        '/英语学习/词汇/雅思口语词汇/00.md',
                        '/英语学习/词汇/雅思阅读词汇/00.md',
                        '/英语学习/词汇/雅思写作词汇/00.md'
                    ]
                }
            ]
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
