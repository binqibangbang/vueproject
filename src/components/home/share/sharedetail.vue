<template>
  <div class="mui-content">
        <div class="title">
            <h4>{{imageinfo.title}}</h4>
            <span>{{imageinfo.add_time}}</span> &nbsp;&nbsp;&nbsp;&nbsp; <span>点击次数{{imageinfo.click}}</span>
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
          {{imageinfo.content}}
        </p>

        <!-- 评论--> 
       <comment :id='id'></comment>
    </div>
</template>
<script>
import comment from "../../common/comments.vue";
export default {
  props: ['id'],
  data: function() {
    return {
      imageinfo: {},
      imagearr: []
    };
  },
  created: function() {
    this.getimageInfo();
    this.getthumimages();
  },
  methods: {
    // 获取图片
    getimageInfo() {
      var url = "/api/getimageInfo/" + this.id;
      this.$http
        .get(url)
        .then(response => {
          console.log("s");
          // console.log( response)
          this.imageinfo = response.data.message[0];
          console.log(this.imageinfo);
        })
        .catch(err => {
          console.error(err);
        });
    },
    getthumimages() {
      var url = "/api/getthumimages/" + this.id;
      this.$http
        .get(url)
        .then(response => {
          this.imagearr = response.data.message;
          // console.log( this.imagearr)
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  components:{
    comment
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
