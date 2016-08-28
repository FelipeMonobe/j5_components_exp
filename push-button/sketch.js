let five = require('johnny-five'),
  board = new five.Board();

board.on('ready', () => {
  let button = new five.Button(2),
    led = new five.Led(13);

    led.off();

  button.on('hold', () => led.blink());
  button.on('press', () => led.on());
  button.on('release', () => { led.stop(); led.off(); });
});
