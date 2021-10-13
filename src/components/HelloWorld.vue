<template>
  <split-carousel v-bind="option">
    <split-carousel-item v-for="(items, index) in list" :key="index" class="items">
      <img :src="items.url" alt="" class="box">
    </split-carousel-item>
  </split-carousel>
</template>

<script>
const config = {
  displayAmount: 3,
  autoplay: true,
  speed: 500,
  interval: 2000,
  loop: true,
  height: 400,
  itemWidth: 405,
  pauseOnHover: true,
  timingFunction: 'ease',
  arrowVisible: 'default'
}
export default {
  name: 'HelloWorld',
  data () {
    return {
      option: { ...config },
      list: [
        { url: 'https://sdfsdf.dev/400x300.png,red,white' },
        { url: 'https://sdfsdf.dev/400x300.png,white,red' },
        { url: 'https://sdfsdf.dev/400x300.png,green,white' },
        { url: 'https://sdfsdf.dev/400x300.png,blue,white' },
        { url: 'https://sdfsdf.dev/400x300.png,red,000000' },
        { url: 'https://sdfsdf.dev/400x300.png,pink,114414' },
        { url: 'https://sdfsdf.dev/400x300.png,adadae,000000' },
        { url: 'https://sdfsdf.dev/400x300.png,purple,gold' },
        { url: 'https://sdfsdf.dev/400x300.png' },
        { url: 'https://sdfsdf.dev/400x300.png,yellow,blue' }
      ]
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.darkmode{
  .welcome{
     color: #fff;
  }
  .split-carousel__left {
  background-color: #333;
}
}
a {
  color: #42b983;
}
.box {
  border: 1px solid #333;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #aaa;
}

</style>
