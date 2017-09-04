const five = require('johnny-five')
const http = require('http')

const board = new five.Board({ repl: false })
const greenPin = 2
const redPin = 13
const main = () => {
  const greenLed = new five.Led(greenPin)
  const redLed = new five.Led(redPin)
  const listenCallback = () => console.log('Server listening @ localhost:8080')
  const createServerCallback = (req, res) => {
    console.log(`[${req.method}] ${req.url}`)
    if (req.url === '/red') redLed.toggle()
    if (req.url === '/green') greenLed.toggle()
    return res.end()
  }
  const server = http.createServer(createServerCallback)

  server.listen(8080, listenCallback)
  redLed.off()
  greenLed.off()
}

board.on('ready', main)
