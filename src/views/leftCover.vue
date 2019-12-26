<template>
    <div>
        <transition name="mask-show">
            <div class="left-cover" v-show="loginPage" @click="HIDE_LOGIN"></div>
        </transition>
        <transition name=login-show>
            <div class="left-content" v-show="loginPage">
                <div class="cover-top">
                    <div class="left-text">登陆网易云音乐</div>
                    <div>手机电脑多端同步，尽享海量高品质音乐</div>
                    <div class="btn-login">立即登录</div>
                    <div style="padding-bottom:0.9rem;"></div>
                </div>
                <div class="cover-bottom">
                    <div class="left-menu">
                        <div>
                            <i class="iconfont icon-wodexiaoxi"></i>
                            <div class="icon-title2">我的消息</div>
                        </div>
                        <div>
                            <i class="iconfont icon-icon-myFriend"></i>
                            <div class="icon-title2">我的好友</div>
                        </div>
                        <div>
                            <i class="iconfont icon-gexingzhuangban"></i>
                            <div class="icon-title2">个性皮肤</div>
                        </div>
                        <div>
                            <i class="iconfont icon-tinggeshiqu"></i>
                            <div class="icon-title2">听歌识曲</div>
                        </div>
                    </div>

                    <div style="border:0.5px solid #ccc;margin-bottom:1.5rem;"></div>
                    <div style="border-bottom: 1px solid #ccc;margin-bottom: 0.5rem;">
                        <div class="icon-div" v-for="item in iconList" :key="item.index">
                                <i class="icon2" :class="item.icon"></i> 
                                <div class="icon-title3">{{item.name}}</div>      
                                <div style="clear:both"></div>
                        </div>
                    </div>

                    <div class="icon-div2" v-for="item in iconList2" :key="item.index">
                        <i class="icon2" :class="item.icon"></i> 
                        <div class="icon-title3">{{item.name}}</div>      
                        <div style="clear:both"></div>
                    </div> 
                </div>
                <div class="bottom-fixed">
                    <div class="bottom-fixed-content">
                        <div>
                            <span class="iconfont icon-moonyueliang"></span>
                            <span class="icon-text3">夜间模式</span>
                        </div>
                        <div>
                            <span class="iconfont icon-shezhi"></span>
                            <span class="icon-text3">设置</span>
                        </div>
                        <div>
                            <span class="iconfont icon-tuichu"></span>
                            <span class="icon-text3">退出</span>
                        </div>
                    </div>    
                </div>
            </div>
        </transition> 
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    data(){
        return{
            iconList:[
                {
                    icon:'iconfont icon-piao',
                    name:'演出'
                },
                {
                    icon:'iconfont icon-qicheqianlian-1-copy',
                    name:'商城'
                },
                {
                    icon:'iconfont icon-fujin',
                    name:'附近的人'
                },
                {
                    icon:'iconfont icon-cailingdingzhi',
                    name:'口袋铃声'
                },
                {
                    icon:'iconfont icon-order',
                    name:'我的订单'
                },
            ],
            iconList2:[
                {
                    icon:'iconfont icon-dingshi',
                    name:'定时播放'
                },
                {
                    icon:'iconfont icon-saoyisao',
                    name:'扫一扫'
                },
                {
                    icon:'iconfont icon-yinlenaozhong',
                    name:'音乐闹钟'
                },
                {
                    icon:'iconfont icon-zaixiantinggemianliuliang',
                    name:'在线听歌免流量'
                },
                {
                    icon:'iconfont icon-youxi2',
                    name:'游戏推荐'
                },
                {
                    icon:'iconfont icon-youhuiquan',
                    name:'优惠券'
                },
                {
                    icon:'iconfont icon-hudun',
                    name:'青少年模式'
                },
            ],
        }
    },
    computed: {
        ...mapGetters([
            'loginPage'
        ])
    },
    methods:{
      ...mapMutations([
          'HIDE_LOGIN'
        ])
    },
}
</script>

<style>
    .left-cover{
        display: flex;
        justify-content: space-between;
        z-index: 9;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0,0,0,0.5)
    }
    .left-content{
        width: 8rem;
        height: 100%;
        overflow-x: hidden;
        overflow-y: scroll;
        background: #fffffc;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 9;
        /* display: none */
    }
    .right-content{
        width: 20%;
        height: 100%;
    }
    .cover-top{
        font-size: 0.35rem;
        text-align: center;
        color: #847f7f;
        background: #cccccc4d;
    }
    .left-text{
        padding-top:0.9rem; 
    }
    .btn-login{
        border: 1px solid;
        border-radius:15px; 
        width:2.5rem;
        height: 0.8rem;
        line-height: 0.8rem;
        margin: 0 auto;
        margin-top:0.3rem;
        margin-bottom:0.5rem  
    }
    .cover-bottom{
        background: #fff;
    }
    .left-menu{
        width: 85%;
        margin: 0 auto;
        padding-top: 0.5rem;
        padding-bottom: 1.5rem;
        text-align: center;
        display: flex;
        justify-content: space-between;
    }
    .icon-wodexiaoxi,
    .icon-icon-myFriend,
    .icon-gexingzhuangban,
    .icon-tinggeshiqu{
        font-size: 0.6rem;
        color: #f02c2c;
    }
    .icon-title2{
        font-size: 0.25rem;
        margin-top: 0.4rem;
    }
    .icon2{
        font-size: 0.55rem;
        float: left;
    }
    .icon-title3{  
        float: left; 
        font-size: 0.43rem;
        margin-left:0.3rem; 
    }
    .icon-div,.icon-div2{
        margin-left:0.4rem; 
        margin-bottom:0.5rem;
    }
    .bottom-fixed{
        width:80%;
        height: 1rem;
        position: fixed;
        bottom: 0;
        background: #fff;
        border-top: 1px solid #ccc;
        z-index: 9
    }
    .icon-div2:last-child{
        margin-bottom:40px; 
    }
    .icon-text3{
        font-size:0.43rem; 
    }
    .bottom-fixed-content{
        width: 90%;
        margin: 0 auto;
        display: flex;
        line-height: 1rem;
        justify-content: space-between;
    }
   /* 遮罩层动画 */
    .mask-show-enter,
    .mask-show-leave-to {
    opacity: 0;
    }

    .mask-show-enter-active,
    .mask-show-leave-active {
    transition: opacity linear 0.3s;
    }
    /* // 左侧侧边栏显示隐藏动画 */
    .login-show-enter,
    .login-show-leave-to {
        transform: translateX(-8rem);
    }

    .login-show-enter-active,
    .login-show-leave-active {
        transition: transform linear 0.3s;
    }
</style>
