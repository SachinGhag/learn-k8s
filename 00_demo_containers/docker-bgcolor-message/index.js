const express = require('express')
const nunjucks = require('nunjucks')
const app = express()
// use env PORT
const port = process.env.PORT || 3000;
const data = {
  color: process.env.BGCOLOR || "YellowGreen",
  message: process.env.MESSAGE || "This is the default messsage"
};
app.use(express.static('public'))

/*app.get('/', (req, res) => {
  res.send('Hello World!')
})
*/

nunjucks.configure('views', {
    autoescape: true,
    express: app,
});
app.get('/', function(req, res) {
    res.render('index.html', data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// var process = require('process')
process.on('SIGINT', () => {
  console.info("Interrupted")
  process.exit(0)
})

