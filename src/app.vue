<template>
<div calss="mui-cotainer">
    <header class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">首页</h1>
	</header>

     <nav class="mui-bar mui-bar-tab">
         <router-link class="mui-tab-item mui-active" to="/home">
                <span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
         </router-link>
         <router-link class="mui-tab-item" to="/member">
                <span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">消息</span>
         </router-link>
		<router-link class="mui-tab-item" to="/cart">
                <span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">通讯录</span>
        </router-link>
			<router-link  class="mui-tab-item" to="/search">
              <span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
            </router-link>
		
	</nav>

    <router-view></router-view>
  
</div>

</template>
<script>
    export default{
       
    }
</script>

<style scoped>
 
</style>
