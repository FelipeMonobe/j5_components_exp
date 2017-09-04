const five = require('johnny-five')

const board = new five.Board()
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
}

board.on('ready', main)
