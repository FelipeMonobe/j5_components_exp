const five = require('johnny-five')

const board = new five.Board()
const controller = 'HCSR04'
const pin = 7
const freq = 1 * 1000
const main = () => {
  const proximity = new five.Proximity({ controller, pin,  freq })
  const printProximity = () => {
    process.stdout.clearLine()
    process.stdout.cursorTo(0)
    process.stdout.write(`[${new Date().toLocaleTimeString()}] ${proximity.cm} cm`)
  }

  console.log(`Printing proximity every ${freq/1000}s`)
  proximity.on('data', printProximity)
}

board.on('ready', main)
