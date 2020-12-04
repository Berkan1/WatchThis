import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Container, Row, Col } from 'react-bootstrap';
import Axios from 'axios';
import FilmSummary from './film-rating-summary';

function Welcome(props) {
  return (
  <p className="welcome">{props.content}</p>
  );
}

function Home() {
  const [films, setFilms] = useState([]);
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    Axios.get('/films').then(res => {
      setFilms(res.data);
		});
  }, []);

  return (
    <Container> 
      <Row>
        {isAuthenticated 
          ? <Welcome content={`Welcome ${user["https://example/username"]}! You can find films to score from the 'Add Rating' tab and view all your scores on the 'My Ratings' page.`}/> 
          : <Welcome content="Welcome to WatchThis! Use the Log In button at the top right to sign in and start scoring your favourite films!"/>
        }
      </Row>
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