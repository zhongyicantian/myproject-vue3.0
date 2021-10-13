<template>
<div v-masonry transition-duration="0.3s" item-selector=".item" gutter="9">
  <div v-masonry-tile class="item" v-for="(items, index) in list" :key="items.id"><!--v-for goes here -->
    <div class="continer-item">
      <img :src="items.url"/>
      <p>{{ b1list[index] }}</p>
    </div>
  </div>
</div>
</template>
<script>
import data from './json/img.json'
export default {
  name: 'pubu',
  data () {
    return {
      list: [],
      b1list: []
    }
  },
  mounted () {
    const a = () => {
      this.list = data.img2
    }
    a()
    const b = () => {
      fetch('https://sdfsdf.dev/22s,')
        .then((response) => response.json())
        .then((b1) => {
          this.b1list = b1.data// push to array
        })
        .catch((e) => console.log('error', e))
    }
    b()
  }
}
</script>
<style lang="less">
.item {
  counter-increment: item-counter;
  .continer-item{
  @margin: 5px;
  font-family: Arial, Helvetica, sans-serif;
  @redius: 10px;
  border: 1px solid #000;
  border-radius: @redius;
  margin: @margin;
  position: relative;
  img{
  border-top-left-radius: @redius;
  border-top-right-radius: @redius;
  }
  p {
    margin-top: -1px;
    width: 200px;
  }
  &::after{
    border-top-left-radius: @redius;
    position: absolute;
    top: 0;
    display: block;
    width: 30px;
    height: 30px;
    background-color: #fff;
    color: #000;
    content: counter(item-counter);
    font-size: 25px;
  }
  }
}
</style>
