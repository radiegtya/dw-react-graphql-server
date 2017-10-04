const express = require('express');
const expresGraphQL = require('express-graphql');
const schema = require('./schema/index');

const app = express();

app.use("/graphql", function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, Content-Length, X-Requested-With'
  );
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use('/graphql', expresGraphQL({
  schema,
  graphiql: true
}));

app.listen(4000, ()=>{
  console.log('Listening on Port 4000...');
});
