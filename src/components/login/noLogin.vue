<template>
    <div class="noLogin">
        <div class="box">
            <div class="top">
                <van-icon class="icon" name="music-o" />
                <div class="tite">请使用网易云音乐账号登录</div>
            </div>
            <div class="contan">
                <van-form @submit="onSubmit">
                    <van-cell-group inset>
                        <van-field v-model="username" name="电话号码" label="电话号码" placeholder="电话号码"
                            :rules="[{ required: true, message: '请填写电话号码' }]" />
                        <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码"
                            :rules="[{ required: true, message: '请填写密码' }]" />
                    </van-cell-group>
                    <div style="margin: 16px;">
                        <van-button round block class="butn" type="primary" native-type="submit">
                            提交
                        </van-button>
                    </div>
                </van-form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineComponent, reactive, toRefs, ref } from 'vue'
import {userstore} from '@/store/userLogin'
const ustore=userstore()
import {onlogin} from '@/utils/api/api'
const username = ref('');
const password = ref('');
const onSubmit = (values) => {
    // console.log(username.value);
    // console.log(password.value);
    onlogin(username.value,password.value).then(res=>{
        console.log(res);
        if(res.code===200){
            console.log("登陆成功");
            ustore.setToken(res.token)
          //将用户id也进行本地存储
            window.localStorage.setItem('uid',res.account.id)
          //将用户id进行store储存
          ustore.uid=window.localStorage.getItem('uid')
        }
    })
};
</script>
<style lang='scss' scoped>
.noLogin {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #606266;
    .box{
        display: flex;
        position: absolute;
        margin-left: 0;
        width: 100%;
        height: 50%;
        top: 100px;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        .top{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-content: center;
            margin-bottom: 20px;
            .icon{
                width: 100%;
                text-align: center;
                font-size: 500%;
                color: red;
            }
            .tite{
                color: yellow;
                margin-top: 20px;
            }
        }
    }

}
.butn{
    width: 40%;
    margin: auto;
    margin-top: 20px;
}
</style>