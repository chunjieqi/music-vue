import { defineStore } from "pinia";
import {gettoken,settoken,deletetoken} from '@/utils/storage/storage'
export const userstore =defineStore("user",{
    state:()=>{
        return {
            user:gettoken('token'),
            uid:window.localStorage.getItem('uid'),
        }
    },
    getters:{
        
    },
    actions:{
        setToken(newtokenkey:string){
            settoken(newtokenkey)
            this.user=gettoken('token')
        },
        removeToken(token:string){
            deletetoken(token)
            this.user=gettoken('token')
        },

    }
})