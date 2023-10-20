const express = require('express');
const bodyparser = require('body-parser');
const app = express();

const https = require("https");

app.use(express.static("public"));

app.use(bodyparser.urlencoded({extended: true}));

app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

const url1 = "https://thronesapi.com/api/v2/Characters";

let id = 0;
let image = "";
let first_name = "";
let last_name = "";
let born_date = "";
let dead_date = "";
let titles = [];
let alliances = "";
let family = "";

app.get('/', (req, res) => {
    https.get(url1, (response) => {
        let tempRes="";

        response.on('data', (data) => {
            tempRes+=data;
        }).on('end', (data) => {
            var api1 = JSON.parse(tempRes);
            
            api1.forEach(element => {
                if (element.id == id) {
                    image = element.imageUrl;
                    first_name = element.firstName;
                    last_name = element.lastName;
                    family = element.family;
                }
            });

            var url2 = "https://www.anapioficeandfire.com/api/characters?name="+first_name+" "+last_name;

            https.get(url2, (response) => {
                let tempRes2="";
                
                response.on('data', (data) => {
                    tempRes2+=data;
                }).on('end', (data) => {
                    var api2 = JSON.parse(tempRes2);
                    api2.forEach(element => {
                        if (element.name == first_name+" "+last_name) {
                            born_date = element.born;
                            dead_date = element.died;
                            titles = element.titles;
                            alliances = element.aliases;
                        }
                    });
                });
            });

            res.render("index", { id: id, image: image, first_name: first_name, last_name: last_name, family: family, 
                born_date: born_date, dead_date: dead_date, titles: titles, alliances: alliances });

        });
    });
});


app.listen(1000, () => {
    console.log("Listening to port 1000");
});