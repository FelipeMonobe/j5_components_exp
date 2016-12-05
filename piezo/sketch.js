const five = require('johnny-five');
const songs = require('j5-songs');

const board = new five.Board();
const pin = 9;
const selectedTheme = 'starwars-theme';

board.on('ready', () => {
  const piezo = new five.Piezo(pin);
  const song = songs.load(selectedTheme);

  piezo.play(song);
});
