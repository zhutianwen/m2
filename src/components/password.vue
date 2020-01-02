<template>
    <div class="phone">
        <div class="phone-top">
            <span @click="prev" class="iconfont icon-zuojiantou"></span>
            <span class="phone-num">手机号登录</span>
        </div>
        <div class="input-div">
            <form>
                <input v-model="password" class="input" type="password" placeholder="请输入密码" autocomplete='password'>
            </form>
            <span class="forget-pwd">忘记密码?</span>
        </div>
        <button class="btn4" @click="getLogin">登录</button>
    </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
    data(){
        return{
           password:'',
        }
    },
    created(){
        
    },
    methods:{
        prev(){
            this.$router.go(-1)
        },
        getLogin(){
            var phone = this.$route.params.number
            var password =this.password
            var url ='/login/cellphone?phone='+phone+'&password='+password
            this.$axios.get(url).then((res)=>{
                var profile = res.data.profile
                this.setUsername(profile.nickname)
                this.setAvatarUrl(profile.avatarUrl)
                this.setIsLogin(true)
                // console.log(profile,'?')
                // console.log(profile.nickname,'///////////')
                this.$router.push('/index')
            }).catch((err)=>{
                this.setIsLogin(false)
                console.log(err)
            })
        },
        ...mapMutations({
            setUserId: 'SET_USER_ID',
            setUsername: 'SET_USER_NAME',
            setAvatarUrl: 'SET_AVATAR_URL',
            setIsLogin: 'SET_IS_LOGIN',
        })
    },
}
</script>

<style>
    .phone-top,.input-div,.btn4{
        width: 90%;
        margin: 0 auto;
    }
    .icon-zuojiantou{
        font-size: 0.7rem;
    }
    .phone-num{
        font-size: 0.5rem;
    }
    .input-div{
        position: relative;
        margin-top: 0.4rem
    }
    .forget-pwd{
        position: absolute;
        bottom: 0.05rem;
        right: 0rem;
        font-size: 0.25rem;
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
    .btn4{
        font-size: 0.45rem;
        display: block;
        border: 0;
        outline: none;
        background: red;
        color: #fff;
        height:1.2rem;
        line-height: 1.2rem;
        border-radius: 20px;
        margin-top: 1rem;
    }
</style>


