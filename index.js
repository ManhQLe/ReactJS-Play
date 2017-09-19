const path = require("path");
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname,'public')));

var port = 8000;
app.listen(port,function(){
    console.log("Application is listening on port "+port);
});
