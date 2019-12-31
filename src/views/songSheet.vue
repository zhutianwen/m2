<template>
    <div class="song-sheet">
        <div class="top">
            <span class="iconfont icon-zuojiantou" @click="prev"></span>
            <span class="song-sheet-title">歌单广场</span>
        </div>
        <ly-tab v-model="selectedId" :items="items" :options="options" @change="handleChange"></ly-tab>
       <router-view/>
    </div>
</template>

<script>
import $ from 'jquery'
import Swiper from 'swiper'


export default {
    data(){
        return{
            selectedId:0,
            items:[
                {label:'推荐'},
                {label:'华语'},
                {label:'流行'},
                {label:'欧美'},
                {label:'民谣'},
                {label:'韩语'},
                {label:'日语'},
            ],
            options:{
                activeColor:'#008792',
            },
            subRouteUrl:[
                '/songSheet/tuijian',
                '/songSheet/huayu',
                '/songSheet/liuxing',
                '/songSheet/oumei',
                '/songSheet/minyao',
                '/songSheet/hanyu',
                '/songSheet/riyu',
            ]
        }
    },
    created(){
        this.beforeunloadFn() 
    },
    methods:{
        handleChange(item,index){
            this.$router.replace(this.subRouteUrl[index]);
           
        },
        beforeunloadFn(e) {
            // alert(14554156125)
            this.$router.replace('/songSheet')
        },
        prev(){
            this.$router.go(-1)
        }
    },

   
}
</script>

<style>
 @import '../../node_modules/swiper/css/swiper.min.css'; 
    .top,.ly-tab{
        background: #fff;
        position: fixed;
        top: 0;
        z-index: 999;
        width: 100%;
    }
    .ly-tab{
        margin-top:0.8rem; 
    }
    .tuijian{
        margin-top:2.5rem; 
    }
    .ly-tabbar{
        cursor: pointer;
        box-shadow: 0 0 0!important
    }
    .icon-zuojiantou{
        padding-left:0.5rem; 
        font-size: 0.7rem;
    }
    .song-sheet-title{
        font-size: 0.5rem;
    }
</style>
