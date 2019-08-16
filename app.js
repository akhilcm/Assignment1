const Express = require('express');
var app=new Express();
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.render('home');
});

app.get('/login',(req,res)=>{
    res.render('login');
});

app.get('/regi',(req,res)=>{
    res.render('registration');
});
app.listen(3004,()=>{
    console.log("server running on port 3004");
});