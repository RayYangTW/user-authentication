const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

const app = express()
const PORT = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs'}))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/login', (req, res) => {
  res.render('login')
})

app.post('/login', (req, res) => {
  const { id, password } = req.body
  const users = [
 {
   firstName: 'Tony',
   email: 'tony@stark.com',
   password: 'iamironman'
 },
 {
   firstName: 'Steve',
   email: 'captain@hotmail.com',
   password: 'icandothisallday'
 },
 {
   firstName: 'Peter',
   email: 'peter@parker.com',
   password: 'enajyram'
 },
 {
   firstName: 'Natasha',
   email: 'natasha@gamil.com',
   password: '*parol#@$!'
 },
 {
   firstName: 'Nick',
   email: 'nick@shield.com',
   password: 'password'
 }
]
  
  const checkAccount = users.find(user => user.email === id)
  if(!checkAccount) {
    res.render('error')
  } else {
     const checkPassword = checkAccount.password === password
    if(!checkPassword) {
      res.render('error') 
    } else {
      const userFirstName = checkAccount.firstName
      res.render('success', {userFirstName})
    }
  }
})

app.listen(PORT, () => {
  console.log(`This app is running on http://localhost:${PORT}`)
})