const five = require('johnny-five');

const board = new five.Board();

board.on('ready', () => {
  const controller = 'HCSR04';
  const pin = 7;
  const proximity = new five.Proximity({ controller, pin });

  proximity.on('data', () => {
    console.log('Proximity: ');
    console.log(`  cm  : ${this.cm}`);
    console.log(`  in  : ${this.in}`);
    console.log('-----------------');
  });

  proximity.on('change', () => console.log('The obstruction has moved.'));
});
