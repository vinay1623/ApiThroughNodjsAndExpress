const express=require('express');
const app=express();
const userRoutes=require('./api/routes/user');
const mangoose=require('mongoose');
const bodyParsar=require('body-parser');
const bodyParser = require('body-parser');


mangoose.connect('mongodb+srv://vinay:vinay@cluster0.nwn03.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');


mangoose.connection.on('error',err=>{
    console.log('connection faild');
});

mangoose.connection.on('connected',connected=>{
    console.log('conncted with database...');
});


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/user',userRoutes);

app.use((req,res,next)=>{
    res.status(404).json({
        error:'page not found'
    })
})

module.exports=app;