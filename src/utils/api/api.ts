import service from "../request/request";
export function getMusiclist() {
  return service({
    url: "/artist/list",
    method: "get",
  });
}
//获取轮播图资源
export function getSwipelist() {
  return service({
    url: "/banner?type=1",
    method: "get",
  });
}

//获取轮播图资源
export function getFindIconlist() {
  return service({
    url: "/homepage/dragon/ball",
    method: "get",
  });
}

export function getSuglist() {
  return service({
    url: "/personalized",
    method: "get",
    params:{
      limit:9
    }
  });
}

//获取歌单列表
export function getSonglist(id: number) {
  return service({
    url: "/playlist/track/all",
    method: "get",
    params: {
      id: id,
    },
  });
}

export function getSong(id: number) {
  return service({
    url: "/song/url",
    method: "get",
    params: {
      id: id,
    },
  });
}

//登录
export function onlogin(phone:string,password:string) {
  return service({
    url: `/login?email=${phone}@163.com&password=${password}`,
    method: "get",
  });
}

//获取用户详情
export  function getUserdet(uid:number){
  return service({
    url:`/user/detail?uid=${uid}`,
    method: "get",
  })
}

export  function getUser(uid:number){
  return service({
    url:`/user/account`,
    method: "GET",
  })
}
//获取用户歌单
export  function getUserlist(uid:number){
  return service({
    url:`/user/playlist?uid=${uid}`,
    method: "GET",
  })
}
//获取用户信息，歌单收藏等
export  function getUsermess(){
  return service({
    url:`/user/subcount`,
    method: "GET",
  })
}

//获取新歌速递
//获取用户信息，歌单收藏等
export  function getNewsongs(num:number){
  return service({
    url:`/top/song?type=${num}`,
    method: "GET",
  })
}

//获取排行榜
export  function getbokebang(num:number){
  return service({
    url:`/toplist`,
    method: "GET",
  })
}

//获取视频分类
export  function getVedio(){
  return service({
    url:`/video/category/list`,
    method: "GET",
  })
}
//获取分类下的视频
export  function getVedioList(num:number){
  return service({
    url:`/video/group?id=${num}`,
    method: "GET",
  })
}
//获取视频url
//获取分类下的视频
export  function getVediourl(num:string){
  return service({
    url:`/video/url?id=${num}`,
    method: "GET",
  })
}
//获取mv
export  function getMvurl(num:number){
  return service({
    url:`/mv/url?id=${num}`,
    method: "GET",
  })
}