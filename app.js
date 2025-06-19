const express = require('express')
const app = express()
const port = 3000

// routes setting

app.get('/', (req, res) => {
  res.send('This is my todo list built with Express')
})

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})