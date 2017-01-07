const five = require('johnny-five')
const songs = require('j5-songs')

const board = new five.Board()
const pin = 9
const selectedTheme = 'starwars-theme'
const song = songs.load(selectedTheme)
const main = () => {
  const piezo = new five.Piezo(pin)

  piezo.play(song)
}

board.on('ready', main)
