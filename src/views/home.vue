<template>
  <div>
    <van-swipe :autoplay="3000" class="swiper" indicator-color="white">
      <van-swipe-item v-for="(item,index) in dataItem" :key="index">{{ item.name }}</van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      dataItem: [
        { name: 1 },
        { name: 2 },
        { name: 1 },
        { name: 1 }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  .swiper{
    height:400px;
  }
</style>

