var io = require('socket.io-client')
var socket = io.connect("https://giftsvk.com", {
  port: 443,
  reconnect: true
})

const sendkeys = require('sendkeys-js/index.js')

socket.on("track-order-step2", async function (data) {
  console.log('step 1')
  if(data['name'] == 'lynLL'){
    console.log('step 2')
    sendkeys.send('^{f}')
    await sleep(1000)
    sendkeys.send('{i}{t}{e}{m}')
    await sleep(1000)
    sendkeys.send('{ESC}')
    await sleep(1000)
    sendkeys.send('{TAB}')
    await sleep(1000)
    sendkeys.send('{TAB}')

    console.log(data)

    let number = data['number_tracking'].split('')
    for (let i = 0; i < number.length; i++) {
      sendkeys.send(`{${number[i]}}`)
      await sleep(50)
    }

    await sleep(2000)
    sendkeys.send('{ESC}')
    socket.emit('track-order-step3', data['name'])
    console.log('step 3')
  }
})

async function sleep(ms) {
  return new Promise(
    resolve => setTimeout(resolve, ms)
  )
}