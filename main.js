const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(expressLayouts)

// build-in middlleware
app.use(express.static('public'))

// const { createInput } = require('./utils/input')

app.get('/', (req, res) => {
  res.render('home', {
    layout: 'layouts/main',
    title: 'home'
  })
})

app.get('/contact', (req, res) => {
  res.render('contact', {
    layout: 'layouts/main',
    title: 'Contact'
  })
})

// const coba = createInput()

app.get('/contact/add', (req, res) => {
  // console.log(coba)
  res.render('add-contact', {
    layout: 'layouts/main',
    title: 'Add Contact'
  })
})

app.get('/contact/name', (req, res) => {
  res.render('detail', {
    layout: 'layouts/main',
    title: 'Detail Contact'
  })
})

app.get('/groups', (req, res) => {
  res.render('groups', {
    layout: 'layouts/main',
    title: 'Groups'
  })
})

app.listen(port, () => {
  console.log(`Listening in http://localhost:${port}`)
})