var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var led = new five.Led.RGB({
    pins: {
      red: 6,
      green: 5,
      blue: 3
    }
  });

  setInterval(() => {
    let randomColor = '#' + Math.floor(Math.random() * 16777215)
      .toString(16);
      
      try {
        led.color(randomColor);
      } catch (e) {
        led.color('#000000');
      }
  }, 500);

  led.on();
});
