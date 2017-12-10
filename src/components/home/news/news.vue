<template>
  <div class="mui-content">
      <ul class="mui-table-view">
    <li class="mui-table-view-cell mui-media" v-for="(item,index) in newslist" :key="item.id">
        <router-link :to="'/newsdetail/'+ item.id"></router-link>
            <img class="mui-media-object mui-pull-left" :src="item.img_url">
            <div class="mui-media-body">
                  {{item.title}}
                <p class='mui-ellipsis'>
                <span>发表时间：{{item.add_time}}</span>
                <span>点击数:{{item.click}}</span>
                </p>
            </div>
       
    </li>
    
</ul>
  </div>
</template>
<script>
    export default{
         data(){
             return{
               newslist:[]
             }
         },
         created:function(){
             this.getnewslist();
         },
           methods:{
            getnewslist(){
            this.$http.get('/api/getnewslist')
            .then((response)=>{
                // console.log(response)               
                this.newslist=response.data.message;
            })
            .catch((err)=>{
             console.log('请求服务器失败')
            })
            }
         }
        
    }
</script>
<style scoped>
.mui-media-body{
    font-size:15px;
}
.mui-ellipsis{
font-size:12px;
color:#0094ff;
display: flex;
justify-content: space-between;
}
</style>
