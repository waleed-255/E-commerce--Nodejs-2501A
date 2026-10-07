var adminApis = require('./admin/admin')
var usersApis = require('./users/users')
var vendorApis = require('./vendor/vendor')
var customerApis = require('./customer/customer')
var port = 2200


var express = require('express');
var app = express();
app.use(express.json());
app.use('/admin',adminApis)
app.use('/users',usersApis)
app.use('/customer',customerApis)

app.listen(port,() => {console.log("Server is Running...."+port)});

