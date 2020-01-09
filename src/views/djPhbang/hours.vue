<template>
    <div class="new-people">
        <div>
           <span class="iconfont icon-zuojiantou" @click="prev"></span>
           <span class="newPeople">24小时新人榜</span> 
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            jiemuList:[],
        }
    },
    created(){
        this.getHour();
    },
    methods:{
        prev(){
            this.$router.go(-1)
        },
        getHour(){
            this.$axios.get('/dj/toplist/hours').then((res)=>{
                this.jiemuList = res.data.data.list
                console.log(this.jiemuList)
            }).catch((err)=>{
                console.log(err)
            })
        },
    },
}
</script>

<style>
    .icon-zuojiantou{
        padding-left: 0.5rem;
        font-size: 0.7rem;
    }
    .newPeople{
        font-size: 0.5rem;
    }

</style>

