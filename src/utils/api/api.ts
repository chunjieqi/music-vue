import service from '../request/request'
export function getMusiclist(){
    return service({
        url:'/artist/list',
        method:'get',

    })
}
//获取轮播图资源
export function getSwipelist(){
    return service({
        url:'/banner?type=1',
        method:'get',

    })
}

//获取轮播图资源
export function getFindIconlist(){
    return service({
        url:'/homepage/dragon/ball',
        method:'get',

    })
}

export function getSuglist(){
    return service({
        url:'/recommend/resource',
        method:'get',

    })
}