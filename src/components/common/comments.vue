<template>
<div>
<div class="comment">
        <h4>提交评论</h4>
      <div class="submitarea">
        <textarea placeholder="请输入评论内容" class="textarea" v-model="content"></textarea> 
      <button class="mui-btn mui-btn-primary" @click="send">发表</button>
      </div>
      </div>
      <div class="title"><h4>评论列表</h4></div>
    <div  class="comment">
        <div  class="wrap" v-for="(item,index) in contentlist" :key="index">
             <div class="content">{{item.content}}</div> 
             <div class="other">
                 <div class="user">{{item.user_name}}</div> 
                <div class="time">{{item.add_time}} </div>
               </div>
        </div>
        <div class="more">
            <button @click="loadmore" class="mui-btn mui-btn-primary mui-btn-outlined">加载更多</button>
      </div>
    </div>
</div>

</template>
<script>
import "mint-ui/lib/style.css";
import "../../../static/css/style.css";
import { Toast } from "mint-ui";

export default {
  props: ['id'],
  data: function() {
    return {
      contentlist: [],
      content: "",
      pageindex: 1
    };
  },
  created:function(){
   this.getcommentlist();
  },
  methods:{
       getcommentlist: function() {
      var url1 = "/api/getcomments/" + this.id + "?pageindex=" + this.pageindex;
       console.log(url1)
      this.$http
        .get(url1)
        .then(response => {
           console.log(222)
           console.log(response);
          if (response.status == 200 && response.data.status == 0) {
            // this.contentlist=response.data.message;
            this.contentlist = this.contentlist.concat(response.data.message);
            //有bug
            // console.log(111)
            // console.log(this.contentlist)
            return;
          } else {
            return "获取数据失败";
          }
        })
        .catch(err => {
          console.log("请求失败");
        });
    },
    send: function() {
      let url = "/api/postcomment/" + this.id;
      this.$http
        .post(url, "content=" + this.content) //这里涉及到post的非简单请求 axios有关
        .then(response => {
          if (response.status == 200 && response.data.status == 0) {
            //  console.log(response)
            Toast("发表评论成功");
            this.getcommentlist();
            location.reload();
            this.content = "";
            return;
          }
          alert(response.data.message);
        })
        .catch(err => {
          alert("失败");
        });
    },
    loadmore() {
      this.pageindex++;
      this.getcommentlist();
    }
  }
};
</script>
<style scoped>
.mui-btn-primary {
  width: 100%;
}
.comment {
  padding: 0 10px 0 10px;
}
.title {
  padding-left: 10px;
}
.wrap {
  border: 1px solid rgba(92, 92, 92, 0.4);
  padding: 5px;
}
.other {
  font-size: 15px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
}
.user {
  color: skyblue;
}
.mui-btn-outlined {
  margin-top: 20px;
}
</style>

