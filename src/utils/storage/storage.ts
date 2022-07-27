//获取本地token
export function gettoken(token:string){
    return window.localStorage.getItem(token)
}
//设置本地token
export function settoken(tokenkey:string){
    return window.localStorage.setItem('token',tokenkey)
}
//删除本地token
export function deletetoken(token:string){
    return window.localStorage.removeItem(token)
}