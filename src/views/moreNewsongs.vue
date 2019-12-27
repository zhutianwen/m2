<template>
    <div class="new-songs">
        <div>
            <div class="zui-xin">
                <span class="iconfont icon-zuojiantou" @click="prev"></span>
                <span class="songs-top-title">最新音乐</span>
            </div>
            <van-tabs class="vant2" v-model="active">
                <van-tab title="华语"> <chinese></chinese> </van-tab>
                <van-tab title="欧美"> <america></america> </van-tab>
                <van-tab title="韩国"> <korea></korea> </van-tab>
                <van-tab title="日本"> <japan></japan> </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
import chinese from './chinese.vue'
import america from './america.vue'
import korea from './korea.vue'
import japan from './japan.vue'
export default {
    data(){
        return{
            active:0
        }
    },
    components:{
        chinese,
        america,
        korea,
        japan
    },
    methods:{
        prev(){
            this.$router.go(-1)
        }
    },
}
</script>

<style>
    .zui-xin,.vant2 .van-tabs__wrap{
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 9;
        background: #fff;
    }
    .zui-xin{
        z-index: 99;
        height: 1rem;
    }
    .vant2 .van-tabs__wrap{
        margin-top:1rem 
    }
    /* .van-tabs__content{
        padding-top: 1.5rem
    } */
   
    .vant2{
        margin-top: 0.5rem;
    }
    .icon-zuojiantou{
        padding-left:0.5rem; 
        font-size: 0.7rem;
    }
    .songs-top-title{
        font-size: 0.5rem;
    }
    .vant2 [class*=van-hairline]::after{
        border-top: 0!important;
    }
</style>

