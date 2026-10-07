var express = require('express');
var Router = express.Router();
var Middleware = require('../Middleware/Middleware');

var {MongoClient,ObjectId} = require('mongodb')
var mymongo = new MongoClient('mongodb://localhost:27017/');


Router.get('/dashboard3',Middleware,async (req,res) => {
   var records = await mymongo.db('Waleed').collection('Users2').find().toArray()
    res.json(records)

    Router.delete('/deleterecord', async (req,res) =>{
        db.collection('Users2').deleteOne({"_id":ObjectId("6a8a03d8281c1fe68eb054fe")}); 
        if(deleteuser)
        {
            res.json({"message" : " Deleted Successfully"})
        }
        else
        {
            res.json({"message" : "Error, while deleting"})
        }
    })
})


module.exports = Router