<template>
  <div>
    <nut-swiper :pagination-visible="true" :loop="true" direction="horizontal">
      <div v-for="(item,index) in dataItem" :key="index" class="nut-swiper-slide">
        <span>page{{ item.name }}</span>
      </div>
    </nut-swiper>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      dataItem: [
        { name: 1 },
        { name: 1 },
        { name: 1 },
        { name: 1 }
      ]
    }
  }
}
</script>

