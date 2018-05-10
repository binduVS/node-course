const express = require('express');
const app = express(); 
const hbs = require('hbs');

app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));

app.get('/',(req,res)=>{
res.send("hello world!!")
});
app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        PageTitle : 'Home page',
        CurrentYear : new Date().getFullYear()
    });
})
app.listen(9000,()=>{
    console.log('server is running');
});

