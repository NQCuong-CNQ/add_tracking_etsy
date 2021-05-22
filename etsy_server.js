// var express = require("express")
// var app = express()
// const http = require("http")
// const puppeteer = require('puppeteer-extra')
// const StealthPlugin = require('puppeteer-extra-plugin-stealth')
// puppeteer.use(StealthPlugin())
// const PuppUtils = require('./lib/PuppUtils')

// var ks = require('node-key-sender')

// const { exec } = require('child_process')
const { keyboard, Key, mouse, left, right, up, down, screen } = require("@nut-tree/nut-js")
// ks.sendCombination(['control', 'a']);
// var server = http.createServer(app)

// var io = require('socket.io-client')
// var socket = io.connect("https://giftsvk.com", {
//   port: 443,
//   reconnect: true
// })

// server.listen(5555)


main()
async function main() {
  await keyboard.pressKey(Key.RightAlt);
  await keyboard.pressKey(Key.Tab);
  await keyboard.releaseKey(Key.Tab);
  await keyboard.releaseKey(Key.RightAlt);

  // exec('java -jar "C:/Users/pc/Desktop/add_tracking_etsy/node_modules/node-key-sender/jar/key-sender.jar" alt-tab')
  // await sleep(1000)
  // exec('java -jar "C:/Users/pc/Desktop/add_tracking_etsy/node_modules/node-key-sender/jar/key-sender.jar" tab')
  // await sleep(1000)
  // exec('java -jar "C:/Users/pc/Desktop/add_tracking_etsy/node_modules/node-key-sender/jar/key-sender.jar" a-d-c-g-e')
  // await sleep(1000)
  // exec('java -jar "C:/Users/pc/Desktop/add_tracking_etsy/node_modules/node-key-sender/jar/key-sender.jar" enter')

  // socket.on("test", async function (data) {
  //   console.log(data)
  // })
}

async function sleep(ms) {
  return new Promise(
    resolve => setTimeout(resolve, ms)
  );
}