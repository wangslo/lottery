import {
  orgModuleApi
} from '@/api/main'

const user = {
  state: {
    user: '',
    token:'',
    code: '',
    nickname: '',
    sex: '',
    icon: ''
  },

  mutations: {
    SET_USER: (state, code) => {
      state.user = code
    },
    SET_TOKEN: (state, code) => {
      state.token = code
    },
    SET_CODE: (state, code) => {
      state.code = code
    },
    SET_NICKNAME: (state, code) => {
      state.nickname = code
    },
    SET_SEX: (state, code) => {
      state.sex = code
    },
    SET_ICON: (state, code) => {
      state.icon = code
    },
  },

  actions: {
    // 验证码登录
    loginWithMessage({
                      commit
                    }, userInfo) {
      return new Promise((resolve, reject) => {
        orgModuleApi.loginwithmessage(userInfo).then(response => {
          if(response.code === '0'){
            let data = response.data
            if(data){
              localStorage.setItem('user', data.userinfo.mobile)
              localStorage.setItem('token', data.auto_login_token)
              commit('SET_USER', data.userinfo.mobile)
              commit('SET_NICKNAME', data.userinfo.nickname)
              commit('SET_SEX', data.userinfo.sex)
              commit('SET_ICON', data.userinfo.icon)
              commit('SET_TOKEN', data.auto_login_token)
              commit('SET_CODE', response.code)
            }else{
              localStorage.removeItem('user')
            }
          }else{
            commit('SET_CODE', response.code)
          }
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // token登录
    loginwithtoken({
                      commit
                    }, userInfo) {
      return new Promise((resolve, reject) => {
        orgModuleApi.loginwithtoken(userInfo).then(response => {
          if(response.code === '0'){
            let data = response.data
            if(data){
              console.log(data)
              localStorage.setItem('user', data.userinfo.mobile)
              localStorage.setItem('token', data.auto_login_token)
              commit('SET_USER', data.userinfo.mobile)
              commit('SET_NICKNAME', data.userinfo.nickname)
              commit('SET_SEX', data.userinfo.sex)
              commit('SET_ICON', data.userinfo.icon)
              commit('SET_TOKEN', data.auto_login_token)
              commit('SET_CODE', response.code)
            }else{
              localStorage.removeItem('user')
              localStorage.removeItem('token')
            }
          }else{
            commit('SET_CODE', response.code)
          }
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user
