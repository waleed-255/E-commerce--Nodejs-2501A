var express = require('express');
var usersrouter = express.Router();

usersrouter.get('/usersdashboard',(req,res) => {
   res.json({"Message":"User Dashboard Working"})
})


module.exports =  usersrouter
