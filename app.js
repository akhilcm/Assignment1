const Express = require('express');
const Mongoose = require('mongoose');
var request = require('request');
const Registration=Mongoose.model("registrationdetails",{
    name: String ,
    address: String,
    gen:String,
    dis: String,
    dob: String,
    email:String,
    uname: String,
    psd:String,
    cpsd: String});


Mongoose.connect("mongodb://localhost:27017/regidb");

var bodyParser= require('body-parser');
var app=new Express();
app.set('view engine','ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/',(req,res)=>{
    res.render('home');
});

app.get('/login',(req,res)=>{
    res.render('login');
});



app.get('/regi',(req,res)=>{
    res.render('registration');
});

app.post('/read',(req,res)=>{
    console.log(req.body);
    var regis= Registration(req.body);
    var result = regis.save( (error)=>{
        if(error){
            throw error;
            res.send(error);
        }
        else{
            res.send('user created');
        }
    });
});

app.get('/getdatas',(req,res)=>{
    result = Registration.find( (error,data)=>{
         if(error){
             throw error;
         }
         else{
             res.send(data);
         }
     });
});

const getdataApi="http://localhost:3004/getdatas";

app.get('/views',(req,res)=>{
    request(getdataApi,(error,response,body)=>{
        var data=JSON.parse(body);
        console.log(data);
        res.render('regiview',{'data':data});
    });
});

app.listen(3004,()=>{
    console.log("server running on port: http://localhost:3004");
});