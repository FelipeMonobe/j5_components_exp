const five = require('johnny-five')

const board = new five.Board()
const buttonPin = 2
const ledPin = 13
const main = () => {
  const button = new five.Button(buttonPin),
  const led = new five.Led(ledPin)

  led.off()

  button.on('hold', led.blink)
  button.on('press', led.on)
  button.on('release', () => { led.stop() led.off() })
}

board.on('ready', main)
