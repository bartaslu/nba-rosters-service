const express = require('express');
const router = express.Router();
const TeamModel = require('../models/team');

router.get("/", async (req, res) => {
    try{
        const teams = await TeamModel.find().populate("players");

        res.status(200).json({status: res.statusCode, teams});
        console.log({status: res._header, teams});
    }catch(error){
        res.status(404).json({status: res.statusCode, error: "Cannot get teams because there are none"});
        console.log({status: res._header, message: error.message});
    }    
})

router.get("/:id", async (req, res) => {
    try{
        const {id} = req.params;  
        const team = await TeamModel.findById(id).populate('players');

        res.status(200).json({status: res.statusCode, team})
        console.log(res._header, team);
    }catch(error){
        res.status(404).json({status: res.statusCode, error: error.message})
        console.log({status: res._header, message: error.message});
    }
})

// // Creating a player
router.post('/', async (req, res) => {
    
    try{
        const team = new TeamModel(req.body);
        const newTeam = await team.save();

        res.status(201).json({status: res.statusCode, message: "NBA Team created successfully!", newTeam});
        console.log({status: res._header, message: "NBA Team created successfully!", newTeam});
    }catch(error){
        res.status(400).json({status: res.statusCode, message: error.message});
        console.log({status: res._header, message: error.message});
    }
});

router.put("/:id", async(req, res) => {
   
    try{
        const {id} = req.params;
        const {name, city, arena, players} = req.body;
        const updateTeam = {};

        if(name)
            updateTeam.name = name;
        if(city)
            updateTeam.city = city;
        if(arena)
            updateTeam.arena = arena;
        if(players)
            updateTeam.players = players;
        
        let team = await TeamModel.findByIdAndUpdate(id, updateTeam, {
            new: true
        })
        // Could do 200 too
        res.status(201).json({status: res.statusCode, message: "NBA Team was updated!", team});
        console.log({status: res._header, message: "NBA Team was updated!", team});
    }catch(error){
        res.status(400).json({message: error.message})
        console.log({status: res._header, message: error.message});
    }
})

router.delete('/:id', async(req,res) => {
    try{
        const {id} = req.params;
        const team = await TeamModel.findByIdAndDelete(id);
        
        res.status(200).json({status: res.statusCode, message: "Team deleted", team});
        console.log({status: res._header, message: "Team deleted", team})
    }catch(error){
        res.status(500).json({status: res.statusCode, message: error.message})
        console.log({status: res._header, message: error.message});
    }
})

// router.delete('/:id', async(req, res) => {
//     try{
//         const {id} = req.params;
//         await TeamModel.findByIdAndDelete(id);

//         res.status(200).json({status: res.statusCode, message: "Team deleted"});
//         console.log({status: res._header, message: "Team deleted"})
//     }catch(error){
//         res.status(404).json({status: res.statusCode})
//         console.log({status: res._header});
//     }
// })

module.exports = router;