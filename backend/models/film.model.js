const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const filmSchema = new Schema({
    imdbID: { type: String, required: true },
    title: { type: String, required: true },
    year: { type: String },
    runtime : { type: String },
    plot: { type: String },
    director: { type: String },
    genre: { type: String },
    imdbRating: { type: String },
    poster: { type: String }
}, { timestamps: true });

const Film = mongoose.model('Film', filmSchema);

module.exports = Film;