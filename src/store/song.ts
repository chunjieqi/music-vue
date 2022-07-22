import { defineStore } from "pinia";
import { getSong } from "@/utils/api/api";
export const songStore = defineStore("song", {
  state: () => {
    return {
      //这里写数据 实例：
      audios: new Audio(), //播放器组件
      songList: [], //歌单数据
      nowsong: [
        //储存现在正在播放的歌曲列表
        {
          url: "", //歌曲地址
          songname: "", //歌曲名字
        },
      ],
      isplaying: false, //歌曲是否在播放
      index: 0, //歌曲的索引
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
    //获取歌单列表
    addlist(val: any) {
      this.songList = val;
    },
    //根据传入的index获取歌单中的歌曲，并添加进nowsong中
    playsong(id: number, name: string) {
      getSong(id).then((res) => {
        //这段代码还有待改进
        console.log(res);
        if (this.nowsong[0].url === "") {
          this.nowsong = [{ url: res.data[0].url, songname: name }]; //赋值给播放列表
          this.index = this.nowsong.length - 1; //让当前播放歌曲为列表的最后一项
          this.audios.src = this.nowsong[this.index].url; //为audio赋值
          this.audios.autoplay = false; //关闭自动播放
          this.audios.loop = false; //关闭自动循环
          this.isplaying = false;
          console.log(this.nowsong);
        } else {
          this.nowsong.push({ url: res.data[0].url, songname: name });
          this.index = this.nowsong.length - 1;
          this.audios.src = this.nowsong[this.index].url; //为audio赋值
          this.audios.autoplay = false; //关闭自动播放
          this.audios.loop = false; //关闭自动循环
          this.isplaying = false;
          console.log('完成添加');
        }
      });
    },
    // 对audio进行控制
    //播放音乐
    playMusic() {
      console.log('进入播放');
      
      if (this.isplaying === true) {
        console.log("暂停", this.isplaying);

        this.audios.pause();
        this.isplaying = false;
      } else {
        this.audios.play(); //开始播放
        console.log("播放", this.isplaying);
        this.isplaying = true;
      }
    },
    //切换上一首
    shangyishou() {
      this.isplaying = false;
      if (this.index === 0) {
        this.index = this.nowsong.length - 1; //索引值改变
        this.audios.src = this.nowsong[this.index].url; //赋予新的src
        this.playMusic(); //播放
      } else {
        this.index--;
        this.audios.src = this.nowsong[this.index].url;
        this.playMusic();
      }
    },
    //切换下一首
    next() {
      this.isplaying = false;
      if (this.index >= this.nowsong.length - 1) {
        this.index = 0;
        this.audios.src = this.nowsong[this.index].url;
        this.playMusic();
      } else {
        this.index++;
        this.audios.src = this.nowsong[this.index].url;
        this.playMusic();
      }
    },
    // 播放结束后自动切换下一首
    playEnd() {
      this.audios.addEventListener("ended", () => {
        // 当音轨播放完毕时候做你想做的事情
        // console.log(1);
        // this.isplaying = false;
        // console.log(2);
        this.next();
        // console.log(3);
      });
    },
  },
});
