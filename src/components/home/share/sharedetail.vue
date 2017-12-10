<template>
  <div class="mui-content">
        <div class="title" v-for="(item,index) in imageinfo" :key="item.id">
            <h4>{{item.title}}</h4>
            <span>{{item.add_time}}</span> &nbsp;&nbsp;&nbsp;&nbsp; <span>点击次数{{item.click}}</span>
            <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for='(item,index) in imagearr' :key="index">
                <a href="#">
                   <img :src="item.src" alt="">
                </a>       
            </li>
        <!-- 注意 v-for的位置   -->
        </ul> 
        </div>

        
 
        <p class="content">
          这里是内容
        </p>

        <!-- 评论--> 
    </div>
</template>
<script>

export default {
  props: ["id"],
  data: function() {
    return {
      imageinfo:{},
      imagearr:[]
    };
  },
  created: function() {
    this.getimageInfo();
    this.getthumimages();
  },
  methods: {
    getimageInfo(){
      var url='/api/getimageInfo/'+this.id
       this.$http
        .get(url)
        .then(response=>{
            this.imageinfo=response.data.message;
            console.log('s')
            console.log( this.imageinfo)
        })
        .catch(err=>{
            console.error(err)
        })
    },
    getthumimages(){
        var url='/api/getthumimages/'+this.id
        this.$http
        .get(url)
        .then(response=>{
            this.imagearr=response.data.message;
            // console.log( this.imagearr)
        })
        .catch(err=>{
            console.error(err)
        })
    }
  }
};
</script>
<style scoped>
.mui-content {
  background-color: #fff;
}
.title {
  margin: 15px 5px;
}

.title h4 {
  color: dodgerblue;
}

.title span {
  font-size: 13px;
  color: rgba(92, 92, 92, 0.6);
}
/*9宫格样式*/

 .mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border-left: 0px;
}

.mui-table-view-cell img {
  height: 100px;
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border-right: 0px;
  border-bottom: 0px;
  padding: 0;
  margin: 0;
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell > a:not(.mui-btn) {
  padding: 0;
} 
</style>
