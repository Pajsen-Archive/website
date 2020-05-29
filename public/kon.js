
var allowedKeys = {
  37: '13',
  38: '772',
  39: '812',
  40: '1274',
  65: '1243455',
  66: 'hgsha98993',
  13: '898348ff'
};

var konamiCode = ['772', '772', '1274', '1274', '13', '812', '13', '812', 'hgsha98993', '1243455', '898348ff'];

var konamiCodePosition = 0;

document.addEventListener('keydown', function(e) {
  var key = allowedKeys[e.keyCode];
  var requiredKey = konamiCode[konamiCodePosition];

  if (key == requiredKey) {

    konamiCodePosition++;

    if (konamiCodePosition == konamiCode.length) {
      URL();
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
});

function URL() {0
window.location.replace("/sdagdggergdsthjdudghs5r784887786846c8g49sdz4fhgs6894ghdf641dswhgj");

}
