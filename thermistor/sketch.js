const five = require('johnny-five')

const board = new five.Board()
const pin = 'A0'
const freq = 1 * 1000
const main = () => {
  const temperature = new five.Thermometer({ pin, freq })
  const printTemperature = () => {
    process.stdout.clearLine()
    process.stdout.cursorTo(0)
    process.stdout.write(`[${new Date().toLocaleTimeString()}] ${temperature.C}ºC | ${temperature.F}ºF | ${temperature.K}ºK`)
  }

  console.log(`Printing temperature every ${freq/1000}s`)
  temperature.on('data', printTemperature)
}

board.on('ready', main)
