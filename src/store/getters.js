const getters = {
  user: state => state.user.user,
  token: state => state.user.token,
  code: state => state.user.code,
  nickname: state => state.user.nickname,
  sex: state => state.user.sex,
  icon: state => state.user.icon,
  messageList: state => state.messageList.messageList,
}
export default getters
