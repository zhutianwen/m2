<template>
    <div class="djpaihang">
        <div>
            <div class="zhubo-dj">
                <span class="iconfont icon-zuojiantou" @click="prev"></span>
                <span class="zhubo-djPai">主播电台排行榜</span>  
            </div>
            <van-tabs class="vant3" v-model="active">
                <van-tab title="主播榜">主播榜</van-tab>
                <van-tab title="节目榜">
                    <jiemu></jiemu>
                </van-tab>
                <van-tab title="电台榜">
                    <djbang></djbang>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
import jiemu from './djPhbang/jiemubang'
import djbang from './djPhbang/djbang'
export default {
    data() {
        return {
            active:1
        };
    },
    methods:{
        prev(){
            this.$router.go(-1)
        },
    },
    components:{
        jiemu,
        djbang
    }
}
</script>

<style>
    .zhubo-dj{
        height: 1rem;
        width: 100%;
        position: fixed;
        z-index: 99;
        top: 0;
        background: #fff;
    }
    .vant3 .van-tabs__wrap{
        width: 100%;
        position: fixed;
        top: 0;
        margin-top: 0.8rem
    }
    .icon-zuojiantou{
        padding-left: 0.5rem;
        font-size: 0.7rem;
    }
    .zhubo-djPai{
        font-size: 0.5rem;
    }
    .vant3 [class*=van-hairline]::after{
       border-top:0!important; 
    }
    .vant3 .van-tab--active{
        color: #dd001b;
   }
</style>
