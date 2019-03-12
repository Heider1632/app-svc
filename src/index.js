express = require("express");
mongoose = require("mongoose");
path = require('path');
exhbs = require('express-handlebars')
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

const routes = require('./routes');

app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exhbs({
  defaultLayout: 'main',
  extname: '.hbs'
}))

app.set('view engine', '.hbs');

//conectar a la base de datos
mongoose
  .connect(
    "mongodb+srv://admin:jsom_3397@cluster0-aojan.mongodb.net/apilingdb?retryWrites=true",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("connected");
  })
  .catch(err => {
    console.log("err", err);
  });

routes(app);

  // Static files
  app.use('/public', express.static(path.join(__dirname, 'public')));

// escuchamos
app.listen(3000);
console.log(`Server on %s ${app.settings.env}`);
