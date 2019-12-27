<template>
    <div class="more-dish">
        <div class="dish-top">
            <span class="iconfont icon-zuojiantou" @click="goback"></span>
            <span class="dish-top-title">新碟上架</span>    
        </div> 
        <!--  -->
        <div>
            <div class="digital-album">
                <div>数字专辑</div>
                <div class="more-zhuanji">更多专辑</div>    
            </div>  
            <div class="album-content">
                <div class="albun-item" v-for="(item,index) in dishList" :key="index" v-if="index<3">
                    <img v-lazy="item.blurPicUrl" alt="">
                    <div class="song-name">{{item.name}}</div>
                    <div class="singer">{{item.artist.name}}</div>
                </div>
            </div>  
            <div style="border-bottom: 0.3rem solid #f2f2ed;margin-top:0.8rem"></div>
        </div> 
        <!--  -->
        <div class="week-dish">
            <div class="week-dish-title">本周新碟</div>
            <div class="week-dish-content">
                <div class="dish-item"  v-for="(item,index) in dishList2" :key="index">
                    <img v-lazy="item.blurPicUrl" alt="">
                    <div class="dish-name">{{item.name}}</div>
                    <div class="singer">{{item.artist.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            dishList:[],
            dishList2:[],
        }
    },
    created(){
        this.getMoredish();
        this.getWeekdish()
    },
    methods:{
        getMoredish(){//专辑
            this.$axios.get('/album/newest').then((res)=>{
                // console.log(res)
                this.dishList = res.data.albums
            }).catch((err)=>{
                console.log(err)
            })
        },
        getWeekdish(){
            this.$axios.get('/top/album?offset=0').then((res)=>{
                // console.log(res)
                this.dishList2 = res.data.albums
            }).catch((err)=>{
                console.log(err)
            })
        },
        goback(){
            this.$router.go(-1)
        }
    }
}
</script>

<style>
    .more-dish{
        margin: 0 auto;     
    }
    .dish-top{
        width: 100%;
        margin: 0 auto; 
        position: fixed;
        top: 0;   
        background: #fff; 
        height: 1rem;
    }
    .icon-zuojiantou{
        padding-left:0.5rem; 
        font-size: 0.7rem;
    }
    .dish-top-title{
        font-size: 0.5rem;
    }
    .digital-album{
        width: 90%;
        margin: 0 auto;
        margin-top:1.5rem; 
        display: flex;
        justify-content: space-between
    }
    .more-zhuanji{
        width: 25%;
        height: 0.5rem;
        letter-spacing: 0.1rem;
        text-align: center;
        line-height: 0.5rem;
        font-size: 0.35rem;
        border: 1px solid #e7e9dd;
        border-radius:15px; 
        font-weight: normal
    }
    .digital-album,.week-dish-title{
        font-size: 0.47rem;
        font-weight:bold; 
    }
    .album-content{
        width: 90%;
        margin: 0 auto;
        margin-top:0.6rem; 
        display: flex;
        justify-content: space-between;
    }
    .albun-item{
        width: 30%;
    }
    .albun-item img,.dish-item img{
        border-radius: 8px;
    }
    .song-name,.singer{
        font-size: 0.35rem;
        margin-top: 0.1rem;
    }
    .singer{
        color: #a09e9e;
    }
    .week-dish{
        width: 90%;
        margin: 0 auto;
        margin-top: 0.5rem;
    }
    .week-dish-content{
        margin-top: 0.48rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .dish-item{
        width: 40%;
        margin-bottom:0.6rem; 
    }
    .dish-name{
        font-size: 0.43rem;
        display: -webkit-box;
       -webkit-box-orient: vertical;
       -webkit-line-clamp: 1;
        overflow: hidden;
    }
</style>

