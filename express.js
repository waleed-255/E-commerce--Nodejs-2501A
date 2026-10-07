// EXPRESS REQUIRE
var express = require('express')
var server = express();
server.use(express.json())
var port = 9000

// API
server.get('/xyz',(req,res) => {
    // console.log ("record printed")
    res.json({"Message":"Record Printed 1"})
})

server.get('/abc',(req,res) => {
    res.json({"Message":"Record Printed 2"})
})

server.delete('/delete1',(req,res) => {
    res.json({"Message":"Record deleted 1"})

    server.delete('/delete2',(req,res) => {
        res.json({"Message":"Record deleted 2"})
    })
})


// PORT DEFINE
server.listen(port,() => {
console.log("Server is Running"+port)
})