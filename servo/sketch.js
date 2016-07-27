let five = require('johnny-five'),
  keypress = require('keypress'),
  board = new five.Board();

keypress(process.stdin);

board.on('ready', () => {
  let servo = new five.Servo.Continuous(10);

  console.log('Use Up and Down arrows for CW and CCW respectively. Space to stop.');

  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.setRawMode(true);

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
