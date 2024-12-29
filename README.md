# 不断同学内容管理程序前端(B-Log)
🌍 **Language** : 中 | [En](/README_en.md)  
  
💻 目前项目仍在开发阶段, 欢迎有想法的同学共同创造！ 
📃 不断同学的内容管理系统前端  

## 📁 目录结构
- src VUE程序
    - assets 静态资源
    - components 组件
        - contextBlock 内容组件
        - postCards 列表组件
    - router 路由
    - views 页面
        - Article 文章相关页面
    - stores Pinia
    - App.vue 主程序
    - main.js
- index.html 网站主入口

## 💬 碎碎念
目前有一些页面是写死的，且没预留可供后端修改的Placeholder，后续会陆续更新后端的动态修改功能。  
这个项目的创立之初，目的就是想更新我的个人网站，和写一个功能简单的博客系统，为我自己发布文章和设计作品使用。我的前端**水平有限**，难免会产生各种屎山代码和Bug，还请各位可以理解。这个项目也基本上是边学习边开发完成的。  
如果有大佬愿意和我一起完成这个项目，我会不尽感激🙏🏻。

## 📥 部署
⚠️ 本程序尚未完成，不建议部署使用。如需部署需要自行魔改代码。  
### 第一步：Fork 仓库
**复刻(Fork)** 本仓库到自己的GitHub账号下。  

### 第二步：修改main.js 中的站点信息
修改main.js中siteInfo对象的站点标题、API域名等信息。  
你需要注意的是，你需要在后端配置CORS，以避免浏览器跨域问题。  

### 第三步：使用GitHub Workflow自动打包
本仓库已配置Workflow，可在修改添加tag后自动打包，并添加到release中。

### 第四步：把打包好的程序上传到服务器
准备一台带有Nginx、Apache等软件的Web服务器，上传并解压，配置站点信息后即可访问。

## 😎 开发人员
- 项目发起者：[不断同学](https://github.com/buduan) (Baicen, @buduan)

## 🔗 相关链接
服务端及管理后台仓库：(暂未开源，感兴趣的可以邮件我)  
文档： （编写中)  
API调试工具: https://apifox.com/apidoc/shared-0d240d07-2dd6-4733-8d18-214464809bfe (BY Apifox)  

