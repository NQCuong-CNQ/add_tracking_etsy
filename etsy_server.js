var express = require("express")
var app = express()
const http = require("http")
const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())
const PuppUtils = require('./lib/PuppUtils')

var server = http.createServer(app)
  
var io = require('socket.io-client')
var socket = io.connect("https://giftsvk.com", {
    port: 443,
    reconnect: true
})

server.listen(5555)

main()
async function main() {
  
  socket.on("test", async function (data) {
    console.log(data)
  })
}
