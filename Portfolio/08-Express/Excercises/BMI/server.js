const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => { 
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {

    var weight = req.body.weight;

    var height = req.body.height;

    res.send("Your BMI is " + (weight / (height * height)));

});

app.listen(3000, ()=>{ 

    console.log("Calculator app listening on port 3000"); 

});