<template>
    <div class="america">
        <div v-for="(item,index) in americaList" :key="index" v-if="index<1">
            <img v-lazy="item.album.blurPicUrl" alt="">
        </div>
        <div class="song-list">
            <div class="song-list">
                <div class="song-list-top">
                    <div>
                        <span class="iconfont icon-bofang"></span>
                        <span class="all-play">全部播放
                            <span style="color:#ccc;font-size:0.4rem">(共{{totalCount}}首)</span>
                        </span>
                    </div>
                    <div>
                        <span class="iconfont icon-duoxuan"></span>
                        <span class="more-choice">多选</span>
                    </div>
                </div>
                <div class="song-list-detail">
                    <div class="song-detail-content" v-for="(item,index) in americaList" :key="index">
                        <div style="width:15%;float:left">
                            <img style="border-radius:8px;" v-lazy="item.album.blurPicUrl" alt="">
                        </div>
                        <div class="song-div2">
                            <div class="song-title">{{item.name}}</div>
                            <div class="song-author">{{item.artists[0].name}}-{{item.album.name}}</div>
                        </div>
                        <div class="song-div3">
                            <i class="iconfont icon-ziyuan icon-ziyuan2"></i>
                        </div>
                        <div style="clear:both"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'america',
    data(){
        return{
            americaList:[],
            totalCount:'',
        }
    },
    created(){
        this.getamerica()
    },
    methods:{
        getamerica(){
            this.$axios.get('/top/song?type=96').then((res)=>{
                // console.log(res)
                this.americaList=res.data.data
                // console.log(this.americaList[0])
                this.totalCount= res.data.data.length
            }).catch((err)=>{
                console.log(err)
            })
        },
    },
}
</script>

<style>
    .america{
        position: relative;
    }
    .song-list{
        width: 100%;
        background: #fff;
        border-top-right-radius:19px;
        border-top-left-radius:19px;
        position: absolute;
        top:3rem
    }
    .song-list-top{
        width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        height: 1rem;
        line-height: 1rem;
    }
    .song-detail-content{
        width:90%;
        margin:0 auto;
        height: 1.4rem;
        margin-top:1rem;
        margin-bottom:0.5rem;
    }
    .icon-ziyuan2{
        color: #8b8888;
        font-size: 0.8rem;
    }
    .all-play,.more-choice,.song-title{
        font-size: 0.45rem;
    }
    .song-author{
        font-size:0.3rem;
        color: #dacdcd;
    }
    .song-div2{
        float:left;
        line-height:0.8rem;
        padding-left:0.25rem;
    }
    .song-div3{
        float:right;
        line-height:1.25rem;   
    }
    .song-title,.song-author{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 5rem;
    }
</style>

