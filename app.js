const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
const PORT = 3000

app.engine('hbs', exphbs({ detaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(PORT, () => {
  console.log(`This app is running on http://localhost:${PORT}`)
})