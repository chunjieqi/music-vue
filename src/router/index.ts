import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/home/Home.vue";
import Boke from "@/views/boke/Boke.vue";
import Find from "@/views/find/Find.vue";
import My from "@/views/my/My.vue";
import Care from "@/views/care/Care.vue";
import CloudVil from "@/views/cloudVil/CloudVil.vue";
import Song from "@/views/song/song.vue";
import Playmusic from "@/views/playmusic/playmusic.vue";
const routes: Array<RouteRecordRaw> = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    component: Home,
    redirect: "/home/find",
    children: [
      { path: "find", component: Find },
      { path: "boke", component: Boke },
      { path: "my", component: My },
      { path: "care", component: Care },
      { path: "cloudVil", component: CloudVil },
    ],
  },
  {path:'/song',component:Song},
  {path:'/playmusic',component:Playmusic},
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
