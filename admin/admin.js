var express = require('express');
var adminrouter = express.Router();

adminrouter.get('/dashboard',(req,res) => {
     res.json({"Message":"Admin Dashboard Working"})
})


module.exports = adminrouter

