const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require("mongoose");

const teamRoutes = require('./routes/team.js');
const playerRoutes = require('./routes/player.js');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: false}));
//app.use(express.static(__dirname + '/public'));
//app.use("/players", PlayerRouter);
//Routes
app.use("/teams", teamRoutes);
app.use("/players", playerRoutes);

const DB_URI = "mongodb://mongo:27017/nba-rosters-api"

mongoose.connect(DB_URI , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Listening on port: " + PORT);
    app.listen(PORT);
})

app.get('/home', async (req, res) => {
    res.send("<h3>WEB API FOR NBA ROSTERS<h3>")
})

