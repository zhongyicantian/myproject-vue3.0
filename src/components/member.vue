<template>
  <div>
    <h1 :class="{darmodeText: daymode ==`黑夜模式`}">HelloWorld</h1>
    <ul>
      <li a v-for="(items, index) in datalist" :key="index">
        <div class="member">
          <!-- -->
          <div class="contener">
            <div class="name">
              name:
              {{ items.name1 }}
            </div>
            <div class="age">
              age:<br />
              {{ items.age }}
            </div>
          </div>

          <div class="image">
            <img :src="items.url" alt="" />
          </div>
          <div class="class">
            class:
            {{ items.member }}
          </div>
          <div class="member hide">
            {{ b1list[index] }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import a2 from './json/data.json'
export default {
  name: 'member',
  mounted () {
    console.log(a2)
    this.datalist = a2.infos
    const b = () => {
      fetch('https://sdfsdf.dev/20s,')
        .then((response) => response.json())
        .then((b1) => {
          //  console.log(b1.data)
          this.b1list = b1.data// push to array
        })
        .catch((e) => console.log('error', e))
    }
    b()
  },
  data () {
    return {
      datalist: [],
      b1list: []
    }
  },
  computed: {
    daymode () {
      return this.$store.state.daymode
    }
  }
}
</script>

<style lang="less">
h1.darmodeText{
  color:#fff
}
ul {
  display: flex;
  flex-wrap: wrap;
  li[a] {
  list-style: none;
  margin-left: 10px;
  font-size: 20px;
  }
}

:root {
  --width: 200px;
  --height: 200px;
}
.member {
  width: var(--width);
  height: var(--height);
  background-color: #eee;
  box-shadow: 3px 3px 10px #666;
  border-radius: 15px;
  display: flex;
  flex-wrap: wrap;
  .hide{
    position: absolute;
    background-color: rgba(0, 0, 0, 0.7);
    display: none;
    color: #fff;
  }
  &:hover .member.hide {
  transition: 1.5s;
  display: block;
  }
}

.image {
  width: calc(var(--width) / 2);
  height: calc(var(--height) / 2);
  margin: 3px;
  img {
  border-radius: 10px;
  }
}
.age,
.name {
  width: calc(var(--width) / 3);
  height: calc(var(--width) / 4);

  margin: 3px;
}
.class {
  --padding: 10px;
  width: calc(var(--width) - var(--padding));
  margin: calc(var(--padding) / 2);
  height: calc(var(--width) / 3);
  font-size: 2rem;
}
</style>
