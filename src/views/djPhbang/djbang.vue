<template>
    <div class="djbang">
         <div class="dj-top">
            <div class="hour" @click="goJing">24小时榜 ></div>
            <div class="hour-div">
                <div class="hour-con" v-for="(item,index) in djList" :key="index">
                    <img v-lazy="item.picUrl" alt="">
                    <div class="hour-text">{{item.name}}</div>
                </div>
            </div>
        </div>
        <!--  -->
        <div class="hot-jiemu">
            <div class="hotJiemu">最热电台 ></div>
            <div class="ul-list" v-for="(item,index) in diantai" :key="index">
                <div>
                    {{item.rank}}
                </div>
                <div class="li-list1">
                    <img v-lazy="item.picUrl" alt="">
                </div>
                <div class="li-list2">
                    <div class="chuangzuo-name">{{item.name}}</div>
                    <div class="dec">
                        <span class="dec-img">
                            <img  v-lazy="item.picUrl" alt="">
                        </span>
                        <span>{{item.creatorName}}</span>
                        <span style="display:block">
                            <span class="iconfont icon-remen"></span>
                            <span>{{ transNumber(item.score,1) }}</span>
                        </span>
                    </div>
                </div>
                <!-- <div class="li-list3">
                    <i class="iconfont icon-bofangkaishishipinyuanxingxianxing"></i>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            djList:[],
            diantai:[],
        }
    },
    created(){
        this.getDj();
        this.getHotdj()
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
        getDj(){
            this.$axios.get('/dj/toplist/pay?limit=3').then((res)=>{
                this.djList = res.data.data.list
                // console.log(this.djList)
            }).catch((err)=>{
                console.log(err)
            })
        },
        getHotdj(){
            this.$axios.get('/dj/toplist?type=hot').then((res)=>{
                this.diantai = res.data.toplist
                // console.log(this.diantai)
            }).catch((err)=>{
                console.log(err)
            })
        },
        goJing(){
            this.$router.push({
                path:'/jingp'
            })
        },
    }
}
</script>

<style>
    .dj-top{
        margin-top: 0.5rem;
        padding-bottom:0.8rem;
        border-bottom: 0.18rem solid #eee;
    }
    .hour{
        margin-top: 2.5rem;
    }
    .hour,.hotdj{
        font-size:0.45rem;
        padding-left:0.2rem; 
    }
    .hour-div{
        width: 90%;
        margin: 0 auto;
        margin-top: 0.45rem;
        display: flex;
        justify-content: space-between;
    }
    .hour-con{
        width: 30%;
        text-align: left;
    }
    .hour-con img{
        border-radius: 8px;
    }
    .hour-text{
        font-size: 0.3rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }
    .hot-jiemu{
        margin-top: 0.6rem
    }
    .ul-list{
        margin: 0 auto;
        margin-top: 0.4rem;
        width: 90%;
        display: flex;
        justify-content: space-between;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }
    .li-list1{
        width: 20%;
    }
    .li-list1 img{
        border-radius: 8px;
    }
    .li-list2{
        width: 60%;
    }
    .chuangzuo-name{
        font-size: 0.4rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
    }
    .dec{
        font-size: 0.35rem;
        color: #848282;
        margin-top: 0.2rem;
    }
    .dec-img{
        display: inline-block;
        width: 12%;
    }
    .dec-img img{
        border-radius: 50%;
    }
    .icon-bofangkaishishipinyuanxingxianxing{
        font-size: 0.9rem;
        color: #ccc;
    }
    .icon-remen{
        font-size: 0.3rem;
    }
</style>


