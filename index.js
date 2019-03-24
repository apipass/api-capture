const express = require('express')
const request = require('request')
const util = require('util')

const app = express()
const port = 8000

app.get('*', (req, res) => {
  // res.send('Hello World!')
  // var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  request(req.originalUrl, (error, response, body) => {
    res.end(body);
  });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))