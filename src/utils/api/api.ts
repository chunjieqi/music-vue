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
    url: "/top/playlist/highquality?limit=9",
    method: "get",
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
