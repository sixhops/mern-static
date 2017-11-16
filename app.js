var express = require('express');
var path = require('path');

var app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, 'client', 'build')))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
})

module.exports = app;
