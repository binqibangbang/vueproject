<template>

<div class="mui-content">
<!-- 轮播图 -->
 <swipe></swipe>
<!-- 9宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
	<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"   v-for="(item,index) in menus" :key="index">
		<router-link :to='item.url'>
            <span class="mui-icon" v-bind:class="item.className"></span>
		     <div class="mui-media-body">{{item.title}}</div>			
		</router-link>		
		</li>
   </ul>
</div>

</template>

<script>

import swipe from '../common/swipe.vue';

//es6的模块语法 输出一个模块
    export default{
   data(){
       return {
           menus:[],
       }
   },
   created:function(){
	  this.getmenus();
   },
   methods:{
      getmenus:function(){
		  const data_obj={"status":0,"message":[{"title":"新闻资讯","url":"/news","className":"icon-news"},{"title":"图片分享","url":"/share","className":"icon-share"},{"title":"商品购买","url":"/buy","className":"icon-buy"},{"title":"留言反馈","url":"/message","className":"icon-feedback"},{"title":"视频专区","url":"/vedio","className":"icon-video"},{"title":"联系我们","url":"/connect","className":"icon-contact"}]}
		  this.menus=data_obj.message;
	  }	 
   },
   components:{
	   swipe:swipe
   }  
    }
</script>

<style scoped>
.mt-swipe {
		height: 300px;
	}
	.mt-swipe img{
		width:100%;
		height:100%;
	}

.mui-icon{
	width:100px;
	height: 100px;
	/* border-radius: 50%; */
	background-repeat: round; 
	/* 居中 */
}
.icon-news {
        background-image: url(../../../static/images/menu1.png);
    }
    
.icon-share {
        background-image: url(../../../static/images/menu2.png);
    }
    
.icon-buy {
        background-image: url(../../../static/images/menu3.png);
    }
    
.icon-feedback {
        background-image: url(../../../static/images/menu4.png);
    }
    
.icon-video {
        background-image: url(../../../static/images/menu5.png);
    }
    
.icon-contact {
        background-image: url(../../../static/images/menu6.png);
    }
.mui-grid-view.mui-grid-9 {
        background-color: #fff;
    }
    
</style>

