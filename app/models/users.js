const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    // Basic info for keeping track of users info
    name: { type: String, required: true},
    username: { type: String, required: true},
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true},
    phone_num: { type: Number },

    // Save gifs by saving thier id numbers in an array
    savedGifs: {type: Array},
    // Save custom gif categories for custom searches when signed in
    customCategories: {type: Array},
    // Gives a shortcut for users to get up to date info on thier favorite bands that they save
    favoriteBands: {type: Array},
    // Users can save event info and can get alerts when a saved event is about to happen
    savedEvents: {type: Array},
    // users can save particular songs that they like
    playlist: {type: Array},
    // favorite movies can be saved 
    favoriteMovies: {type: Array},

    // Keep track of basic info if creation and lat time it was updated
    createdAt: { type: String, required: true},
    updatedAt: {type: String }
})

const User = mongoose.model("User", userSchema);
module.exports = User;