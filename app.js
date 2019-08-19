const Express = require('express');

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

// app.post('/read',(req,res)=>{
//     var body = req.body;
//     res.render('loginread',{log:body});
// });

app.post('/read',(req,res)=>{
    var re = req.body;
    res.render('registrationread',{regi:re});
});

app.get('/regi',(req,res)=>{
    res.render('registration');
});
app.listen(3004,()=>{
    console.log("server running on port 3004");
});