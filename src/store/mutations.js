import * as types from './mutation-types'


const mutations = {
     // 显示左侧侧边栏页面
     [types.SHOW_LOGIN] (state) {
        state.loginPage = true
        //页面禁止滑动
        var mo=function(e){e.preventDefault();};
        document.body.style.overflow='hidden';
        document.addEventListener("touchmove",{ passive: false },mo,false);//禁止页面滑动
      },
      // 隐藏左侧侧边栏页面
      [types.HIDE_LOGIN] (state) {
        state.loginPage = false
        //页面可滑动
        var mo=function(e){e.preventDefault();};
        document.body.style.overflow='';//出现滚动条
        document.removeEventListener("touchmove",{ passive: false },mo,false);
      },
      
      [types.SET_USER_ID ](state,userId){
        state.userId = userId
      },
      [types.SET_USER_NAME ](state,username){
          state.username = username
      },
      [types.SET_AVATAR_URL](state,avatarUrl){
          state.avatarUrl = avatarUrl
      },
      [types.SET_IS_LOGIN ](state,isLogin){
          state.isLogin = isLogin
      },
}
export default mutations
  

  