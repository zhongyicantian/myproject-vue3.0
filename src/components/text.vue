<template>
  <div id="app">
    <h1>{{ meg }}</h1>
    <h2>This page has {{ count }} infos</h2>
    <form @submit.prevent="insert">
      <input
        type="text"
        placeholder="insert your name"
        v-model="info.name1"
        @change="haveValue"
      />
      <input
        type="text"
        placeholder="insert your age"
        v-model="info.age"
        @change="haveValue"
      />
      <div id="memberselect">
        <p>select your member class:</p>
        <label for="guest">
          <input
            type="radio"
            name="memberselect"
            v-model="info.member"
            id="guest"
            value="guest"
          />guest
        </label>
        <label for="stander">
          <input
            type="radio"
            name="memberselect"
            v-model="info.member"
            id="stander"
            value="stander"
          />stander
        </label>
        <label for="vip">
          <input
            type="radio"
            name="memberselect"
            v-model="info.member"
            id="vip"
            value="vip"
          />vip
        </label>
        <label for="vvip">
          <input
            type="radio"
            name="memberselect"
            v-model="info.member"
            id="vvip"
            value="vvip"
          />vvip
        </label>
      </div>
      <div v-if="namenull">
        <input type="submit" value="submit" />
      </div>
      <div v-else>
        <input type="submit" value="submit" disabled />
      </div>
    </form>
    <ul class="show">
      <li v-for="(item, index) in list" :key="item.id" class="showList">
        <span>ID:{{ item.id }}</span
        ><br />
        <span>Name:{{ item.name1 }}</span
        ><br />
        <span> Age:{{ item.age }}</span
        ><br />
        <span> class:{{ item.member }}</span
        ><br />
        <input
          type="button"
          value="delete this info"
          @click="list.splice(index, 1), count--"
        />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'vuetext',
  data () {
    return {
      meg: 'mark down your info.',
      count: 0,
      namenull: false,
      info: {
        id: 0,
        name1: '',
        age: '',
        member: ''
      },
      list: []
    }
  },
  computed: {
    daymode () {
      return this.$store.state.daymode
    },
    loginstate () {
      return this.$store.state.loginpage.logined
    }
  },
  methods: {
    insert () {
      this.list.push(this.copy(this.info))
      console.log(this.list)
    },
    copy (obj) {
      const nobj = {}
      for (const i in obj) {
        nobj[i] = obj[i]
      }
      this.info.id++
      this.count++
      return nobj
    },
    haveValue () {
      if (this.info.name1 != null && this.info.age != null) {
        this.namenull = true
      } else {
        this.namenull = false
      }
    }
  }
}
</script>
<style scoped lang="less">
.darkmode{
 h1,h2{
   color:#fff
 }
 input[type=text]{
   background-color: inherit;
 }
 #memberselect{
   color:#fff
 }
 .show{
   color:#fff;
   .showList{
    border: 1px dashed #fff;
   }
 }
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.show {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
}
.showList {
  width: 170px;
  display: block;
  border: 1px dashed #000;
  margin-right: 3px;
  margin-bottom: 3px;
}
.showList > span {
  font-family: Helvetica, sans-serif;
  font-size: 20px;
}

input[type="text"] {
  width: 200px;
  margin-top: 10px;
  height: 20px;
  border: none;
  outline: none;
  border-radius: 2px;
  border: 1px dashed #666;
}
input[type="text"]:focus {
  border: none;
  border: 1px solid #666;
}
input[type="text"]:not(:placeholder-shown) {
  border: none;
  border: 1px solid #666;
}
input[type="submit"] {
  margin-top: 20px;
  width: 130px;
  height: 40px;
  letter-spacing: 6px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: bold;
  border: none;
  outline: none;
  border-radius: 10px;
  border: 2px solid #114514;
}
input[type="submit"]:hover {
  letter-spacing: 0px;
  transition: 0.5s;
}
input[type="button"] {
  border: 1px solid #114514;
  border-radius: 4px;
}
</style>
