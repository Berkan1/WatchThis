import React, { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";
import Axios from 'axios';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import FilmSummary from './film-rating-summary';

export const Search = () => {
    const [searchValue, setSearchValue] = useState([]);
    const [films, setFilms] = useState([]);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setSearchValue(event.target[0].value);
  }

  useEffect(() => {
    Axios.get(`http://www.omdbapi.com/?s=${searchValue}&type=movie&apikey=6c27148`).then(res => {
              setFilms(res.data.Search || []);
          });
}, [searchValue]);

  return (
    <Container>
      <form onSubmit={handleSearchSubmit}>
          <input 
            id="searchFilm"
            type="text"
            placeholder="Enter a film name"
            required 
          />
          <button className="btn btn-dark btn-search" aria-label="Search">
            <i className="glyphicon glyphicon-search"></i>
          </button>
      </form>
      {films.map(film => 
      <div className="col-md-4 col-sm-4 col-xs-12 film-padding">
          <FilmSummary 
          title={film.Title}
          poster={film.Poster}
          year={film.Year}
          imdbID={film.imdbID}
      />
      </div>
        )}
    </Container>
  );
};

export default withAuthenticationRequired(Search);