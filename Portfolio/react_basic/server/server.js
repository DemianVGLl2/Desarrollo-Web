const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

if (process.env.NODE_ENV === 'production') {

    app.use(express.static('client/build'));

    app.get('*', (req,res) => 

 	res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));

}

app.get("/", (req, res) => {
    res.send('<h1> Not a rederable API </h1>');
});

app.post("/login", (req, res) => {
    var user = req.body.user;
    var password = req.body.password;
    var response = {user: user, password: password, access: "Denied", authorization: -1};

    if (user === "Demián" && password === "1234") {
        response.access = "Granted";
        response.authorization = 1;
    }

    res.json(response);
});

app.listen(5000, () => {
    console.log("Listening to port 5000");
});