let five = require('johnny-five'),
  board,
  lcd;

board = new five.Board();

board.on('ready', () => {
  lcd = new five.LCD({
    pins: [7, 8, 9, 10, 11, 12],
    backlight: 6,
    rows: 2,
    cols: 20
  });

  lcd.useChar('smile');

  lcd.clear().print('Aproximadamente');
  lcd.cursor(1, 0);
  lcd.print('1 hora depois...');

  board.wait(3000, () => {
    lcd.home().clear().print('LCD is now');
    lcd.cursor(1, 0);
    lcd.print('WORKING!!!');

    board.wait(3000, () => {
      lcd.home().clear().print('#ArduinoSundays');
      lcd.cursor(1, 0);
      lcd.print('com Johnny-five:smile:');
    });
  });

  board.repl.inject({ lcd });
});
