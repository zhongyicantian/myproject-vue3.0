<template>
  <div>
    <p>节流</p>
    <div class="app">
      <input type="text" v-model.lazy="test" />
      节流：{{ test }}<br />
    </div>
    <p>控制条</p>
    <div class="center">
      <progress value="0" max="100"></progress>
      <form action="" oninput="val.value = parseInt(range.value)+ `%`">
        <input type="range" id="range" value="0" min="0" max="100" @mousemove="valMove" />
        <output name="val" for="range">0%</output>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'kongzhitiao',
  data () {
    return {
      test: 0
    }
  },
  methods: {
    move () {
      let flag = true
      if (flag) {
        setTimeout(() => {
          this.test++
        }, 1000)
        flag = true
      }
      flag = false
    },
    valMove () {
      const ran = document.querySelector('#range')
      const pro = document.querySelector('progress')
      const output = document.querySelector('output')
      var ranval = ran.value
      pro.setAttribute('value', `${ranval}`)
      output.style.left = `calc(${ranval}% - 50px)`
    }
  }
}
</script>
<style scoped>
.app {
  width: 90vw;
  height: 20vh;
  color: #000;
  font-family: "黑体";
  font-weight: bold;
  font-size: 30px;
  line-height: 90px;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
}
progress {
  -webkit-appearance: none;
  margin: 0;
  width: 50vw;
  height: 50px;
  border: 2px solid #114514;
  border-radius: 15px;
  overflow: hidden;
}
progress::-webkit-progress-bar {
  background: #f2f2f2;
  border-radius: 15px;
}
progress::-webkit-progress-value {
  background: linear-gradient(red, yellow);
  border-radius: 15px;
}

form {
  position: relative;
}
input[type="range"] {
  margin: 0;
  width: 50vw;
  height: 15px;
  position: relative;
  font-size: 40px;
}
output {
  position: absolute;
  font-size: 40px;
  left: 10%;
  transform: translateX(-50%);
  top: -45px;
  border-radius: 5px;
}
input[type="range"]::before,
input[type="range"]::after {
  position: absolute;
  display: inline-block;
  color: #666;
}
input[type="range"]::before {
  content: attr(min);
  left: -10px;
  transform: translate(-100%, -40%);
}
input[type="range"]::after {
  content: attr(max);
  right: -10px;
  transform: translate(100%, -40%);
}
</style>
