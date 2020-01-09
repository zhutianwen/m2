<template>
    <div class="diantai">
        <div class="diantai-top">
            <span @click="prev" class="iconfont icon-zuojiantou"></span> &nbsp;&nbsp;
            <span class="diantai">电台</span>
        </div>
        <!--  -->
        <div class="swiper-container swiper1">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in djList" :key="index">
                    <img :src="item.pic" alt="">
                    <div class="typeTitle">
                        {{item.typeTitle}}
                    </div>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <!--  -->
        <div class="diantai-item">
            <div class="diantai-div">
                <i class="iconfont icon-fenlei"></i>
                <span>电台分类</span>
            </div>
            <div class="diantai-div" @click="goDjpai">
                <i class="iconfont icon-paixing"></i>
                <span>电台排行</span>
            </div>
            <div class="diantai-div" @click="goFufei">
                <i class="iconfont icon-jingpin"></i>
                <span>付费精品</span>
            </div>
            <div class="diantai-div">
                <i class="iconfont icon-shu"></i>
                <span>主播学院</span>
            </div>
        </div>
        <!--  -->
        <div style="border:0.5px solid #f4e5d3;margin-top:0.5rem;"></div>
        <!--电台推荐  -->
        <div class="tuijian-daintai">
            <div class="tuijian-top">
                <div class="recommoned-diantai">电台推荐</div>
                <div class="change">
                    <span class="iconfont icon-huanyihuan"></span>
                    换一换
                </div>
            </div>
            <div class="three-div">
                <div class="item-div" v-for="(item,index) in recomList" :key="index">
                    <img v-lazy="item.picUrl" alt="">
                    <span class="dj-name">{{item.name}}</span>
                    <div class="diantia-text">{{item.lastProgramName}}</div>
                </div>     
            </div>
        </div>
        <!-- 精品推荐 -->
        <div class="jingpin-tuijan">
            <div class="jingpin-top">
                <div class="recommoned-diantai">精品推荐</div>
                <div class="change">
                    全部精品
                </div>
            </div>
            <div class="three-div">
                <div class="item-div" v-for="(item,index) in fufeiList" :key="index">
                    <img v-lazy="item.picUrl" alt="">
                    <span class="dj-name">{{item.name}}</span>
                    <div class="diantia-text">{{item.lastProgramName}}</div>
                </div>     
            </div>
        </div>
        <!-- 创作|翻唱 -->
        <div class="creation">
            <div class="jingpin-top">
                <div class="recommoned-diantai">创作|翻唱 ></div>
                <div class="change">
                    <span class="iconfont icon-bofang"></span>
                    全部精品
                </div>
            </div>
            <div class="ul-list" v-for="(item,index) in chuangzuoList" :key="index" v-if="index<4">
                <div class="li-list1">
                    <img v-lazy="item.picUrl" alt="">
                </div>
                <div class="li-list2">
                    <div class="chuangzuo-name">{{item.name}}</div>
                    <div class="dec">
                        <span class="dec-img">
                            <img v-lazy="item.dj.avatarUrl" alt="">
                        </span>
                        <span>{{item.dj.nickname}} |</span>
                        <span>
                            <span class="iconfont icon-remen"></span>
                            {{ transNumber(item.subCount,1) }}
                        </span>
                    </div>
                </div>
                <div class="li-list3">
                    <i class="iconfont icon-bofangkaishishipinyuanxingxianxing"></i>
                </div>
            </div>
        </div>
        <!-- 有声书 -->
        <div class="audio-book">
            <div class="jingpin-top">
                <div class="recommoned-diantai">有声书 ></div>
            </div>
            <div class="three-div">
                <div class="item-div" v-for="(item,index) in novelList" :key="index" v-if="index<3">
                    <img v-lazy="item.picUrl" alt="">
                    <span class="dj-name">{{item.name}}</span>
                    <div class="diantia-text">{{item.rcmdtext}}</div>
                </div>     
            </div>
        </div>
        <!-- 情感调频 -->
        <div class="creation">
            <div class="jingpin-top">
                <div class="recommoned-diantai">情感调频 ></div>
                <div class="change">
                    <span class="iconfont icon-bofang"></span>
                    播放全部
                </div>
            </div>
            <div class="ul-list" v-for="(item,index) in qingganList" :key="index" v-if="index<4">
                <div class="li-list1">
                    <img v-lazy="item.picUrl" alt="">
                </div>
                <div class="li-list2">
                    <div class="chuangzuo-name">{{item.name}}</div>
                    <div class="dec">
                        <span class="dec-img">
                            <img v-lazy="item.dj.avatarUrl" alt="">
                        </span>
                        <span>{{item.dj.nickname}} |</span>
                        <span>
                            <span class="iconfont icon-remen"></span>
                            {{ transNumber(item.subCount,1) }}
                        </span>
                    </div>
                </div>
                <div class="li-list3">
                    <i class="iconfont icon-bofangkaishishipinyuanxingxianxing"></i>
                </div>
            </div>
        </div>
    <!-- 广播剧 -->
         <div class="audio-book">
            <div class="jingpin-top">
                <div class="recommoned-diantai">广播剧 ></div>
            </div>
            <div class="three-div">
                <div class="item-div" v-for="(item,index) in gunagbojuList" :key="index" v-if="index<3">
                    <img v-lazy="item.picUrl" alt="">
                    <span class="dj-name">{{item.name}}</span>
                    <div class="diantia-text">{{item.rcmdtext}}</div>
                </div>     
            </div>
        </div>
        <!-- 音乐故事 -->
        <div class="musci-story">
            <div class="jingpin-top">
                <div class="recommoned-diantai">音乐故事 ></div>
                <div class="change">
                    <span class="iconfont icon-bofang"></span>
                    播放全部
                </div>
            </div>
            <div class="ul-list" v-for="(item,index) in musciList" :key="index" v-if="index<4">
                <div class="li-list1">
                    <img v-lazy="item.picUrl" alt="">
                </div>
                <div class="li-list2">
                    <div class="chuangzuo-name">{{item.name}}</div>
                    <div class="dec">
                        <span class="dec-img">
                            <img v-lazy="item.dj.avatarUrl" alt="">
                        </span>
                        <span>{{item.dj.nickname}} |</span>
                        <span>
                            <span class="iconfont icon-remen"></span>
                            {{ transNumber(item.subCount,1) }}
                        </span>
                    </div>
                </div>
                <div class="li-list3">
                    <i class="iconfont icon-bofangkaishishipinyuanxingxianxing"></i>
                </div>
            </div>
        </div>
        <!--娱乐|影视  -->
        <div class="movies">
            <div class="jingpin-top">
                <div class="recommoned-diantai">娱乐|影视 ></div>
            </div>
            <div class="three-div">
                <div class="item-div" v-for="(item,index) in moviesList" :key="index" v-if="index<3">
                    <img v-lazy="item.picUrl" alt="">
                    <span class="dj-name">{{item.name}}</span>
                    <div class="diantia-text">{{item.rcmdtext}}</div>
                </div>     
            </div>
        </div>
        <!-- 3D 电子 -->
        <div class="three-d">
            <div class="jingpin-top">
                <div class="recommoned-diantai">3D|电子 ></div>
                <div class="change">
                    <span class="iconfont icon-bofang"></span>
                    播放全部
                </div>
            </div>
            <div class="ul-list" v-for="(item,index) in threeDlist" :key="index" v-if="index<4">
                <div class="li-list1">
                    <img v-lazy="item.picUrl" alt="">
                </div>
                <div class="li-list2">
                    <div class="chuangzuo-name">{{item.name}}</div>
                    <div class="dec">
                        <span class="dec-img">
                            <img v-lazy="item.dj.avatarUrl" alt="">
                        </span>
                        <span>{{item.dj.nickname}} |</span>
                        <span>
                            <span class="iconfont icon-remen"></span>
                            {{ transNumber(item.subCount,1) }}
                        </span>
                    </div>
                </div>
                <div class="li-list3">
                    <i class="iconfont icon-bofangkaishishipinyuanxingxianxing"></i>
                </div>
            </div>
        </div>
        <!-- 美文 读物 -->
        <div class="read-story">
            <div class="jingpin-top">
                <div class="recommoned-diantai">美文读物 ></div>
            </div>
            <div class="three-div">
                <div class="item-div" v-for="(item,index) in readyList" :key="index" v-if="index<3">
                    <img v-lazy="item.picUrl" alt="">
                    <span class="dj-name">{{item.name}}</span>
                    <div class="diantia-text">{{item.rcmdtext}}</div>
                </div>     
            </div>
        </div>
        <!-- 二次元 -->
        <div class="erci-yuan">
            <div class="jingpin-top">
                <div class="recommoned-diantai">二次元 ></div>
                <div class="change">
                    <span class="iconfont icon-bofang"></span>
                    播放全部
                </div>
            </div>
            <div class="ul-list" v-for="(item,index) in erciList" :key="index" v-if="index<4">
                <div class="li-list1">
                    <img v-lazy="item.picUrl" alt="">
                </div>
                <div class="li-list2">
                    <div class="chuangzuo-name">{{item.name}}</div>
                    <div class="dec">
                        <span class="dec-img">
                            <img v-lazy="item.dj.avatarUrl" alt="">
                        </span>
                        <span>{{item.dj.nickname}} |</span>
                        <span>
                            <span class="iconfont icon-remen"></span>
                            {{ transNumber(item.subCount,1) }}
                        </span>
                    </div>
                </div>
                <div class="li-list3">
                    <i class="iconfont icon-bofangkaishishipinyuanxingxianxing"></i>
                </div>
            </div>
        </div>
        <!-- 脱口秀 -->
        <div class="talk-show">
            <div class="jingpin-top">
                <div class="recommoned-diantai">脱口秀 ></div>
            </div>
            <div class="three-div">
                <div class="item-div" v-for="(item,index) in talkShow" :key="index" v-if="index<3">
                    <img v-lazy="item.picUrl" alt="">
                    <span class="dj-name">{{item.name}}</span>
                    <div class="diantia-text">{{item.rcmdtext}}</div>
                </div>     
            </div>
        </div>
        <!-- 知识技能 -->
        <div class="knowledge">
            <div class="jingpin-top">
                <div class="recommoned-diantai">知识技能 ></div>
            </div>
            <div class="three-div">
                <div class="item-div" v-for="(item,index) in knowledge" :key="index" v-if="index<3">
                    <img v-lazy="item.picUrl" alt="">
                    <span class="dj-name">{{item.name}}</span>
                    <div class="diantia-text">{{item.rcmdtext}}</div>
                </div>     
            </div>
        </div>
        <!-- 商业财经 -->
        <div class="businessfinance">
            <div class="jingpin-top">
                <div class="recommoned-diantai">商业财经 ></div>
            </div>
            <div class="three-div">
                <div class="item-div" v-for="(item,index) in businessfinance" :key="index" v-if="index<3">
                    <img v-lazy="item.picUrl" alt="">
                    <span class="dj-name">{{item.name}}</span>
                    <div class="diantia-text">{{item.rcmdtext}}</div>
                </div>     
            </div>
        </div>
        <!-- 人文历史 -->
        <div class="history">
            <div class="jingpin-top">
                <div class="recommoned-diantai">人文历史 ></div>
            </div>
            <div class="three-div">
                <div class="item-div" v-for="(item,index) in history" :key="index" v-if="index<3">
                    <img v-lazy="item.picUrl" alt="">
                    <span class="dj-name">{{item.name}}</span>
                    <div class="diantia-text">{{item.rcmdtext}}</div>
                </div>     
            </div>
        </div>
        <!-- 外语世界 -->
        <div class="foreignLanguages">
            <div class="jingpin-top">
                <div class="recommoned-diantai">外语世界 ></div>
            </div>
            <div class="three-div">
                <div class="item-div" v-for="(item,index) in foreignLanguages" :key="index" v-if="index<3">
                    <img v-lazy="item.picUrl" alt="">
                    <span class="dj-name">{{item.name}}</span>
                    <div class="diantia-text">{{item.rcmdtext}}</div>
                </div>     
            </div>
        </div>
        <!-- 亲子宝贝 -->
        <div class="baby">
            <div class="jingpin-top">
                <div class="recommoned-diantai">亲子宝贝 ></div>
            </div>
            <div class="three-div">
                <div class="item-div" v-for="(item,index) in babyList" :key="index" v-if="index<3">
                    <img v-lazy="item.picUrl" alt="">
                    <span class="dj-name">{{item.name}}</span>
                    <div class="diantia-text">{{item.rcmdtext}}</div>
                </div>     
            </div>
        </div>
        <!-- 曲艺 -->
        <div class="quyi">
            <div class="jingpin-top">
                <div class="recommoned-diantai">相声曲艺 ></div>
            </div>
            <div class="three-div">
                <div class="item-div" v-for="(item,index) in quyiList" :key="index" v-if="index<3">
                    <img v-lazy="item.picUrl" alt="">
                    <span class="dj-name">{{item.name}}</span>
                    <div class="diantia-text">{{item.rcmdtext}}</div>
                </div>     
            </div>
        </div>
        <!-- 旅途 城市 -->
        <div class="city">
            <div class="jingpin-top">
                <div class="recommoned-diantai">旅途|城市 ></div>
            </div>
            <div class="three-div">
                <div class="item-div" v-for="(item,index) in cityList" :key="index" v-if="index<3">
                    <img v-lazy="item.picUrl" alt="">
                    <span class="dj-name">{{item.name}}</span>
                    <div class="diantia-text">{{item.rcmdtext}}</div>
                </div>     
            </div>
        </div>
        <!-- 热门分类 -->
        <div class="hot-fenlei">
            <div class="hot-fenlei-title">
                热门分类
            </div>
           
            
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper'

