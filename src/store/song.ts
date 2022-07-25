import { defineStore } from "pinia";
import { getSong } from "@/utils/api/api";
export const songStore = defineStore("song", {
  state: () => {
    return {
      //这里写数据 实例：
      audios: new Audio(), //播放器组件
      sugsonglistmessge:Object,
      muted: false,
      widthh: `0%`, //控制播放器进度条的宽度
      currenttime: 0, //当前时间
      duration: 0, //总时长
      songList: [], //歌单数据
      nowsong: [
        //储存现在正在播放的歌曲列表
        {
          id: 0,
          url: "", //歌曲地址
          songname: "", //歌曲名字
          picurl: "", //歌曲图片
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
    nowtime: (state) => {
      if (isNaN(state.currenttime)) {
        return "00:00";
      }
      let timeDisplay = Math.floor(state.currenttime); //获取实时时间
      let minute = timeDisplay / 60;
      let minutes = parseInt(minute + "");
      let fen = "00";
      let miao = "00";
      if (minutes < 10) {
        fen = "0" + minutes;
      } else {
        fen = minutes + "";
      }
      //秒
      let second = timeDisplay % 60;
      let seconds = Math.round(second);
      if (seconds < 10) {
        miao = "0" + seconds;
      } else {
        miao = seconds + "";
      }
      return fen + ":" + miao; //将实时时间存储到vuex中
      // console.log(_this.$store.state.realMusicTime);
    },
    alltime: (state) => {
      if (isNaN(state.duration)) {
        return "00:00";
      }
      let timeDisplay = Math.floor(state.duration); //获取实时时间
      let minute = timeDisplay / 60;
      let minutes = parseInt(minute + "");
      let fen = "00";
      let miao = "00";
      if (minutes < 10) {
        fen = "0" + minutes;
      } else {
        fen = minutes + "";
      }
      //秒
      let second = timeDisplay % 60;
      let seconds = Math.round(second);
      if (seconds < 10) {
        miao = "0" + seconds;
      } else {
        miao = seconds + "";
      }
      return fen + ":" + miao;
    },
  },
  actions: {
    //这里写方法，同步异步都可以,注意这个没有state参数，要访问state直接用this.
    //获取歌单列表
    addlist(val: any) {
      this.songList = val;
    },
    //根据传入的id获取歌单中的歌曲，并添加进nowsong中
    playsong(id: number, name: string, pic: string) {
      getSong(id).then((res) => {
        //这段代码还有待改进
        console.log(res);
        if (this.nowsong[0].url === "") {
          this.nowsong = [
            { id: id, url: res.data[0].url, songname: name, picurl: pic },
          ]; //赋值给播放列表
          this.index = this.nowsong.length - 1; //让当前播放歌曲为列表的最后一项
          this.audios.src = this.nowsong[this.index].url; //为audio赋值
          this.audios.autoplay = false; //关闭自动播放
          this.audios.loop = false; //关闭自动循环
          this.isplaying = false;
          console.log(this.nowsong);
        } else {
          //过滤掉重复的歌，重复的歌不添加但是切换到播放这首歌
          if (this.nowsong.filter((s) => s.id == id).length <= 0) {
            this.nowsong.push({
              id: id,
              url: res.data[0].url,
              songname: name,
              picurl: pic,
            });
            this.index = this.nowsong.length - 1;
            this.audios.src = this.nowsong[this.index].url; //为audio赋值
            this.audios.autoplay = false; //关闭自动播放
            this.audios.loop = false; //关闭自动循环
            this.isplaying = false;
            console.log(this.nowsong);
            console.log("完成添加");
          } else {
            const thisval = this.nowsong.findIndex((item) => item.id === id); //获取这首歌对应的索引
            this.index = thisval; //播放歌曲操作
            this.audios.src = this.nowsong[this.index].url;
            this.isplaying = false;
            this.playMusic();
            // console.log('index::', this.nowsong.findIndex((item)=>item.id===id));
          }
        }
      });
    },
    // 对audio进行控制
    //播放音乐
    playMusic() {
      // console.log("进入播放");

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
    //删除播放列表中的歌曲,下面涉及到很多种情况，好像写成shi了，但是也能实现
    deleteSonglist(index: number) {
      if (this.nowsong.length > 1) {
        //当列表中的歌曲多于1首时

        if (this.index > index) {
          //当删除歌曲在播放歌曲前面时
          const val = this.index; //记录index
          this.nowsong.splice(index, 1); //删除
          this.index = val - 1; //要修改index,不然引用的songname会出错,src不用改
        } else if (this.index === index) {
          if (index === this.nowsong.length - 1) {
            this.index = this.index - 1;
            this.audios.src = this.nowsong[this.index].url;

            this.isplaying = false;
            this.playMusic();
            this.nowsong.splice(index, 1);
          } else {
            this.index = this.index + 1;
            this.audios.src = this.nowsong[this.index].url;
            this.isplaying = false;
            this.playMusic();
            this.nowsong.splice(index, 1);
            this.index = this.index - 1; //注意这里，删除之后，自身的index又发生了改变，所以应该再让他变回去
          }
        } else {
          //当删除歌曲在播放歌曲后面时，直接删
          this.nowsong.splice(index, 1);
          // this.playMusic;
        }
      } else {
        //当要删的歌曲是列表中的最后一个时，进行重置

        this.nowsong = [
          {
            id: 0,
            url: "", //歌曲地址
            songname: "", //歌曲名字
            picurl: "",
          },
        ];
        this.index = 0; //同理，要修改index
        this.audios.src = this.nowsong[this.index].url;
        this.isplaying = true; //同时让他停止播放
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
    // 音乐播放器进度条宽度的变化,这个应该在全局调用,上面的ended和这个timeupdate都监听者放在全局的Audio,因此这两个也应该放在全局
    changeProgress() {
      this.audios.addEventListener("timeupdate", () => {
        // console.log(111);
        const { currentTime, duration } = this.audios;
        // console.log(currentTime,duration);
        const progressPrecent = (currentTime / duration) * 100; //计算宽度的百分比
        // console.log(progressBtn);
        this.duration = this.audios.duration;
        this.currenttime = this.audios.currentTime;
        this.widthh = `${progressPrecent}%`; //赋值宽度
        // progressBtn.value.style.width = `${progressPrecent}%`
      });
    },
  },
});
