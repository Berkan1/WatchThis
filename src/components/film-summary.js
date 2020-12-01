import React, { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";
import Axios from 'axios';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

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
        setCurrentRating(res.data[0].rating);
          });
}, []);

  return (
    <Container>
      <p>{film.Actors}</p>
      <p>{currentRating}</p>
    </Container>
  );
};

export default withAuthenticationRequired(Film);