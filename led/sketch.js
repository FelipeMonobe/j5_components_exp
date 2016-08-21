let five = require('johnny-five');
let board = new five.Board();

board.on('ready', () => {
  let led = new five.Led(13);

  this.repl.inject({ led });
  led.blink();
});
