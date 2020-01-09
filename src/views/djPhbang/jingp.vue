<template>
    <div class="new-people">
        <div class="hours-top">
           <span class="iconfont icon-zuojiantou" @click="prev"></span>
           <span class="newPeople">付费精品榜</span> 
        </div>
        <div style="margin-top:1.5rem;font-size:0.4rem;font-weight:bold;padding-left: 0.5rem;">
            更新时间 : {{updateTime | timeData}}
        </div>
        <div style="margin-top:0.5rem;">
             <div class="ul-list" v-for="(item,index) in jiemuList" :key="index">
                <div :class="{'red': index < 3}" class="text-style">
                    {{item.rank}}
                    <div class="new">NEW</div>
                </div> 
                <div class="li-list1">
                    <img v-lazy="item.picUrl" alt="">
                </div>
                <div class="li-list2">
                    <div class="chuangzuo-name">{{item.name}}</div>
                    <div class="dec">
                        <span>{{item.creatorName}}</span>
                        <span style="display:block">
                            <span class="iconfont icon-remen"></span>
                            <span>{{ transNumber(item.score,1) }}</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return{
            jiemuList:[],
            updateTime:'',
        }
    },
    filters: {
      timeData: function(val) {
          var date = new Date(val);
          var y = 1900 + date.getYear();
          var m = "" + (date.getMonth() + 1);
          var d = "" + date.getDate();
//           var m = "0" + (date.getMonth() + 1);
//           var d = "0" + date.getDate();
          return m.substring(m.length - 2, m.length) + "月" + d.substring(d.length - 2, d.length)+"日";
        //   return y + "-" + m.substring(m.length - 2, m.length) + "-" + d.substring(d.length - 2, d.length);  
        }
    },
    created(){
        this.getHour();
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
        prev(){
            this.$router.go(-1)
        },
        getHour(){
            this.$axios.get('/dj/toplist/pay').then((res)=>{
                this.jiemuList = res.data.data.list
                this.updateTime = res.data.data.updateTime
                // console.log(res)
                // console.log(this.jiemuList)
            }).catch((err)=>{
                console.log(err)
            })
        },
    },
}
</script>

<style>
    .hours-top{
        width: 100%;
        position: fixed;
        top: 0;
        background: #fff;
        padding: 0.2rem 0;
    }
    .icon-zuojiantou{
        padding-left: 0.5rem;
        font-size: 0.7rem;
    }
    .newPeople{
        font-size: 0.5rem;
    }
    .new{
        font-size: 0.1rem;
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
        width: 25%;
    }
    .li-list1 img{
        border-radius: 8px;
    }
    .li-list2{
        width: 58%;
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
    .icon-bofangkaishishipinyuanxingxianxing{
        font-size: 0.9rem;
        color: #ccc;
    }
    .icon-remen{
        font-size: 0.3rem;
    }
    .red{
        color: #dd001b;
    }
    .text-style{
        text-align: center;
    }
</style>

