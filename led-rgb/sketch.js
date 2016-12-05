const five = require('johnny-five');

const board = new five.Board();

board.on('ready', () => {
  const interval = 0.5 * 1000;
  const pins = {};
  const getRandomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);

  pins.red = 6;
  pins.green = 5;
  pins.blue = 3;

  const led = new five.Led.RGB({ pins });

  setInterval(() => {
    try { led.color(getRandomColor()); }
    catch (e) { led.color('#000000'); }
  }, interval);

  led.on();
});
