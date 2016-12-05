const five = require('johnny-five');
const keypress = require('keypress');

const board = new five.Board();
const pin = 10;
const stdinEncoding = 'utf-8';
const stdinRawMode = true;

board.on('ready', () => {
  const servo = new five.Servo.Continuous(pin);

  keypress(process.stdin);

  console.log('Use Up and Down arrows for CW and CCW respectively. Space to stop.');

  process.stdin.resume();
  process.stdin.setEncoding(stdinEncoding);
  process.stdin.setRawMode(stdinRawMode);

  process.stdin.on('keypress', (ch, key) => {
    if (!key) { return; }

    switch (key.name) {
      case 'q':
        console.log('Quitting');
        process.exit();
        break;

      case 'up':
        console.log('CW');
        servo.cw();
        break;

      case 'down':
        console.log('CCW');
        servo.ccw();
        break;

      case 'space':
        console.log('Stopping');
        servo.stop();
        break;
    }
  });
});
