require ('dotenv').config()

const express = require('express');
const routes = require('./routes/groomers')

const app = express();

app.listen(process.env.PORT, () => { 
  console.log('listening on port', process.env.PORT)
});

app.use(routes)

