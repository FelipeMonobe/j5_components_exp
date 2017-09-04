const five = require('johnny-five')

const board = new five.Board()
<<<<<<< HEAD
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
=======
const printTilt = (state) => {
  const now = new Date().toLocaleTimeString()

  process.stdout.clearLine()
  process.stdout.cursorTo(0)
  process.stdout.write(`[${now}] ${state}`)
}

const main = () => {
  const tilt = new five.Button(2)
  const states = ['down', 'up', 'hold']
  const componentPrintOnStateChange = (component) =>
    (state) => component.on(state, printTilt.bind(null, state))
  const tiltPrintOnStateChange = componentPrintOnStateChange(tilt);

  states.forEach(tiltPrintOnStateChange)
>>>>>>> 280927b22ca7273507ea176259db2fe21468b7ad
}

board.on('ready', main)
