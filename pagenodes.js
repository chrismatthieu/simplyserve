// Add inside of board onready

// var led = new five.Led(11);
var led = new five.Led(13);
var button = new five.Button(2);

button.on("hold", function() {
  console.log( "Button held" );
  led.on();
  node.send({payload:'on'});
});

button.on("press", function() {
  console.log( "Button pressed" );
  led.on();
  node.send({payload:'on'});
});

button.on("release", function() {
  console.log( "Button released" );
  led.off();
  node.send({payload:'off'});
});