export default {
    data(){
        return{
            djList:[],
            recomList:[],
            fufeiList:[],
            chuangzuoList:[],
            novelList:[],
            qingganList:[],
            gunagbojuList:[],
            musciList:[],
            moviesList:[],
            threeDlist:[],
            readyList:[],
            erciList:[],
            talkShow:[],
            knowledge:[],
            businessfinance:[],
            history:[],
            foreignLanguages:[],
            babyList:[],
            quyiList:[],
            cityList:[],
        }
    },
    created(){
        this.getDjbanner();
        this.getRecomdj();
        this.getFufei();
        this.getChuangzuo();
        this.getNovel();
        this.getQing();
        this.getgunagboju();
        this.getMusci();
        this.getMovies();
        this.getThreed();
        this.getReady();
        this.getErci();
        this.getTalkshow();
        this.getKnowledge();
        this.getBusiness();
        this.getHistory();
        this.getforeignLanguages();
        this.getBaby();
        this.getQuyi()
        this.getCity();
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
        getDjbanner(){
            this.$axios.get('/dj/banner').then((res)=>{
                this.djList = res.data.data
                // console.log(this.djList)
                this.$nextTick(()=>{
                    this.dJbanner()
                })
            }).catch((err)=>{
                console.log(err)
            })
        },
        getRecomdj(){
            this.$axios.get('/dj/today/perfered').then((res)=>{
                this.recomList = res.data.data
                // console.log(this.recomList)
            }).catch((err)=>{
                console.log(err)
            })
        },
        getFufei(){
            this.$axios.get('/dj/paygift?limit=3&offset=20').then((res)=>{
                // console.log(res)
                this.fufeiList = res.data.data.list
                // console.log(this.fufeiList)
            }).catch((err)=>{
                console.log(err)
            })
        },
        getChuangzuo(){
            this.$axios.get('/dj/recommend/type?type=2001').then((res)=>{
                this.chuangzuoList = res.data.djRadios
                // console.log(this.chuangzuoList)
            }).catch((err)=>{
                console.log(err)
            })
        },
        getNovel(){//获取小说
            this.$axios.get('/dj/recommend/type?type=10001').then((res)=>{
                this.novelList = res.data.djRadios
                // console.log('小说',this.novelList)
            }).catch((err)=>{
                console.log(err)
            })
        },
        getQing(){//情感调频
            this.$axios.get('/dj/recommend/type?type=3').then((res)=>{
                this.qingganList = res.data.djRadios
                // console.log(this.qingganList)
            }).catch((err)=>{
                console.log(err)
            })
        },
        getgunagboju(){//广播剧
            this.$axios.get('/dj/recommend/type?type=7').then((res)=>{
                // console.log(res)
                this.gunagbojuList = res.data.djRadios
            }).catch((err)=>{
                console.log(err)
            })
        },
        getMusci(){//情感故事
            this.$axios.get('/dj/recommend/type?type=2').then((res)=>{
                // console.log(res)
                this.musciList = res.data.djRadios
            }).catch((err)=>{
                console.log(err)
            })
        },
        getMovies(){//娱乐影视
            this.$axios.get('/dj/recommend/type?type=4').then((res)=>{
                // console.log(res)
                this.moviesList = res.data.djRadios
            }).catch((err)=>{
                console.log(err)
            })
        },
        getThreed(){//3D 电子
            this.$axios.get('/dj/recommend/type?type=10002').then((res)=>{
                // console.log(res)
                this.threeDlist = res.data.djRadios
            }).catch((err)=>{
                console.log(err)
            })
        },
        getReady(){//美文 读物
            this.$axios.get('/dj/recommend/type?type=6').then((res)=>{
                // console.log(res)
                this.readyList = res.data.djRadios
            }).catch((err)=>{
                console.log(err)
            })
        },
        getErci(){//二次元
            this.$axios.get('/dj/recommend/type?type=3001').then((res)=>{
                // console.log(res)
                this.erciList = res.data.djRadios
            }).catch((err)=>{
                console.log(err)
            })
        },
        getTalkshow(){//脱口秀
            this.$axios.get('/dj/recommend/type?type=5').then((res)=>{
                // console.log(res)
                this.talkShow = res.data.djRadios
            }).catch((err)=>{
                console.log(err)
            })
        },
        getKnowledge(){//知识技能
            this.$axios.get('/dj/recommend/type?type=453050').then((res)=>{
                // console.log(res)
                this.knowledge = res.data.djRadios
            }).catch((err)=>{
                console.log(err)
            })
        },
        getBusiness(){//商业财经
            this.$axios.get('/dj/recommend/type?type=453051').then((res)=>{
                // console.log(res)
                this.businessfinance = res.data.djRadios
            }).catch((err)=>{
                console.log(err)
            })
        },
        getHistory(){//人文历史
            this.$axios.get('/dj/recommend/type?type=11').then((res)=>{
                // console.log(res)
                this.history = res.data.djRadios
            }).catch((err)=>{
                console.log(err)
            })
        },
        getforeignLanguages(){//外语世界
            this.$axios.get('/dj/recommend/type?type=13').then((res)=>{
                // console.log(res)
                this.foreignLanguages = res.data.djRadios
            }).catch((err)=>{
                console.log(err)
            })
        },
        getBaby(){//亲子宝贝
            this.$axios.get('/dj/recommend/type?type=14').then((res)=>{
                // console.log(res)
                this.babyList = res.data.djRadios
            }).catch((err)=>{
                console.log(err)
            })
        },
        getQuyi(){//相声曲艺
            this.$axios.get('/dj/recommend/type?type=8').then((res)=>{
                // console.log(res)
                this.quyiList = res.data.djRadios
            }).catch((err)=>{
                console.log(err)
            })
        },
        getCity(){//旅途城市
            this.$axios.get('/dj/recommend/type?type=12').then((res)=>{
                // console.log(res)
                this.cityList = res.data.djRadios
            }).catch((err)=>{
                console.log(err)
            })
        },
        goDjpai(){
            this.$router.push({
                path:'/djpaihang'
            })
        },
        goFufei(){
            this.$router.push({
                path:'/fufei'
            })
        },
        dJbanner(){
                var mySwiper = new Swiper('.swiper1',{
                direction:'horizontal',
                loop: true, 
                initialSlide :0,
                observer:true,//修改swiper自己或子元素时，自动初始化swiper
                observeParents:true,//修改swiper的父元素时，自动初始化swiper
                spaceBetween: 40,
                autoplay:{
                disableOnInteraction: false,
                delay:4000
                },
                pagination: {
                    el: '.swiper-pagination',
                },
            })
        },
        prev(){
            this.$router.go(-1)
        },
    },
}
</script>

