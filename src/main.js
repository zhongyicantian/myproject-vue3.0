import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import SplitCarousel from 'vue-split-carousel'
import ElementPlus from 'element-plus'
import { Button } from 'vant'
import mitt from 'mitt'
import { VueMasonryPlugin } from 'vue-masonry/src/masonry-vue3.plugin'
const app = createApp(App)
app.use(store)
app.use(router)
app.use(SplitCarousel)
app.use(ElementPlus)
app.use(Button)
const emitter = mitt()
app.config.globalProperties.emitter = emitter
app.use(VueMasonryPlugin)
/*
app.use(VueLazyload, {
  loading: './dist/img/loading.png',
  error: './dist/img/error.png',
  preload: 1.3
})
*/
app.mount('#app')
