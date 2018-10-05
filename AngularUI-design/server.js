const express =require('express');
const app = express();
const path = require('path');
const primarysearch = require('./Server/primarysearch/primarysearch');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
  });
app.use('/primarysearch',primarysearch);


// app.get('/', function (req, res) {
//     console.log('Server Runninig');
//   });
const port = process.env.port || 3000;
app.listen(port,(req,res)=>{
    console.log(`Running on Port ${port}`);
});


   
