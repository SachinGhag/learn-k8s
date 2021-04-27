const express = require('express');

const app1 = express()
const port1 = process.env.PORT1 || 3001;
app1.use(express.static('public1'))

const app2 = express()
const port2 = process.env.PORT2 || 3002;
app2.use(express.static('public2'))


app1.listen(port1, () => {
  console.log(`App1 listening at http://localhost:${port1}`)
})

app2.listen(port2, () => {
  console.log(`App2 listening at http://localhost:${port2}`)
})

// var process = require('process')
process.on('SIGINT', () => {
  console.info("Interrupted")
  process.exit(0)
})

