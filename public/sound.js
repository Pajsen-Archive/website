     var t=setInterval(autoNotify,5);
 

//store the audiofile as variable.
var popupsound = document.getElementById("notifypop");

function autoNotify() {
   popupsound.play(); //play the audio file
}
  