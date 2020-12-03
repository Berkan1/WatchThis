import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Axios from 'axios';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { Rating } from '@material-ui/lab';
import MuiAlert from '@material-ui/lab/Alert';
import { Snackbar } from '@material-ui/core';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const Film = (props) => {
    const [film, setFilm] = useState([]);
    const [currentRating, setCurrentRating] = useState(0);
    const [open, setOpen] = useState(false);
    const { user } = useAuth0();

    var ratingClass = "bad-rating";
    if(Number(film.imdbRating) > 7){
        ratingClass = "good-rating";
    }
    else if(Number(film.imdbRating) > 4.5){
        ratingClass = "ok-rating";
    }

    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

    const addRating = (filmRating) => {
      Axios.post(`/films/${film.imdbID}`, {
        user: user["https://example/username"],
        rating: filmRating,
        title: film.Title,
    director: film.Director,
    genre: film.Genre,
    plot: film.Plot,
    runtime: film.Runtime,
    imdbRating: film.imdbRating,
    poster: film.Poster,
    year: film.Year
    });
    }
  
  useEffect(() => {
    Axios.get(`http://www.omdbapi.com/?i=${props.match.params.id}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`).then(res => {
              setFilm(res.data);
          });
}, []);

useEffect(() => {
    Axios.get(`/films/${user["https://example/username"]}/${props.match.params.id}`).then(res => {
        if(res.data[0]){
            setCurrentRating(res.data[0].rating);
        }
        else {
            setCurrentRating(0);
        }
        
          });
}, []);

  return (
    <Container>
      <Row className="film-col">
      <div className="col-md-4 col-sm-4">
        <img id="testing" src={film.Poster} alt={film.Title} onError={(e)=>{e.target.onerror = null; e.target.src="/no-image.png"}} width="100%"></img>
    </div>
    <div className="col-md-8 col-sm-8">
        <p><strong>Title: </strong><span >{film.Title}</span></p>
        <p><strong>Year: </strong>{film.Year}</p>
        <p><strong>Director: </strong>{film.Director}</p>
        <p><strong>Genre: </strong>{film.Genre}</p>
        <p><strong>Runtime: </strong>{film.Runtime}</p>
        <p><strong>Plot: </strong>{film.Plot}</p>
        <p><strong>IMDb rating: </strong><span className={ratingClass}>{film.imdbRating}</span></p>
        <Rating name="editable-rating" 
          value={currentRating} 
          max={10} 
          precision={0.5} 
          size="large" 
          onChange={(event, newValue) => {
            if(!newValue){
              newValue=0;
            };
            handleClick();
            setCurrentRating(newValue);
            addRating(newValue); 
          }}
        />
        <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Your rating was saved!
        </Alert>
      </Snackbar>
    </div>
    </Row>
    </Container>
  );
};

export default withAuthenticationRequired(Film);