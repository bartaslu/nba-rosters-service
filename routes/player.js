const express = require('express');
const router = express.Router();
const PlayerModel = require("../models/player.js");

router.get("/", async (req, res) => {
    try{
        const players = await PlayerModel.find();
        res.status(200).json({status: res.statusCode, players});
        console.log({status: res._header, players});
    }catch(error){
        res.status(500).json({status: res.statusCode, error: "Can't find any players!"});
        console.log({status: res._header, message: error.message});
    }    
})

router.get("/:id", async (req, res) => {
    try{
        const {id} = req.params;  
        const player = await PlayerModel.findById(id);
        res.status(200).json({status: res.statusCode, player})
        console.log(res._header, player);
    }catch(error){
        res.status(404).json({status: res.statusCode, error: error.message})
        console.log({status: res._header, message: error.message});
    }
})

// Creating a player
router.post('/', async (req, res) => {
    try{
        const player = new PlayerModel(req.body);

        const newPlayer = await player.save();
        res.status(201).json({status: res.statusCode, message: "NBA player created successfully!", newPlayer});
        console.log({status: res._header, message: "NBA player created successfully!", newPlayer});
    }catch(error){
        res.status(400).json({status: res.statusCode, message: error.message});
        console.log({status: res._header, message: error.message});
    }
});

router.put("/:id", async(req, res) => {
   
    try{
        const {id} = req.params;
        const {firstName, lastName, position, salary, team} = req.body;
        const updatePlayer = {};

        if(firstName)
            updatePlayer.firstName = firstName;
        if(lastName)
            updatePlayer.lastName = lastName;
        if(position)
            updatePlayer.position = position;
        if(salary)
            updatePlayer.position = salary;
        if(team)
            updatePlayer.team = team;
        
        let player = await PlayerModel.findByIdAndUpdate(id, updatePlayer, {
            new: true
        })
        res.status(200).json({status: res.statusCode, message: "NBA player was updated!", player});
        console.log({status: res.statusCode, message: "NBA player was updated!", player});
    }catch(error){
        res.status(400).json({message: error.message})
        console.log({status: res._header, message: error.message});
    }
})

router.delete('/:id', async(req,res) => {
    try{
        const {id} = req.params;
        const player = await PlayerModel.findByIdAndDelete(id);
        
        res.json({status: res.statusCode, message: "Player deleted", player});
        console.log(res.json({status: res.statusCode, message: "Player deleted", player}));
    }catch(error){
        res.status(500).json({status: res.statusCode, message: error.message})
        console.log({status: res._header, message: error.message});
    }
})
// async function getPlayer(req, res, next){
//     let player = null;

//     try{
//         player = await Player.findById(req.params.id).populate("teamId");
    
//         if(player != null){
//             return res.status(404).json({message: "Player not found"});
//         }
//     }catch(error){
//         return res.status(500).json({message: error.message})
//     }
//     res.player = player;
//     next();
// }

module.exports = router;