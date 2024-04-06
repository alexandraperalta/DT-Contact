var express = require('express');
var app = express();
app.use(express.static("public"));
const port = process.env.PORT || 3001;

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const path = require('path');
const filePath = path.resolve(__dirname, '/public/index.html');


app.get('/', function (req, res) {
  res.sendFile(filePath);
});
