let five = require('johnny-five');
let board = new five.Board();

board.on('ready', () => {
  let frame = 1,
    frames = [':runninga:', ':runningb:'],
    row = 0,
    col = 0,
    lcd = new five.LCD({
      pins: [7, 8, 9, 10, 11, 12]
    });

  lcd.useChar('runninga');
  lcd.useChar('runningb');

  this.loop(300, () => {
    lcd.clear()
      .cursor(row, col)
      .print(
        frames[frame ^= 1]
      );

    if (++col === lcd.cols) {
      col = 0;
      if (++row === lcd.rows) {
        row = 0;
      }
    }
  });
});
