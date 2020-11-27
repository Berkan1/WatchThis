const router = require('express').Router();
let Rating = require('../models/rating.model');
let Film = require('../models/film.model');

//Get the 5 most recent reviews and their associated films
router.route('/').get((req, res) => {
    Rating.aggregate([{ 
        $lookup: {
            from: 'films',
            localField: 'film',
            foreignField: 'imdbID',
            as: 'filmRatings'
        }
    }]).sort({updatedAt:-1}).limit(5).then(ratings => res.json(ratings))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Upsert for ratings and films
router.route('/:id').post((req, res) => {
    const user = req.body.user;
    const rating = req.body.rating;  
    const imdbID = req.params.id;
    const title = req.body.title;
    const year = req.body.year;
    const runtime = req.body.runtime;
    const plot = req.body.plot;
    const director = req.body.director;
    const genre = req.body.genre;
    const imdbRating = req.body.imdbRating;
    const poster = req.body.poster;

    Film.updateOne(
        { imdbID: imdbID },
        { $set: { 
            imdbID: imdbID,
            title: title,
            year: year,
            runtime: runtime,
            plot: plot,
            director: director,
            genre: genre,
            imdbRating: imdbRating,
            poster: poster
        } },
        { upsert: true }
    ).then(() => res.json('Film added!'))
    .catch(err => res.status(400).json('Error: ' + err));

    Rating.updateOne(
        { user: user, film: imdbID },
        { $set: { 
            user: user,
            film: imdbID,
            rating: rating
        } },
        { upsert: true }
    ).then(() => res.json('Rating added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Get user's review for a film
router.route('/:user/:id').get((req, res) => {
    Rating.find({ user: req.params.user, film: req.params.id })
    .then(film => res.json(film))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Get all users reviews
router.route('/:user').get((req, res) => {
    Rating.aggregate([
        {$match: { "user": req.params.user } },
        {$lookup: {
            from: 'films',
            localField: 'film',
            foreignField: 'imdbID',
            as: 'filmRatings'
        }}
    ]).then(ratings => res.json(ratings))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;