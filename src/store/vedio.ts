import { defineStore } from "pinia";
import {getVediourl,getMvurl} from "@/utils/api/api";
export const vediostore =defineStore("vedio",{
    state:()=>{
        return {
            vediolist:{id:'',url:''}
        }
    },
    getters:{
    },
    actions:{
        getvedioid(vid:string){
            getVediourl(vid).then(res=>{
                // console.log(res)
                // res.urls[0].id/url
                this.vediolist.id=res.urls[0].id
                this.vediolist.url=res.urls[0].url
            })
        },
        getmv(id:number){
            getMvurl(id).then(res=>{
                // console.log(res)
                this.vediolist.id=res.data.id
                this.vediolist.url=res.data.url
            })
        }
    }
})