<template>
  <div class="mui-content">
          <div class="title">
                <ul :style="width">
                    <li>
                        <a @click.prevent="getimages(-1)" href="javascript:void(0)">全部</a>
                    </li>
                    <li v-for="item in datalist" :key="item.id">
                        <a @click.prevent="getimages(item.id)" href="javascript:;">{{item.title}}</a>
                    </li>
                    
                </ul>
          </div>
          <div class="images">
      <ul>
          <li v-for="(item,index) in imagedata" :key="index">
              <router-link :to="'/sharedetail/'+item.id">
                  <img :src="item.img_url" alt="">
                  <!-- 注意：  :src -->
                  <p class="cover">
                      <span>{{item.title}}</span><br>
                      {{item.zhaiyao}}
                  </p>
             </router-link>

          </li>
         
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      datalist: [],
      width: "width:600px",
      imagedata: []
    };
  },
  created: function() {
    this.getimgcategory();
    this.getimages(-1);
  },
  methods: {
    getimgcategory() {
      this.$http
        .get("/api/getimgcategory")
        .then(response => {
          //   console.log("aa");
          //   console.log(response);
          this.datalist = response.data.message;
          this.width = "width :" + (this.datalist.length * 78 + 50) + "px";
        })
        .catch(err => {
          console.log(err);
        });
    },
    getimages(id) {
      var url = "/api/getimages/" + id;
      console.log(url);
      this.$http
        .get(url)
        .then(response => {
          if (response.status == 200 && response.data.status == 0) {
            console.log(99);
            console.log(response);
            this.imagedata = response.data.message;
          } else {
            console.log("服务器内部错误");
          }
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.title {
  overflow-x: auto;
  overflow-y: hidden;
}

.title > ul {
  width: 1000px;
}
/* webkit核心的浏览器 隐藏滚动条 */
::-webkit-scrollbar {
  display: none;
}

.title > ul > li {
  display: inline-block;
  padding: 20px 5px;
}

.images {
  margin-top: 10px;
}

.images > ul {
}

.images img {
  height: 300px;
  width: 100%;
}

.images > ul > li {
  position: relative;
}

.images .cover > span {
  font-weight: bold;
}

.images .cover {
  color: #fff;
  position: absolute;
  left: 0px;
  bottom: 0px;
  background-color: rgba(92, 92, 92, 0.4);
  width: 100%;
  margin-bottom: 5px;
}
</style>