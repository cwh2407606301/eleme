<template>
  <div class="m-header">
    <div class="content-wrapper">
    	<div class="avatar">
    		<img :src="seller.avatar" alt="">
    	</div>
    	<div class="content">
    		<div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分
        </div>
        <div v-if="seller.supports" class="support">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div class="support-count" v-if="seller.supports" @click="showDetail">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetail">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" alt="" width="100%" height="100%">
    </div>
    <transition name="fade">
    <div class="detail" v-show="detailShow">
      <div class="detail-wrapper clearfix">
        <div class="detail-main">
          <h2 class="name">{{seller.name}}</h2>
          <div class="star-wrapper">
            <star :size="48" :score="seller.score"></star>
          </div>
          <div class="title">
            <!-- span有1px问题 -->
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>
          <ul v-if="seller.supports" class="supports">
            <li class="support-item" v-for="(item,index) in seller.supports">
              <span class="icon" :class="classMap[seller.supports[index].type]"></span>
              <span class="text">{{seller.supports[index].description}}</span>
            </li>
          </ul>
          <div class="title">
            <!-- span有1px问题 -->
            <div class="line"></div>
            <div class="text">商家公告</div>
            <div class="line"></div>
          </div>
          <div class="bulletin">
            <p class="content">{{seller.bulletin}}</p>
          </div>
        </div>
      </div>
      <div class="detail-close">
        <i class="icon-close" @click="hideDetail"></i>
      </div>
    </div>
    </transition>
  </div>
</template>


<script type="text/ecmascript-6">
 /* eslint-disable */

import star from '@/components/star/star'
export default {
  name: 'mheader',
  props: {
    seller: {
      type: Object
    }
  },
  data() {
    return {
      classMap:[],
      detailShow: false
    }
  },
  created() {
    this.classMap = ['decrease','discount','special','invoice','guarantee'];
  },
  components: {
    star
  },
  methods: {
    showDetail() {
      this.detailShow = true;
    },
    hideDetail() {
      this.detailShow = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixin.styl"

.m-header
  position: relative
  overflow: hidden
  color: #fff
  background-color: rgba(7,17,27,.5)
  .content-wrapper
    display: flex
    position: relative
    padding: 24px 12px 18px 24px
    .avatar
      margin-right: 8px
      img
        width: 66px
        border-radius: 2px
    .content
      font-size: 14px
      .title
        margin: 2px 0 8px;
        .brand
          display: inline-block
          width: 30px
          height: 18px
          vertical-align: text-bottom
          bg-image('brand')
          background-size: 30px 18px
          background-repeat: no-repeat
        .name
          margin-left: 6px
          line-height: 18px
          font-size: 16px
          font-weight: bold
      .description
        margin-bottom: 10px
        line-height: 12px
        font-size: 12px
      .support
        .icon
          display: inline-block
          width: 12px
          height: 12px
          margin-right: 4px
          vertical-align: top
          background-size: 12px 12px
          background-repeat: no-repeat
          &.decrease
            bg-image('decrease_1')
          &.discount
            bg-image('discount_1')
          &.guarantee
            bg-image('guarantee_1')
          &.invoice
            bg-image('invoice_1')
          &.special
            bg-image('special_1')
        .text
          line-height: 12px
          font-size: 12px
    .support-count
      position: absolute 
      right: 12px
      bottom: 18px
      padding: 0 8px
      line-height: 24px
      border-radius: 14px   
      background-color: rgba(0, 0, 0, .2)
      text-align: center
      .count
        vertical-align: top
        font-size: 10px
      .icon-keyboard_arrow_right
        font-size: 10px
  .bulletin-wrapper
    // display: flex
    position: relative
    height: 28px
    line-height: 28px
    padding: 0 22px 0 12px
    // font-size: 0
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis
    background-color: rgba(7,17,27,.2)
    .bulletin-title
      display: inline-block
      width: 22px 
      height: 12px
      margin-top: 10px
      vertical-align: top
      bg-image('bulletin')
      background-size: 22px 12px
      background-repeat: no-repeat
    .bulletin-text
      display: inline-block
      margin:0 4px
      font-size: 10px
      // min-width: 0
    .icon-keyboard_arrow_right
      position: absolute
      right: 2px
      top: 11px
      font-size: 10px
  .background
    position: absolute
    top: 0 
    left: 0
    width: 100%
    height: 100%
    z-index: -1
    filter: blur(10px)
  .detail
    position: fixed
    z-index: 100
    width: 100%
    height: 100%
    top: 0
    bottom: 0
    overflow: hidden
    background-color: rgba(7,17,27,.8)
    backdrop-filter: blur(10px)  
    .detail-wrapper
      min-height: 100%
      width: 100%
      .detail-main
        margin-top: 64px
        padding-bottom: 64px
        .name
          line-height: 16px
          text-align: center
          font-size: 16px
          font-weight: 700
        .star-wrapper
          margin: 18px 0
          text-align: center
        .title
          display: flex
          width: 80%
          margin: 30px auto 24px;
          .line
            flex: 1
            position: relative
            top: -6px
            border-bottom: 1px solid rgba(255,255,255,.2)
          .text
            padding: 0 12px
            font-size: 14px
            font-weight: 700
        .supports
          width: 80%
          margin: 0 auto
          .support-item
            padding: 0 12px
            margin-bottom: 12px
            font-size: 0
            &:last-child
              margin-bottom: 0
            .icon
              display: inline-block
              width: 16px
              height:16px
              vertical-align: top
              margin-top: -3px
              margin-right: 6px
              background-size: 16px
              background-repeat: no-repeat
              &.decrease
                bg-image('decrease_1')
              &.discount
                bg-image('discount_1')
              &.guarantee
                bg-image('guarantee_1')
              &.invoice
                bg-image('invoice_1')
              &.special
                bg-image('special_1')
            .text
              line-height: 16px
              font-size: 12px
        .bulletin
          width: 80%
          margin: 0 auto
          .content
            padding: 0 12px
            line-height: 24px
            font-size: 12px
    .detail-close
      position: relative
      width: 32px
      height: 32px
      margin: -64px auto 0;
    // 接着为过渡类名添加规则
    &.fade-enter-active, &.fade-leave-active
      transition: all 0.5s ease     
    &.fade-enter, &.fade-leave-active
      opacity: 0 
</style>

