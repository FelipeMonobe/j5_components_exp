const five = require('johnny-five')

const board = new five.Board()
const pin = 13
const main = () => {
  const led = new five.Led(pin)

  board.repl.inject({ led })
  led.blink()
}

board.on('ready', main)
