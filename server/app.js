const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const sessions = require('express-session');
const cors = require('cors');

const app = express();
const port = 3000;

const getAll = require('./routes/getAll');
const transaction = require('./routes/transaction');

app.use(
  cors({
    origin: '*',
  })
);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use('/getAll', getAll);
app.use('/transaction', transaction);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
