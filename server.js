var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", (request, res) => {res.sendFile(__dirname + "/views/index.html"); });

app.get("/contact", (req, res) => { res.sendFile(__dirname + "/views/contact.html"); });
                                  
app.get("/about", (req, res) => { res.sendFile(__dirname + "/views/about.html"); });

app.get("/sdagdggergdsthjdudghs5r784887786846c8g49sdz4fhgs6894ghdf641dswhgj", (req, res) => { res.sendFile(__dirname + "/views/google.html"); });

 
/*app.get("", (req, res) => { res.sendFile(__dirname + ""); });*/

/*app.get("", (req, res) => { res.sendFile(__dirname + ""); });*/

app.use(function(req, res, next){ 
  res.sendFile(__dirname + "/views/404.html"); 
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
