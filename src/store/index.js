import { createStore } from 'vuex'

export default createStore({
  state: {
    currentIndex: 0,
    daymode: '白天模式',
    loginpage: {
      loginName: '',
      password: '',
      logined: false
    }
  },
  mutations: {
    change (state) {
      const check = document.querySelector('#change')
      const bodymode = document.body
      if (check.checked === true) {
        state.daymode = '白天模式'
        bodymode.classList.toggle('darkmode')
      } else {
        state.daymode = '黑夜模式'
        bodymode.classList.toggle('darkmode')
      }
    },
    cleargard (state, payload) {
      state.loginpage.loginName = payload.lname
      state.loginpage.logined = true
    },
    logout (state) {
      state.loginpage.loginName = ''
      state.loginpage.logined = false
    }
  },
  actions: {
  },
  modules: {
  }
})
