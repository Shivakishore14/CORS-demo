const express = require('express')
const app = express()

const PORT = 8000;

app.use("/", express.static('client/static'))

app.listen(PORT, function () {
  console.log('Access the client at port ' + PORT)
})
