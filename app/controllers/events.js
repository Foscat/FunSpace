const Spotify = require('node-spotify-api');
const axios = require("axios");


// Everything comes in as a post route so it can have a data object to feed info in

module.exports = {
    movieInfo: function(req,res){
        console.log("Find movie info request", req.body);

        axios.get(`http://www.omdbapi.com/?t=${req.body.term}&y=&plot=short&apikey=${process.env.omdbAPIkey}`).then(movie =>{
            console.log("OMDB response", movie.data);

            return res.status(200).send({message:"Your request for movie info was succesful", info: movie.data});

        }).catch(err =>{
            console.error("There was an error", err);
            return res.status(500).send({message:"There was a error with your request", info:err});
        })

        // return res.send({message:"Movie info request", info: res.data});
    },
    musicInfo: function(req,res){
        console.log("Find music info request", req.body);

        let spotify = new Spotify({
            id: process.env.SPOTIFY_ID,
            secret: process.env.SPOTIFY_SECRET
        });

        spotify.search({
            type: "track",  // Differant options are: []
            query: "Red Hot Chili Peppers"
        }).then(res => {
            console.log("Spotify response", res);
            return res.status(200).send({message:"Your request was succesful", info: res.data});
        }).catch(err => {
            console.error("There was an error", err);
            return res.status(500).send({message:"There was a error with your request", info: res.data});
        })
        // return res.send({message:"Music info request", info: res.data});
    },
    bandInfo: function(req,res){
        console.log("Find band info request", req.body);

        axios.get(`https://rest.bandsintown.com/artists/${req.body.term}/events?app_id=${process.env.bandsAPIkey}`).then(res =>{
            console.log("Band info response", res.data);
            return res.status(200).send({message:"Your request for band info was succesful", info:res.data});
        }).catch(err => {
            console.error("There was an error with your request", err);
            return res.status(500).send({message:"There was an error with your request", info:err});
        })
        // return res.send({message:"Band info request", info: res.data});
    }
}