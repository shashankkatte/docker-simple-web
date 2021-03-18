const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('Hi there! im a dockerized node app.This is all I do!')
})

app.listen(8080,() => {
    console.log('listening on port 8080. Docker is cool!')
})
