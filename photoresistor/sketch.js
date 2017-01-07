const five = require('johnny-five')

const board = new five.Board()
const pin = 'A2'
const freq = 1 * 1000
const main = () => {
  const photoresistor = new five.Sensor({ pin, freq })
  const printLight = () => {
    process.stdout.clearLine()
    process.stdout.cursorTo(0)
    process.stdout.write(`[${new Date().toLocaleTimeString()}] ${photoresistor.value}`)
  }

  console.log(`Printing light intensity every ${freq/1000}s`)
  photoresistor.on('data', printLight)
}

board.on('ready', main)
