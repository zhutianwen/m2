<template>
    <div class="recommomnd">
        <div>
            <img src="../images/2.jpg" alt="">
        </div>
        <div class="recommomnd-list">
            <div class="recommomnd-list-top">
                <div>
                    <span class="iconfont icon-icon-"></span>
                    <span class="all-play">全部播放</span>
                </div>
                <div>
                    <span class="iconfont icon-duoxuan"></span>
                    <span class="more-choice">多选</span>
                </div>
            </div>
            <div class="recommomnd-list-detail">
                <div class="recommomnd-detail-content">
                    <div style="width:15%;float:left">
                        <img src="../images/1.jpg" alt="">
                    </div>
                    <div class="recommomnd-div2">
                        <div class="song-title">少看点</div>
                        <div class="song-author">12121121212211212</div>
                    </div>
                    <div class="recommomnd-div3">
                        <i class="iconfont icon-ziyuan"></i>
                    </div>
                    <div style="clear:both"></div>
                </div>
            </div>
        </div>


       
        
    </div>
</template>

<script>
export default {
    data(){
        return{
           
        }
    },
    methods:{
      
    }
}
</script>

<style>
    img{
        width: 100%;
    }
    .recommomnd-list-top{
        width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        height: 1rem;
        line-height: 1rem;
    }
    .recommomnd-detail-content{
        width:90%;
        margin:0 auto;
        height: 1.4rem;
        margin-top:1rem;
        margin-bottom:0.5rem;
    }
    .icon-ziyuan{
        font-size: 0.8rem;
    }
    .all-play,.more-choice,.song-title{
        font-size: 0.45rem;
    }
    .song-author{
        font-size:0.3rem;
        color: #dacdcd;
    }
    .recommomnd-div2{
        float:left;
        line-height:0.8rem;
    }
    .recommomnd-div3{
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
