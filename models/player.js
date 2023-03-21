const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    position: {type: String, required: true},
    salary: {type: String, required: true},
    // team: {type: mongoose.Schema.Types.ObjectId, ref: "Team"}
});

module.exports = mongoose.model("Player", PlayerSchema)

// const Player = mongoose.model("Player", PlayerSchema);

// module.exports = { Player };


// Connect to the MongoDB database
// mongoose.connect('mongodb://mongo:27017/nbaRostersService', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });
  

// Hardcode the NBA player data
// const newPlayer = [
//     {
//       firstName: 'LeBron',
//       lastName: 'James',
//       position: 'Small Forward',
//       wage: 200000000,
//       team: team._id,
//     },
// ];


//   // Insert the NBA player data into the database
// newPlayer.save((err, player)
//     .then(() => console.log('NBA players successfully loaded into the database!'))
//     .catch(error => console.log(error)));

