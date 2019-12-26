import * as types from './mutation-types'

const mutations = {
     // 显示左侧侧边栏页面
     [types.SHOW_LOGIN] (state) {
        state.loginPage = true
       
      },
      // 隐藏左侧侧边栏页面
      [types.HIDE_LOGIN] (state) {
        state.loginPage = false
      },
}
export default mutations
  

  