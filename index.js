// import
const express = require('express');

//initialize
const app = express();

const port = 5000;

//start express server
app.get('/',(req, res) => {
    res.send('response from express');
});

app.get('/add',(req, res) => {
    res.send('add response from express');
});

app.listen( port, () => {console.log('express server started') } );

