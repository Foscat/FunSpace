const router = require("express").Router();
const userRoutes = require("./users");
const eventsRoutes = require("./events");
const gifRoutes = require("./gifs");

// Index serves as directory for routes

// User routes
router.use("/users", userRoutes);

// Event routes
router.use("/eventsInfo", eventsRoutes);

// Gif routes 
router.use("/gifs", gifRoutes);

module.exports = router;