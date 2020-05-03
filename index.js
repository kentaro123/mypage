const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000


express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/0213', (req, res) => res.render('articles/0213news'))
  .get('/0220', (req, res) => res.render('articles/0220news'))
  .get('/0502', (req, res) => res.render('articles/0502news'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
