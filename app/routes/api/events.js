const router = require("express").Router();
const eventsController = require("../../controllers/events");

// Matches with "/api/eventsInfo/music"
router.route("/music")
    .post(eventsController.musicInfo)

// Matches with "/api/eventsInfo/movies"
router.route("/movies")
    .post(eventsController.movieInfo)

// Matches with "/api/eventsInfo/bands"
router.route("/bands")
    .post(eventsController.bandInfo)

module.exports = router;