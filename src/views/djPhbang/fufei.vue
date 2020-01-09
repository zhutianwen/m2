<template>
    <div class="fufei">
        <div class="fufei-top">
            <span class="iconfont icon-zuojiantou" @click="prev"></span>
            <span class="fufei">付费精品</span>
        </div>
        <!--  -->
        <div style="margin-top:1.7rem;">
            <div class="fufei-con" v-for="(item,index) in fufeiList" :key="index">
                <div class="left-img">
                    <img v-lazy="item.picUrl" alt="">
                </div>
                <div class="right-con">
                    <div class="title1">{{item.name}}</div>
                    <div class="title2">{{item.rcmdText}}</div>
                    <div class="title3">最新上架</div>
                    <div class="title4">￥ {{item.originalPrice | price}}</div>
                </div>
                <div style="clear:both"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            fufeiList:[],
        }
    },
    filters: {
        price: function (val) {
            if (val) {
                return parseInt(val / 100)
            }
        }
    },
    created(){
        this.getFufei();
    },
    methods:{
        prev(){
            this.$router.go(-1)
        },
        getFufei(){
            this.$axios.get('/dj/paygift').then((res)=>{
                this.fufeiList = res.data.data.list
                // console.log(this.fufeiList)
            }).catch((err)=>{
                console.log(err)
            })
        },
    },
}
</script>

<style>
    .fufei-top{
        position: fixed;
        top: 0;
        width: 100%;
        background: #fff;
        padding:0.2rem 0;
    }
    .icon-zuojiantou{
        padding-left: 0.5rem;
        font-size: 0.7rem;
    }
    .fufei{
        font-size: 0.5rem;
    }
    .fufei-con{
        width: 90%;
        margin: 0 auto;
        margin-top: 0.6rem;
    }
    .left-img{
        float: left;
        width: 30%;
    }
    .left-img img{
        border-radius: 8px;
    }
    .right-con{
        float: left;
        padding-left: 0.4rem;
    }
    .title1,.title2{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
    }
    .title1{
        font-size: 0.45rem;
        font-weight: bold;
    }
    .title2{
        margin-top: 0.2rem;
    }
    .title3{
        margin-top: 0.1rem;
    }
    .title2,.title3{
        font-size: 0.35rem;
        color: #a1a1a1;
    }
    .title4{
        font-size: 0.45rem;
        color: #dd001b;
        margin-top: 0.4rem;
    }
</style>


