<template>
    <div class="tuijian">
        <div class="tuijian-item">
            <div class="tuijian-item-div" v-for="(item,index) in jingpinList" :key="index">
                <img v-lazy="item.coverImgUrl" alt="">
                <span class="span-count">
                    {{ transNumber(item.playCount,1) }}
                    <span class="iconfont icon-erji"></span>    
                </span>
                <div class="description">{{item.name}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
           jingpinList:[],
        }
    },
    created(){
        this.getJingpin()
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
        getJingpin(){
            this.$axios.get('http://localhost:3000/top/playlist/highquality?before=1503639064232&limit=33').then((res)=>{
                this.jingpinList = res.data.playlists
                // console.log(this.jingpinList)
            }).catch((err)=>{
                console.log(err)
            })
        },
    },
}
</script>

<style>
    .tuijian-item{
        display: flex;
        flex-wrap:wrap; 
        justify-content: space-between;
        margin: 0 auto;
        margin-top: 0.5rem;
        width: 90%;
    }
    .tuijian-item-div{
        position: relative;
        width: 30%;
        margin-bottom: 0.25rem;
    }
    .span-count{
        font-size:0.2rem;
        position: absolute;
        top:0;
        right: 0;
        color: #fff;
        background: rgba(0,0,0,0.3);
        border-radius: 8px
    }
    .tuijian-item-div img{
        border-radius:8px; 
    }
    .description{
        font-size: 0.3rem;
        text-align: left;
       display: -webkit-box;
       -webkit-box-orient: vertical;
       -webkit-line-clamp: 2;
        overflow: hidden;
    }
</style>



