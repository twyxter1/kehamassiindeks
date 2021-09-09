const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.sendFile(__dirname+'/index.html');
});

app.post('/', function(req, res) {
    console.log(req.body);
    let kaal = Number(req.body.kaal);
    let pikkus = Number(req.body.pikkus);
    let result = kaal/(pikkus*pikkus);

    if (result <= 19)
    {
        res.send(`Sa oled alakaaluline </br> ${kaal} / (${pikkus} * ${pikkus}) = ${result}`);
    }

    if (result >= 19 && result <= 24.9)
    {
        res.send(`Sa oled normaalkaalus </br> ${kaal} / (${pikkus} * ${pikkus}) = ${result}`);
    }

    if (result >= 25 && result <= 29.9)
    {
        res.send(`Sa oled ylekaalus </br> ${kaal} / (${pikkus} * ${pikkus}) = ${result}`);
    }

    if (result >= 30)
    {
        res.send(`Sa oled rasvunud </br> ${kaal} / (${pikkus} * ${pikkus}) = ${result}`);
    }
     ;
 });

app.listen(3000, function(){
    console.log("server is running on port 3000" );
});