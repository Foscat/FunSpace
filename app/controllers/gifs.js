const axios = require("axios");

module.exports = {

    searchForGifs: function(req,res){
        console.log("Searh for gifs req.body",req.body);
        axios.get(`https://api.giphy.com/v1/gifs/search?q=${req.body.selectCategory}&api_key=2P4Am3JiMqyMkTDMeKLxWRyAoCsIDkhy&limit=${req.body.selectShowNum}&tag=trending`).then(gifs => {
                console.log("Get gifs gifs", gifs.data);
                return res.status(200).send({message:"Your request for gifs was successful", info: gifs.data});
            }).catch(err => {
                console.error("There was an error", err);
                return res.status(500).send({message: "There was an error", info: err});
            })
    },

    saveGif: function(req,res){
        console.log("Save gif request", req.body);
        return res.status(200).send({message:"Save gif request recived", info: req.body});
    }
};

