const express = require('express');

const app = express();

const mysql = require('mysql');
const bodyParse = require('body-parse');

app.use(bodyParse.json({type:'application/json'}));
app.use(bodyParse.urlencoded({extends:true}));

const connectionMysql = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '123456jose',
    database:'sflivingwage'
})

const server = app.listen(4545, () =>{
   const host = server.address().address 
   const port = server.address().port 
});

// app.listen(3001, ()=>{
//     console.log('app is running at port 3001');
// })
connectionMysql.connect( function(error){
    if (err){
        console.log(err);
    }else{
        console.log("connected!!");
    }
});