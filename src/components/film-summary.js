import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Axios from 'axios';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { Rating } from '@material-ui/lab';

export const Film = (props) => {
    const [film, setFilm] = useState([]);
    const [currentRating, setCurrentRating] = useState([]);

    const { user } = useAuth0();
  
  useEffect(() => {
    Axios.get(`http://www.omdbapi.com/?i=${props.match.params.id}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`).then(res => {
              setFilm(res.data);
          });
}, []);

useEffect(() => {
    Axios.get(`/films/${user.nickname}/${props.match.params.id}`).then(res => {
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
        <img src={film.Poster} alt={film.Title} onError={(e)=>{e.target.onerror = null; e.target.src="/no-image.png"}} width="100%"></img>
    </div>
    <div className="col-md-8 col-sm-8">
        <p><strong>Title: </strong>{film.Title}</p>
        <p><strong>Year: </strong>{film.Year}</p>
        <p><strong>Director: </strong>{film.Director}</p>
        <p><strong>Genre: </strong>{film.Genre}</p>
        <p><strong>Runtime: </strong>{film.Runtime}</p>
        <p><strong>Plot: </strong>{film.Plot}</p>
        <Rating name="hover-feedback" value={currentRating} max={10} precision={0.5} size="large" onChange={(event, newValue) => {console.log(newValue);}}/>
        <p>{currentRating}</p>
    </div>
    </Row>
    </Container>
  );
};

export default withAuthenticationRequired(Film);