const express = require('express')
const app = express()

const PORT = 3000;

app.all('/endpoint1', function (req, res) {
    res.send('Hello from Endpoint1!')
})

app.all('/endpoint2', function (req, res) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8000");
    res.header("Access-Control-Allow-Headers");
    res.send('Hello from Endpoint2!')
})

app.get('/', function (req, res) {
    res.send('Make a request to <b><a href="/endpoint1">/endpoint1</a></b> or <b><a href="/endpoint2">/endpoint2</a></b>')
})

app.listen(PORT, function () {
    console.log('Server running on port '+PORT)
})
