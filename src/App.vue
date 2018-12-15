<template>
  <div class="app">
    <m-header :seller = "seller"></m-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link :to="{path: '/goods'}">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{path: '/ratings'}">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{path: '/seller'}">商家</router-link>
      </div>
    </div>
    <!-- keep-alive 缓存状态 切换不会触发watch和api调用 -->
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
 /* eslint-disable */
// import axios from 'axios'
import MHeader from 'components/m-header/m-header.vue'

export default {
  name: 'mapp',
  components: {
    MHeader
  },
  data() {
    return {
      seller:{}
    }
  },
  created(){
  },
  mounted(){
    this.$nextTick(()=>{
      this.$axios.get('static/data.json').then((res)=>{
        this.seller = res.data.seller;
        // window.evenBus.$emit('seller',this.seller);
      });

    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "./common/stylus/mixin.styl"
.tab 
  display: flex
  width: 100%
  height: 40px
  line-height: 40px
  // @include border-1px(rgba(7, 17, 27, 0.1))
  .tab-item 
    flex: 1
    text-align: center
    display: block
    font-size: 14px
    color: rgb(77, 85, 93)
  .active 
    color: rgb(240, 20, 20)
    
  
</style>
