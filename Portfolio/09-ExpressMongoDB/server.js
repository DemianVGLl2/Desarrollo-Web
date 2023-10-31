require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyparser = require('body-parser');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));
app.engine("ejs", require("ejs").renderFile);
app.set("view engine", "ejs");

const user = process.env.USER_ID;
const password = process.env.USER_PASS;

const mongoUrl = `mongodb+srv://${user}:${password}@demian.zfaifux.mongodb.net/f1?retryWrites=true&w=majority`;
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

// Definition of a schema
const teamSchema = new mongoose.Schema({
  id: Number,
  code: String,
  name: String,
  country: String,
  url: String,
});
teamSchema.set("strictQuery", true);

const driverSchema = new mongoose.Schema({
  num: Number,
  code: String,
  forename: String,
  surname: String,
  dob: Date,
  nationality: String,
  url: String,
  team: teamSchema,
});
driverSchema.set("strictQuery", true);

const Team = mongoose.model("Team", teamSchema);
const Driver = mongoose.model("Driver", driverSchema);

let countries = [
  { code: "ENG", label: "England" },
  { code: "SPA", label: "Spain" },
  { code: "GER", label: "Germany" },
  { code: "FRA", label: "France" },
  { code: "MEX", label: "Mexico" },
  { code: "AUS", label: "Australia" },
  { code: "FIN", label: "Finland" },
  { code: "NET", label: "Netherlands" },
  { code: "CAN", label: "Canada" },
  { code: "MON", label: "Monaco" },
  { code: "THA", label: "Thailand" },
  { code: "JAP", label: "Japan" },
  { code: "CHI", label: "China" },
  { code: "USA", label: "USA" },
  { code: "DEN", label: "Denmark" },
];

let teamsRaw = [
    { code: "mercedes", name: "Mercedes", country: "GER"},
    { code: "aston_martin", name: "Aston Martin", country: "ENG"},
    { code: "alpine", name: "Alpine", country: "FRA"},
];

let teams = [];

let drivers = [];

app.use("/", async (req, res, next) => {
    if (teams.length == 0) {
        var team = await Team.find({}).exec();
        if (!Array.isArray(team) || team.length == 0) {
          //Option 1
          await Team.insertMany(teamsRaw).then(() => {
            console.log("Succes!");
          }
          ).catch((error) => {
            console.error(error);
          });

          //Option 2
          await Team.find({}, (err, docs) => {
            if (err) {
              console.error(err);
            }
            else {
              console.log("Teams loaded");
              teams=docs;
            }
          });
        }
        else {
            teams = team;
        }
    }
    next();
});

app.get("/", (req, res) => {
  // res.sendFile(__dirname + "/public/html/index.html");
  res.render("index", { countries, teams, drivers });
});

app.post("/driver", async(req, res, next) => {
  var team = await Team.findOne({code: {$eq: req.body.team}}).exec();
  //Method 1: Using direct mode
  /*var driver = {
    num: req.body.name,
    code: req.body.code,
    forename: req.body.forename,
    surname: req.body.surname,
    dob: req.body.dob,
    url: req.body.url,
    nationality: req.body.nation,
    team: team,
  };

  await Driver.insertOne(driver).then(() => {
    console.log("Driver recorded");
  })
  .catch((err) => {
    console.error(err);
  })*/

  //Method 2
  var driver = new Driver({
    num: req.body.num,
    code: req.body.code,
    forename: req.body.name,
    surname: req.body.lname,
    dob: req.body.dob,
    nationality: req.body.nation,
    url: req.body.url,
    team: team,
  });
  
  driver.save();
  drivers.push(driver);
  res.redirect('/');
});



app.listen(3000, (err) => {
  console.log("Listening on port 3000");
});