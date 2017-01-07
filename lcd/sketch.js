const five = require('johnny-five')

const board = new five.Board()
const pins = [7, 8, 9, 10, 11, 12]
const blacklight = 6
const rows = 2
const cols = 20
const main = () => {
  const lcd = new five.LCD({ pins, backlight, rows, cols })
  const printLCD = (msgs) => {
    lcd.clear().print(msgs[0])
    lcd.cursor(1, 0)
    lcd.print(msgs[1])
  }

  lcd.useChar('smile')

  printLCD(['Aproximadamente', '1 hora depois...'])

  board.wait(3000, () => {
    printLCD(['LCD is now', 'WORKING!!!'])
    board.wait(3000, printLCD(['#ArduinoSundays', 'com Johnny-five:smile:']))
  })

  board.repl.inject({ lcd })
}

board.on('ready', main)
