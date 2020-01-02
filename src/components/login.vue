<template>
    <div class="login">
        <div class="iconfont icon-wangyiyunyinle"></div>
        <div class="btn-div">
            <button class="btn" @click="goPhone">手机号登录</button>
            <button class="btn2" @click="goIndex">立即体验</button>
        </div>
        <div class="login-mode">
            <div class="iconfont icon-login icon-weixin"></div>
            <div class="iconfont icon-login icon-qq"></div>
            <div class="iconfont icon-login icon-weibo"></div>
            <div class="iconfont icon-login icon-wangyi"></div>
        </div>
        <div class="login-nav">
            <i v-if="flag" @click="flag=!flag" class="iconfont icon-fuxuankuang"></i>
            <i v-else @click="flag=!flag" class="iconfont icon-checked"></i>
            <div class="xie-yi">
                同意《用户协议》《隐私政策》《儿童隐私政策》
            </div>
        </div>
    </div>
</template>

<script>
import {Toast} from 'vant'
export default {
    data(){
        return{
            flag:true
        }
    },
    methods:{
        goPhone(){
            if(this.flag){
                Toast('请勾选')
            }else{
                this.$router.push('/phone')
            }
        },
        goIndex(){
            this.$router.push('/index')
        },
    }
}
</script>

<style>
    .login{
        position:absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #e00505;
    }
    .icon-wangyiyunyinle{
        font-size: 1.1rem;
        color: #fff;
        background: red;
        border-radius: 50%;
        width: 1.5rem;
        height: 1.5rem;
        line-height: 1.5rem;
        text-align: center;
        margin: 0 auto;
        margin-top: 2rem;
    }
    .btn-div{
        width: 75%;
        margin: 0 auto;
        margin-top:6rem;
    }
    .btn{
        color: #af0303;
        background: #fff;
    }
    .btn2{
        margin-top:0.5rem;
        color: #fff;
        border: 1px solid #fff !important;
        background: none;
    }
    .btn,.btn2{
        width: 100%;
        border: 0;
        outline: 0;
        height: 0.9rem;
        line-height: 0.9rem;
        border-radius: 17px;
        font-size: 0.45rem;
    }
    .login-mode{
        width: 70%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        text-align: center;
        margin-top: 0.9rem;
    }
    .icon-login{
        color: #fff;
        font-size: 0.6rem;
        border: 1px solid #fff;
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 50%;
        line-height: 1.2rem;
    }
    .login-nav{
        width: 76%;
        margin: 0 auto;
        margin-top: 0.3rem;
        color: #fff;
        display: flex;
        justify-content: space-between;
    }
    .icon-fuxuankuang,.icon-checked{
        font-size: 0.25rem;
    }
    .xie-yi{
        font-size: 0.3rem;
    }
</style>

