const five = require('johnny-five');

const board = new five.Board();

board.on('ready', () => {
  const pins = [7, 8, 9, 10, 11, 12];
  const blacklight = 6;
  const rows = 2;
  const cols = 20;
  const lcd = new five.LCD({ pins, backlight, rows, cols });

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
