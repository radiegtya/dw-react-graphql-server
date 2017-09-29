const express = require('express');
const expresGraphQL = require('express-graphql');

const app = express();

app.use('/graphql', expresGraphQL({
  graphiql: true
}));

app.listen(4000, ()=>{
  console.log('Listening on Port 4000');
});
