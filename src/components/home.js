import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Axios from 'axios';
import FilmSummary from './film-rating-summary';

function Home() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
      Axios.get('/films').then(res => {
                setFilms(res.data);
			});
  }, []);

  return (
    <Container> 
      <Row>
        <Col>
        <h1>3 most recent film ratings:</h1>
        </Col>
      </Row>
        <Row>
            {films.map(film => 
            <div className="col-md-4 col-sm-4 col-xs-12 film-padding">
      <FilmSummary 
        title={film.filmRatings[0].title}
        imdbID={film.filmRatings[0].imdbID}
        poster={film.filmRatings[0].poster}
        year={film.filmRatings[0].year}
        user={film.user}
        rating={film.rating}
    />
    </div>
      )}
      
        </Row>
      
      
    </Container>
  );
}

export default Home;