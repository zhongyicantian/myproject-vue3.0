<template>
  <div class="hello">
    <div class="welcome">
      <span id="welcomeTest" :class="{darkmode1: daymode ==`黑夜模式`}">welcome {{ fullname }} to my useless app!</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      firstname: 'web',
      lastname: 'dev'
    }
  },
  computed: {
    fullname () {
      return this.firstname + ' ' + this.lastname
    },
    daymode () {
      return this.$store.state.daymode
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.darkmode1{
  color: #fff;
}
#welcomeTest{
  font-size: 20px;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
