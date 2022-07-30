import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import store from "@/store";
import "@/assets/style/style.css";
import Vant from "vant";
import "vant/lib/index.css";
import '@/assets/iconfont/icomoon/style.css'
// import Vuex from "vuex";
//引入plyr
//引入pinia
import {createPinia} from 'pinia'
const pinia=createPinia()

const app = createApp(App);
app.use(pinia)
app.use(router)
app.use(Vant)

app.mount("#app");