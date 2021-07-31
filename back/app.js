const express = require('express');
const app = express()
const indexRoute = require('./routes')
const loginRoute = require('./routes/login')
const morgan = require('morgan')
const nunjucks = require('nunjucks')
const { sequelize } = require('./models');
const { urlencoded } = require('express');
const cors = require('cors')

app.set('port', process.env.PORT || 8000);
app.set('view engine', 'html');

nunjucks.configure('views', {
  express: app,
  watch: true,
});

sequelize.sync()
  .then(() => {
    console.log('데이터베이스 연결 성공')
  })
  .catch((err) => {
    console.error(err)
  })

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded());

app.use(cors())
app.use('/', indexRoute);
app.use('/login', loginRoute);


app.use((req, res, next) => {
  const error = new Error('존재하지 않는 페이지입니다.')
  error.status = 404;
  next(error)
})

app.use((err, req, res, next) => {
  console.log(err)
  res.locals.message = err.message;
  res.locals.error = err;
  res.status(err.status || 500);
  res.render('error')
})

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '포트 연결 중')
})