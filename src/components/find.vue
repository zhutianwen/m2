<template>
    <div class="find">
        <van-swipe :autoplay="3000" indicator-color="#ae0a0a">
            <van-swipe-item v-for="item in bannerList" :key="item.index">
                <img :src="item.imageUrl" alt="">
            </van-swipe-item>
            
        </van-swipe>
    </div>
</template>

<script>
import Swiper from 'swiper'

export default {
    data(){
        return{
            bannerList:[],
        }
    },
    created(){
        this.getBanner();
    },
    methods:{
        getBanner(){//获取轮播图
            this.$axios.get('/banner?type=2/').then((res)=>{
                console.log(res)
                this.bannerList = res.data.banners
                // console.log(this.bannerList,'//')
            }).catch((err)=>{
                console.log(err)
            })
        },    
    }
}
</script>

<style>
    @import '../../node_modules/swiper/css/swiper.min.css';   
    img{
        width: 100%;
    }
</style>

