<template>
  <div class="cartcontrol">
    <transition>
      <div class="cart-decrease" @click.stop="decreaseCart" v-show="food.count>0">
        <div class="inner icon-remove_circle_outline"></div>
      </div>
    </transition>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click.stop="addCart"></div>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    name: 'cartcontrol',
    props: {
      food: {
        type: Object,
        default: 0
      }
    },
    data () {
      return {};
    },
    created () {
      // console.log(this.food)
    },
    methods: {
      addCart (event) {
        // 如果不是派发的 而是浏览自身的
        if(!event._constructed) {
          return;
        }
        if(!this.food.count) {
          this.$set(this.food, 'count', 1);
          // this.food.count = 1;   // 必须使用$set this.food才能是响应式
        } else {
          this.food.count++;
        }
        // 子组件通过 $emit触发父组件的方法 increment
        this.$emit('increment', event.target);
      },
      decreaseCart (event) {
        // 如果不是派发的 而是浏览自身的
        if(!event._constructed) {
          return;
        }
        this.food.count--;
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    font-size: 0
    .cart-decrease, .cart-add
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)
    .cart-decrease
      position: relative
      z-index: 0
      transition: all 1s linear
      opocity: 0
      transform: translate3D(0, 0, 0)
      .inner
        color: rgb(0, 160, 220)
        transition: all .4s linear
      &.v-enter-active, &.v-leave-active
        transition: all .4s linear
      &.v-enter, &.v-leave-active //刚进入和离开后的状态
        opacity: 0
        transform: translateX(36px)
        .inner
          transform: rotate(180deg)
    .cart-count
      display: inline-block
      width: 12px
      text-align: center
      font-size: 14px
      vertical-align: top
      margin-top: 12px
    .cart-add
      display: inline-block
      position: relative
      z-index: 1
</style>
