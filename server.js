const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require("mongoose");

const teamRoutes = require('./routes/team.js');
const playerRoutes = require('./routes/player.js');
const playerModel = require('./models/player.js');
const teamModel = require('./models/team.js');


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


const players = [
    {
        firstName: "Lebron",
        lastName: "Jamees",
        position: "SF",
        salary: "$44 474 988"
    },
    {
        firstName: "Anthony",
        lastName: "Davis",
        position: "PF",
        salary: "$37 980 720"
    },
    {
        firstName: "D'Angelo",
        lastName: "Russell",
        position: "PG",
        salary: "$31 377 750"
    },
    {
        firstName: "Malik",
        lastName: "Beasley",
        position: "SG",
        salary: "$15 558 035"
    },
    {
        firstName: "Mo",
        lastName: "Bamba",
        position: "C",
        salary: "$10 300 000"
    },
    {
        firstName: "De'Aaron",
        lastName: "Fox",
        position: "PG",
        salary: "$28 103 550"
    },
    {
        firstName: "Domantas",
        lastName: "Sabonis",
        position: "PF",
        salary: "$18 500 000"
    },
]

const teams = [
    {
        name: "Los Angeles Lakers",
        city: "Los Angeles",
        arena: "Crypto.com Arena"
    },
    {
        name: "Sacramento Kings",
        city: "Sacramento",
        arena: "Golden 1 Center"
    }
]


playerModel.insertMany(players)
    .then((result) => {
        console.log(`${result.length} players inserted`);
    })
    .catch((error) => {
        console.error(`Error inserting players: ${error}`);
    });

teamModel.insertMany(teams)
    .then((result) => {
        console.log(`${result.length} teams inserted`);
    })
    .catch((error) => {
        console.error(`Error inserting teams: ${error}`);
    });