<style>
 @import '../../node_modules/swiper/css/swiper.min.css';   
    .diantai-top{
        position: fixed;
        top: 0;
        background: #fff;
        z-index: 9;
        width: 100%;
        padding: 0.2rem 0.2rem;
    }
    .icon-zuojiantou{
        padding-left:0.5rem; 
        font-size: 0.7rem;
    }
    .diantai{
        font-size: 0.5rem;
    }
    .swiper1{
        height: 3.5rem;
        width: 90%;
        margin-top: 1.2rem;
        border-radius: 8px;
    }
    .swiper1 .swiper-slide img{
        border-radius: 8px;
    }
    .swiper1 .swiper-pagination-bullet-active{
        background: #ea2222
    }
    .swiper1 .swiper-pagination-bullet{
        width: 7px;
        height: 7px;
    }
    .swiper1 .swiper-slide{
        position: relative;
    }
    .typeTitle{
        font-size: 0.35rem;
        color: #fff;
        position: absolute;
        bottom: 0;
        right: 0;
        background: #ae0a0a;
        padding: 0.01rem 0.09rem;
        height: 0.7rem;
        line-height: 0.7rem;
        text-align: center;
        border-top-left-radius:8px; 
        border-bottom-right-radius:8px;
    }
    .diantai-item{
        width: 90%;
        margin: 0 auto;
        margin-top: 0.6rem;
        display: flex;
        justify-content:space-between
    }
    
    .icon-fenlei,.icon-paixing,.icon-jingpin,.icon-shu{
        display: block;
        width: 1.5rem;
        height: 1.5rem;
        text-align: center;
        line-height: 1.5rem;
        color: #fff;
        font-size: 0.7rem;
        background: #ff5252;
        border: 1px solid;
        border-radius:50%; 
    }
    .diantai-item span{
        display: block;
        font-size: 0.35rem;
        margin-top: 0.35rem;
    } 
    .tuijian-daintai{
        margin-top: 0.8rem
    }
    .tuijian-top,.jingpin-top,.hot-fenlei-title{
        width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
    .recommoned-diantai{
        font-size: 0.45rem;
        font-weight: bold;
    }
    .change{
        width: 2.2rem;
        height: 0.7rem;
        text-align: center;
        line-height: 0.7rem;
        border: 1px solid #ccc;
        border-radius: 15px;
    }
    .change,.icon-huanyihuan,.icon-bofang{
        font-size: 0.35rem;   
    }
    .three-div{
        width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
    .item-div{
        position: relative;
        width:31%;
        margin-top: 0.5rem;
    }
    .item-div img{
        border-radius:8px; 
    }
    .dj-name{
        position: absolute;
        bottom:1.1rem;
        left: 0.1rem;
        font-size: 0.05rem;
        color:#fff; 
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
    }
    .diantia-text{
        font-size: 0.32rem;
        text-align: left;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }
    .jingpin-tuijan{
        margin-top: 0.8rem;
    }
    
    .dian-icon{
        color: #ccc;
        font-size: 0.8rem;
        line-height: 1.5rem;
        float: right;
    }
    .creation-name{
        font-size: 0.45rem;
        margin-bottom: 0.2rem;
    }
    .jingpin-top{
        margin-top: 0.8rem;
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
    .li-list2{
        width: 60%;
    }
    .li-list3{
        width: 10%;
    }
    .li-list1 img{
        border-radius: 5px;
    }
    .chuangzuo-name{
        font-size: 0.4rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
    }
    .dec{
        font-size: 0.4rem;
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
    .hot-fenlei{
        margin-top:0.8rem;
    }
    .hot-fenlei-title{
        font-size: 0.45rem;
        font-weight: bold;
    }
</style>


