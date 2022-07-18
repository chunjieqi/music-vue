import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/style/style.css";
import Vant from "vant";
import "vant/lib/index.css";
import '@/assets/iconfont/icomoon/style.css'

const app = createApp(App);

app.use(Vant).use(store).use(router).mount("#app");
