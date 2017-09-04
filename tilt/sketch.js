const five = require('johnny-five')

const board = new five.Board()
const pin = 'A3'
const freq = 1 * 1000
const main = () => {
  const tilt = new five.Sensor({ pin, freq })
  const printTilt = () => {
    process.stdout.clearLine()
    process.stdout.cursorTo(0)
    process.stdout.write(`[${new Date().toLocaleTimeString()}] ${tilt.value}`)
  }

  tilt.on('data', printTilt)
}

board.on('ready', main)
