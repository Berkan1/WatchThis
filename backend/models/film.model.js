const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const filmSchema = new Schema({
    imdbID: { type: String, required: true },
    title: { type: String,  required: true },
    year: { type: String, required: true },
    runtime : { type: String, required: true },
    plot: { type: String, required: true },
    director: { type: String, required: true },
    genre: { type: String, required: true },
    imdbRating: { type: String, required: true },
    poster: { type: String, required: true }
}, { timestamps: true });

const Film = mongoose.model('Film', filmSchema);

module.exports = Film;