import jsonp from 'jsonp';
import jQuery from 'jquery'
import {
  orgModuleApi
} from '@/api/main'

const messageList = {
  state: {
    messageList: [
      '电风**啦',
      '你***包',
      '十二****就',
      '高****爸',
      '南城旧****梦',
      '别理我理我****我',
      '诺****曦',
      '悲欢****女',
      '一枫****书',
      '尹雨****沫',
      '呆橘****橘',
      '困****倦',
    ]
  },
  mutations: {
    SET_MESSAGE: (state, code) => {
      state.messageList = code
    },
  },
  actions: {
    // 获取公告信息
    /*getMessageList({
                      commit
                    }, messageId) {
      return new Promise((resolve, reject) => {
        orgModuleApi.getMessageList(messageId).then(response => {
          if(response.code === '00001'){
            let data = response.data
            if(data){
              commit('SET_MESSAGE', data.messageList)
            }else{
              commit('SET_MESSAGE', [])
            }
            resolve()
          }
        }).catch(error => {
          reject(error)
        })
      })
    }*/
  }
}
export default messageList
