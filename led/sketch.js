const five = require('johnny-five');

const board = new five.Board();
const pin = 13;

board.on('ready', () => {
  const led = new five.Led(pin);

  board.repl.inject({ led });
  led.blink();
});
