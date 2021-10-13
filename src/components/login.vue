<template>
  <div class="login">
    <form @submit.prevent="log" v-if="loginstate == false">
      <h1>login page</h1>
      <div class="loginname">
        <span>loginname:</span
        ><input type="text" v-model="lname" name="" id="loginName" required />
      </div>
      <div class="password">
        <span>password:</span
        ><input type="password" v-model="pword" name="" id="password" required />
      </div>
      <div class="submit">
        <input type="submit" value="login" @click="test" />
      </div>
    </form>
    <div v-else class="else">
      <h1>logined page</h1>
      <h5>welcome!{{ welcome }}</h5>
      <input type="submit" value="logout" @click="logout" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      lname: '',
      pword: ''
    }
  },
  computed: {
    loginstate () {
      return this.$store.state.loginpage.logined
    },
    welcome () {
      return this.$store.state.loginpage.loginName
    },
    daymode () {
      return this.$store.state.daymode
    }
  },
  methods: {
    log () {
      this.$store.commit('cleargard', { lname: this.$data.lname })
    },
    logout () {
      this.$store.commit('logout')
    },
    test () {
      //  <input type="button" value="logintest" @click="test" />
      console.log(this.$store.state.loginpage.logined)
      console.log(this.$store.state.loginpage.loginName)
    }
  }
}
</script>
<style lang="less" scoped>
.login {
  position: relative;
  display: flex;
  justify-content: center;
}
.darkmode {
  form {
    background-color: inherit;
    border: 1px solid #fff;
    h1,h2,h5,span {
      color: #fff;
    }
  }
  input[type="text"],
  input[type="password"] {
    background-color: inherit;
    color:#fff;
    caret-color: #fff;
  }
  .else{
    color: #fff;
  }
}
form {
  --width: 40%;
  display: flex;
  flex-direction: column;
  width: var(--width);
  border: 1px solid #000;
  margin-top: 30px;
  h1 {
    font-family: Arial, Helvetica, sans-serif;
  }
  div {
    padding-top: 5px;
  }
  input[type="text"],
  input[type="password"] {
    outline: none;
    border: none;
    border-bottom: 1px solid #114514;
  }
  span {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 21px;
    padding-right: 3px;
  }
}
</style>
