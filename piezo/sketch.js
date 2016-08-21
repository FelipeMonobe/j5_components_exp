let five = require('johnny-five');
let songs = require('j5-songs');
let board = new five.Board();

board.on('ready', () => {
  let piezo = new five.Piezo(9),
    song = songs.load('starwars-theme');

  piezo.play(song);
});
