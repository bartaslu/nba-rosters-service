const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
    name: {type: String, required: true},
    city: {type: String, required: true},
    arena: {type: String, required: true},
    players: [{type: mongoose.Schema.Types.ObjectId, ref: "Player"}]
});

// const Team = mongoose.model("Team", TeamSchema);

module.exports = mongoose.model("Team", TeamSchema)

// Connect to the MongoDB database
// mongoose.connect('mongodb://mongo:27017/nbaRostersService', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// const newTeam = new Team({
//     title: "Los Angeles Lakers",image.png
//     city: "Los Angeles",
//     arena: "Crypto.com Arena"
// })

// const insertTeam = async (team) => {
    
//     try{
//         team.save()
//     }catch(error){
//         console.log(error);
//     }

//     console.log('Team saved to the database!');
// } 

// newTeam.save();

// insertTeam(newTeam);