<template>
  <div>
    <ul class="topbar">
      <li>
        <div id="logo"></div>
      </li>
      <li v-for="(item, index) in list" :key="index">
        <router-link :to="item.router">
          <div
            class="button"
            :class="{ darkmode: daymode == `黑夜模式` }"
            @click="select1(index)"
          >
            {{ item.name }}
          </div>
          <div
            class="anibar1"
            :class="{ anibar: index === currentIndex, darkmode: daymode == `黑夜模式` }"
          ></div>
        </router-link>
      </li>
      <li>
        <div>
          <label for="change" @click="changeFun">
            <span id="chan" :class="{ darkmodeblight: daymode == `黑夜模式` }"
              >{{ daymode }}
              <div v-if="daymode == `白天模式`">
                <svg
                  t="1631776166719"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2311"
                  width="55"
                  height="55"
                >
                  <path
                    d="M512 810.666667c-164.949333 0-298.666667-133.717333-298.666667-298.666667S347.050667 213.333333 512 213.333333 810.666667 347.050667 810.666667 512 676.949333 810.666667 512 810.666667z m0-51.2c136.669867 0 247.466667-110.7968 247.466667-247.466667S648.669867 264.533333 512 264.533333 264.533333 375.330133 264.533333 512 375.330133 759.466667 512 759.466667zM512 878.933333a25.6 25.6 0 0 1 25.6 25.6v68.266667a25.6 25.6 0 0 1-51.2 0v-68.266667a25.6 25.6 0 0 1 25.6-25.6z m-295.662933-107.4688a25.6 25.6 0 0 1 36.1984 36.1984l-48.264534 48.2816a25.6 25.6 0 0 1-36.215466-36.215466z m555.127466 0a25.6 25.6 0 0 1 36.1984 0l48.2816 48.264534a25.6 25.6 0 0 1-36.215466 36.215466l-48.264534-48.2816a25.6 25.6 0 0 1 0-36.1984zM972.8 486.4a25.6 25.6 0 0 1 0 51.2h-68.266667a25.6 25.6 0 0 1 0-51.2z m-853.333333 0a25.6 25.6 0 0 1 0 51.2H51.2a25.6 25.6 0 0 1 0-51.2zM819.729067 168.055467a25.6 25.6 0 0 1 36.215466 36.215466l-48.2816 48.264534a25.6 25.6 0 0 1-36.1984-36.1984z m-651.6736 0a25.6 25.6 0 0 1 36.215466 0l48.264534 48.2816a25.6 25.6 0 0 1-36.1984 36.1984L168.055467 204.288a25.6 25.6 0 0 1 0-36.215467zM512 25.6A25.6 25.6 0 0 1 537.6 51.2v68.266667a25.6 25.6 0 0 1-51.2 0V51.2A25.6 25.6 0 0 1 512 25.6z"
                    fill="#d81e06"
                    p-id="2312"
                  ></path>
                </svg>
              </div>
              <div v-else>
                <svg
                  t="1631776698754"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="3460"
                  width="55"
                  height="55"
                >
                  <path
                    d="M803.4 738.3h-3.8c-48.2-0.5-94.9-10.1-138.9-28.7-43.6-18.4-82.8-44.8-116.5-78.4-33.7-33.6-60.1-72.7-78.5-116.3-19.1-45-28.7-92.9-28.7-142.3s9.7-97.3 28.7-142.3c12.9-30.4 29.7-58.6 50.1-84.3 8.8-11.1 18.3-21.8 28.5-31.9 2.6-2.6 5.2-5.1 7.8-7.6 15.5-14.6 6-40.7-15.3-41.9-8.2-0.4-16.5-0.7-24.8-0.7-11.6 0-23.2 0.4-34.6 1.3C245.7 82.9 63.3 276 63.3 511.6c0 247.3 200.8 447.7 448.5 447.7 128.5 0 244.4-53.9 326.1-140.4 13.7-14.4 26.4-29.8 38-45.9 12.4-17.2-1.9-40.9-23-38.1-16.2 2.3-32.8 3.4-49.5 3.4zM654.5 848.6c-45.1 19.1-93.2 28.7-142.7 28.7s-97.5-9.7-142.7-28.7c-43.6-18.4-82.8-44.8-116.5-78.4-33.7-33.6-60.1-72.7-78.5-116.3-19.1-45-28.7-92.9-28.7-142.3s9.7-97.3 28.7-142.3c18.4-43.5 44.9-82.6 78.5-116.3 33.7-33.6 72.9-60 116.5-78.4 12.8-5.4 25.8-10 39-13.9-34 63.1-53.3 135.2-53.3 211.8 0 218.9 157.4 401.1 365.3 440-20.5 14.3-42.4 26.3-65.6 36.1z"
                    p-id="3461"
                    fill="#f4ea2a"
                  ></path>
                </svg>
              </div>
            </span>
          </label>
          <input type="checkbox" name="" id="change" style="display: none" />
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'daoHangLan',
  props: ['list'],
  data () {
    return {
    }
  },
  computed: {
    daymode () {
      return this.$store.state.daymode
    },
    currentIndex () {
      return this.$store.state.currentIndex
    }
  },
  methods: {
    select1 (index) {
      this.$store.commit('select', { index: index })
    },
    changeFun () {
      this.$store.commit('change')
    }
  }
}
</script>
<style>
.darkmode {
  background-color: rgba(0, 0, 0, 0.4);
}
:root {
  --square: 75px;
  --margin-right: 7px;
  --button-width: 75px;
}
#logo {
  width: var(--square);
  height: var(--square);
  background-image: url("logo.png");
  background-size: cover;
}
.topbar {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.button {
  width: var(--button-width);
  height: var(--square);
  border: none;
  margin-right: var(--margin-right);
  background: #fff;
  outline: none;
  text-align: center;
  letter-spacing: 2px;
}
.button.darkmode,
.darkmodeblight {
  background-color: rgba(0, 0, 0, 0.001);
  color: #fff;
}
a {
  text-decoration: none;
  font-family: "微雅软黑";
  color: #000;
}
.anibar {
  /*--align:20px;*/
  width: var(--button-width);
  position: relative;
  left: calc(var(--align) / 2);
  height: 3px;
  background: #42b983;
}
.anibar1.darkmode,
.button:hover ~ .anibar1.darkmode {
  background-color: orange;
}
.button:hover ~ .anibar1 {
  --align: 20px;
  width: calc(var(--button-width) - var(--align));
  position: relative;
  left: calc(var(--align) / 2);
  height: 3px;
  background: #42b983;
}

#chan {
  width: 75px;
  height: 75px;
  display: block;
}
</style>
