import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

// import EditorJS from '@editorjs/editorjs'

//站点默认信息
export const siteInfo = {
  defaultTitle: '不断同学的小站', //默认导航栏标题
  defaultName: '不断同学的小站', //默认站点标题
  // apiDomain: 'https://api.ibuduan.com', //api域名
  apiDomain: 'https://apifoxmock.com/m1/5555336-5232387-default', //测试api域名
  siteDomain: 'https://www.ibuduan.com', //站点域名
}

const app = createApp(App)

// app.use(EditorJS)
app.use(router)
// app.use(siteInfo)
app.use(axios)
// app.use(EditorJS)

app.mount('#app')
