const router = require("express").Router();
const gifsController = require("../../controllers/gifs");

// For handleing searching of gifs
router.route("/search")
    .post(gifsController.searchForGifs);


module.exports = router;