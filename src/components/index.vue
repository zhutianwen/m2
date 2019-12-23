<template>
    <div class="index">
        <div class="top-title">
            <div class="top-icon">
                <i class="iconfont icon-caidan"></i>   
            </div>
            <div class="vant-tabs">
                <van-tabs v-model="active">
                    <van-tab title="我的">内容 1</van-tab>
                    <van-tab title="发现">
                        <find></find>
                    </van-tab>
                    <van-tab title="云村">内容 3</van-tab>
                    <van-tab title="视频">内容 4</van-tab>
                </van-tabs>
            </div>
            <div class="top-icon" style="right:12px;">
                <i class="iconfont icon-sousuo"></i>   
            </div>
        </div>
    </div>
</template>

<script>
import find from './find.vue'
export default {
    data(){
        return{
            active:1
        }
    },
    components:{
        find
    }
}
</script>

<style>
    .top-title{
        width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
    .top-icon{
        height: 44px;
        line-height: 44px;
        position: absolute;
        top: 0;
        z-index: 1;
    }
    .icon-caidan,.icon-sousuo{
        font-size: 20px;
    }
    .vant-tabs{
        width: 100%
    }
    .van-tabs__line{
       background: none!important;
    }
    [class*=van-hairline]::after{
       border: 0!important;
    }
    .van-tab--active{
        font-weight:bold; 
        -webkit-transform: scale(1.2);
        -moz-transform:scale(1.2);
        -o-transform:scale(1.2);
        transform:scale(1.2);
        -webkit-transition:all 0.1s;
        -moz-transition:all 0.1s;
        -o-transition:all 0.1s;
        transition:all 0.1s;
   }
   /* #ae0a0a */
</style>
