const app = {
  state: {
    isWeChat: false
  }
}
// 是否为微信
if (window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i) === 'micromessenger') {
  app.state.isWeChat = true
}

export default app
