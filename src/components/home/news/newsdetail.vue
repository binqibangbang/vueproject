<template>
  <div class="mui-content back">
      <div class="title" v-for="(item,index) in newdetail" :key='item.id'>
           <h3>{{item.title}}</h3>
           <span>2107-12-8</span>
           <span>1次浏览</span>
            <div v-html="item.content"></div>
      </div>
      <!-- 评论列表 -->
      <comment :id='id'></comment>
     
  </div>
</template>

<script>

import comment from '../../common/comments.vue';
import '../../../../static/css/style.css';
export default {
   props: ["id"],
  data: function() {   
    return {
      newdetail: [],
    };
  },
  created: function() {
    this.getnewsdetail();
  },
  methods: {
    getnewsdetail: function() {
      var url = "/api/getnew/" + this.id;
      this.$http.get(url).then(response => {
        // console.log(response);
        this.newdetail = response.data.message;
      });
    }
   
  },
  components:{
    comment:comment
  }
};
</script>

<style scoped>
.back {
  background: #fff;
}
.title h3 {
  font-size: 16px;
  font-weight: bold;
  color: #0094ff;
}
.title span {
  font-size: 12px;
  color: rgba(92, 92, 92, 0.6);
}
.textarea {
  margin-top: 10px;
  width: 100%;
}

</style>
