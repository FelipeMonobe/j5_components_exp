let five = require('johnny-five');
let board = new five.Board();

board.on('ready', () => {
  let randomColor,
    led = new five.Led.RGB({
      pins: {
        red: 6,
        green: 5,
        blue: 3
      }
    });

  setInterval(() => {
    randomColor = '#' + Math.floor(Math.random() * 16777215)
      .toString(16);

    try {
      led.color(randomColor);
    } catch (e) {
      led.color('#000000');
    }
  }, 500);

  led.on();
});
