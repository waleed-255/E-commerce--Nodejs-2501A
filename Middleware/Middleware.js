var jwt = require('jsonwebtoken');
var secretkey = 123;
function auth(req,res,next)
{
    var token = token = req.headers.token;
    if(token)
    {
        jwt.verify(token,secretkey)
        next();
    }

    else
    {
        res.json({"Message":"Invalid Credentials"})
    }


}
module.exports = auth