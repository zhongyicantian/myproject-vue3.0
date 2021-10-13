<template>
 <daoHangLan :list="list"></daoHangLan>
    <router-view />
</template>

<script>
import daoHangLan from '@/components/daoHangLan.vue'

/*
import HelloWorld from '@/components/HelloWorld.vue'
import vuetext from '@/components/text.vue'
import kongzhitiao from '@/components/kongzhitiao.vue'
import member from '@/components/member.vue'
*/

export default {
  name: 'Home',
  components: {
    daoHangLan
    /*
    HelloWorld,
    vuetext,
    kongzhitiao,
    member
    */
  },
  data () {
    return {
      list: [
        { id: 0, name: '主页 ^~~^ 轮播图', router: '/' },
        { id: 1, name: '浅拷贝 ^~~^ 录入信息', router: '/vuetext' },
        { id: 2, name: '节流 ^~~^ 控制条', router: '/kongzhitiao' },
        { id: 3, name: '人员 ^~~^ fetch', router: '/member' },
        { id: 4, name: '守卫 ^~~^ login', router: '/login' },
        { id: 5, name: 'fall ^~~^ 瀑布流', router: '/pubu' }
      ]
    }
  }

}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
