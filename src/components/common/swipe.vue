<template>
  <div class="mt-swipe">
		<mt-swipe :auto="4000">
		  <mt-swipe-item class="page page1" v-for="(item,index) in url" :key="index">
			<img :src="item.img" alt="">
		  </mt-swipe-item>		 
		</mt-swipe>
</div>	
</template>

<script>
// 写活
import Vue from "vue";
import { Swipe, SwipeItem } from "mint-ui";
import "mint-ui/lib/swipe/style.css";
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
  data() {
    return {
      url: [],
      img_url: "/api/getlunbo"
    };
  },
  created: function() {
    this.carsouls(this.img_url);
  },
  methods: {
    carsouls: function(urlstr) {
      this.$http
        .get(urlstr)
        .then(response => {
          //   console.log(response)
          this.url = response.data.message;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
img{
  width:100%;
}
</style>
