var express = require('express');
var sys = require('util');
var spawn = require('child_process').spawn;



var app = express();

function logger(res,req,next){

  console.log("HOLA");
  next();
}


app.use(logger);
app.get('/',function(req,res){
  const ls = spawn('ls',['-la']);
  ls.stdout.on('data',(data) => {
    console.log(`stdout: ${data}`);
    res.json(data.toString());
  });
});




app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

//pokemon = require('node_modules/pokemon-battle');

//console.log(pokemon(3,6));
