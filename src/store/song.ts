import { defineStore } from "pinia";
import { getSong } from "@/utils/api/api";
export const songStore = defineStore("song", {
  state: () => {
    return {
      //这里写数据 实例：
      songList: [], //歌单数据
      nowsong: [], //储存现在正在播放的歌曲
      songname: "",
      isplaying: false, //歌曲是否在播放
    };
  },
  getters: {
    //这里写的类似于计算属性 实例：
    add: (state) => {
      return state.songList;
    },
    //注意是能用this的，指向整个store，例如this.add拿到add
    //getter是计算属性，因此不能直接那参数，需要借用函数
    getUserById: (state) => {
      return (userId: any) => userId;
    },
  },
  actions: {
    //这里写方法，同步异步都可以,注意这个没有state参数，要访问state直接用this.
    addlist(val: any) {
      this.songList = val;
    },
    //根据传入的index获取歌单中的歌曲，并传入nowsong中
    playsong(id: number, name: string) {
      getSong(id).then((res) => {
        this.nowsong = res.data;
        this.songname = name;
        // console.log(res);
        console.log(res);
      });
    },
  },
});
