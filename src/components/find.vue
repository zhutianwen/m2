<template>
    <div class="find">
        <van-swipe :autoplay="3000" indicator-color="#ae0a0a">
            <van-swipe-item v-for="item in bannerList" :key="item.index">
                <img :src="item.imageUrl" alt="">
            </van-swipe-item>
        </van-swipe>
        <!--  -->
        <div class="fen-lei">
            <div class="fen-lei-content" @click="goRecommmond">
                <i class="iconfont icon1 icon-meirituijian"></i>
                <div class="fen-lei-title">每日推荐</div>
            </div>
            <div class="fen-lei-content">
                <i class="iconfont icon1 icon-gedan"></i>
                <div class="fen-lei-title">歌单</div>
            </div>
            <div class="fen-lei-content">
                <i class="iconfont icon1 icon-paihangbang"></i>
                <div class="fen-lei-title">排行榜</div>
            </div>
            <div class="fen-lei-content">
                <i class="iconfont icon1 icon-zhibobofangshexiangjiguankanxianxing"></i>
                <div class="fen-lei-title">直播</div>
            </div>  
        </div>
        <!--  -->
        <div style="width:100%;color:#e7e9dd;border:0.02rem solid;margin:0.6rem 0 0.6rem 0;"></div>
        <!-- 推荐歌单 -->
        <div class="recommend-songs">
            <div class="recommend-title">
                <div class="tuijian-gedan">推荐歌单</div>
                <div class="song-square">歌单广场</div>
            </div>
            <div class="recommend-items">
                <div class="recommend-div" v-for="item in recommendLisr" :key="item.id">
                    <span class="recommend-span">
                        {{ transNumber(item.playCount,1) }}
                        <span class="iconfont icon-erji"></span>
                    </span>
                    <img v-lazy="item.picUrl" alt="">
                    <div class="description">{{item.name}}</div>
                </div>
            </div>
            
        </div>
        <!-- 新碟新歌 -->
        <diV class="new-songs">
            <div class="new-songs-title">
                <div>
                    <span class="xindie">新碟</span>
                    <span class="line">|</span>
                    <span class="newSong">新歌</span>
                </div>
                <div class="more-die">
                    更多新碟
                </div>  
            </div>
            <div class="news-songs-item">
                <div class="news-songs-div" v-for="item in newdieList" :key="item.index">
                    <img v-lazy="item.picUrl" alt="">
                    <div class="news-song-detail">{{item.name}}</div>
                </div>
            </div>
        </diV>
    </div>
</template>

<script>
import Swiper from 'swiper'
import { Toast } from 'vant';

export default {
    // mounted(){
    //     this.$toast('为你推荐更多有趣的内容');
    // },
    data(){
        return{
            bannerList:[],
            recommendLisr:[],
            newdieList:[],
            tips:'为你推荐更多有趣的内容'
        }
    },
    created(){
        this.getBanner();
        this.getRecommend();
        this.getNewsdie();
    },
    methods:{
         // 转换数字
        transNumber(num,point){
           var numStr = num.toString()  
            // 十万以内直接返回
            if (numStr.length < 6) {
            return numStr;
            }
             //大于8位数是亿
            else if (numStr.length > 8) {
            var decimal = numStr.substring(numStr.length - 8, numStr.length - 8 + point);
            return parseFloat(parseInt(num / 100000000) + '.' + decimal) + '亿';
            }
             //大于6位数是十万 (以10W分割 10W以下全部显示)
            else if (numStr.length > 5) {
            var decimal = numStr.substring(numStr.length - 4, numStr.length - 4 + point)
            return parseFloat(parseInt(num / 10000) + '.' + decimal) + '万';
            }
        },
        getBanner(){//获取轮播图
            this.$axios.get('/banner?type=2/').then((res)=>{
                // console.log(res)
                this.bannerList = res.data.banners
                // console.log(this.bannerList,'//')
            }).catch((err)=>{
                console.log(err)
            })
        },  
        getRecommend(){//获取推荐歌单
            this.$axios.get('/personalized?limit=6').then((res)=>{
                // console.log(res)
                this.recommendLisr = res.data.result
                // console.log(this.recommendLisr,'///')
            }).catch((err)=>{
                console.log(err)
            })
        },
        getNewsdie(){//获取新碟
            this.$axios.get('/top/album?offset=0&limit=3').then((res)=>{
                // console.log(res)
                this.newdieList = res.data.albums
            }).catch((err)=>{
                console.log(err)
            })
        },
        goRecommmond(){
            this.$router.push({
                path:'/recommenday'
            })
        }  
    }
}
</script>

<style>
    @import '../../node_modules/swiper/css/swiper.min.css';   
    img{
        width: 100%;
    }
    .tips {
        box-sizing: border-box;
        padding: 0.1rem 0.2rem;
        background-color: rgba(0, 0, 0, 0.6);
        color: #fff;
        font-size: 0.23rem;
        border-radius: 0.3rem;
    }
    .fen-lei-content{
        text-align: center;
        margin-top:0.8rem; 
    }
    .fen-lei{
        display: flex;
        justify-content: space-between;
    }
    .icon1{
        display: block;
        color: #fff;
        font-size: 0.8rem;
        background: #e14235;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        text-align: center;
        line-height: 1.5rem;
    }
    .fen-lei-title{
        font-size: 0.35rem;
        margin-top: 0.35rem;
    }
    .recommend-title{
        display: flex;
        justify-content: space-between;
    }
    .song-square,.more-die{
        width: 25%;
        height: 0.5rem;
        letter-spacing: 0.1rem;
        text-align: center;
        line-height: 0.5rem;
        font-size: 0.35rem;
        border: 1px solid #e7e9dd;
        border-radius:15px; 
    }
    .tuijian-gedan,.xindie{
        font-size: 0.45rem;
    }
    .recommend-items{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 0.5rem;
    }
    .recommend-div{
        width: 30%;
        text-align: center;
        margin-bottom: 0.25rem;
        position: relative;
    }
    .recommend-span{
        font-size:0.2rem;
        position: absolute;
        top:0;
        right: 0;
        color: #fff;
        background: rgba(0,0,0,0.3);
        border-radius: 8px

    }
     .recommend-div img{    
        border-radius: 8px;
     }
    .description,.news-song-detail{
        font-size: 0.3rem;
        text-align: left;
       display: -webkit-box;
       -webkit-box-orient: vertical;
       -webkit-line-clamp: 2;
        overflow: hidden;
    }
    .new-songs-title{
        display: flex;
        justify-content: space-between;
    }
    .line{
        color: #ccc;
        font-size: 0.45rem;
    }
    .new-songs-title{
        margin-top: 1rem;
    }
    .newSong{
        color: #ccc;
        font-size: 0.35rem;
    }
    .news-songs-div{
        width: 30%;
        text-align: center；
    }
    .news-songs-div img{
        border-radius: 8px;
    }
    .news-songs-item{
        margin-top:0.28rem; 
        display: flex;
        justify-content: space-between;
    }

</style>

