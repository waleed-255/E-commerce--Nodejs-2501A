var http = require('http')
var port = 5000

var server = http.createServer((req,res) =>{

//   GET API

if(req.url == "/xyz" && req.method == "GET")
{
//   ANY CODE/ANY LOGIC WILL GO HERE 
    res.end("xyz printed")
}

// GET API
if(req.url == "/Abc" && req.method == "Get")
{
//   ANY CODE/ANY LOGIC WILL GO HERE 
    res.end("Abc Printed")
}
})





server.listen(port,() => {
    console.log("Server is Active...."+port)
})