// var express = require("express")
// var app = express()
// const http = require("http")

// var server = http.createServer(app)

var io = require('socket.io-client')
var socket = io.connect("https://giftsvk.com", {
  port: 443,
  reconnect: true
})

// server.listen(5555)

const sendkeys = require('sendkeys-js/index.js')

main()
async function main() {
  sendkeys.send('%{ESC}')

  // socket.on("test", async function (data) {
  //   console.log(data)
  // })
}

async function sleep(ms) {
  return new Promise(
    resolve => setTimeout(resolve, ms)
  );
}