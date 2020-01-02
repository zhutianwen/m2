<template>
    <div class="phone">
        <div class="phone-top">
            <span @click="prev" class="iconfont icon-zuojiantou"></span>
            <span class="phone-num">手机号登录</span>
        </div>
        <div class="phone-txt">未注册手机号登录后将自动创建账号</div>
        <div class="input-div">
            <input v-model="number" class="input" type="text" placeholder="请输入手机号">
            <span @click="close" class="iconfont icon-guanbi"></span>
        </div>
        <button class="btn3" @click="next">下一步</button>
    </div>
</template>

<script>
import {Toast} from 'vant'
export default {
    data(){
        return{
            number:'',
        }
    },
    methods:{
        prev(){
            this.$router.go(-1)
        },
        close(){
            this.number=''
        },
        next(){
            // console.log(this.number,'/////////////')
            let reg = /^[1][3,4,5,7,8][0-9]{9}$/;
            if(reg.test(this.number)){
                this.$router.push({
                    path:'/password',
                    name:'password',
                    params:{
                        number:this.number
                    }
                })
            }else{
                Toast('手机号格式有误')
            }
        },
    },
}
</script>

<style>
    .phone-top,.phone-txt,.input-div,.btn3{
        width: 90%;
        margin: 0 auto;
    }
    .icon-zuojiantou{
        font-size: 0.7rem;
    }
    .phone-num{
        font-size: 0.5rem;
    }
    .phone-txt{
        font-size: 0.2rem;
        color: #908c8c;
        margin-top:0.9rem;
    }
    .input-div{
        position: relative;
        margin-top: 0.4rem
    }
    .input{
        font-size: 12px;
        width: 100%;
        margin: 0 auto;
        border: 0;
        outline: none;
        border-bottom: 1px solid #ccc;
        background: #fff!important;
    }
    .icon-guanbi{
        position: absolute;
        bottom: 0.08rem;
        right: 0.1rem;
    }
    .btn3{
        font-size: 0.45rem;
        display: block;
        border: 0;
        outline: none;
        background: red;
        color: #fff;
        height:1.2rem;
        line-height: 1.2rem;
        border-radius: 20px;
        margin-top: 1.5rem;
    }
</style>


