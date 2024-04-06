var express = require('express');
var app = express();
app.use(express.static("public"));
const path = require('path');
const filePath = path.resolve(__dirname, '/public/index.html');


app.get('/', function (req, res) {
  res.sendFile(filePath);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
