const express = require('express')
const exphbs  = require('express-handlebars');
const path = require('path');
const route = require('./route/index');
const app = express()
const db = require('./config/db/index')
const port = 3000

//handlebars
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
  extended: true,
}))
app.use(express.json());

//connect db
db.connect()

//Route
route(app)
app.listen(port, () => {
  console.log(`Shopee app at http://localhost:${port}`)
})