import React from 'react';
import { Rating } from '@material-ui/lab';

function FilmSummary(props) {
    const { imdbID, title, director, genre, poster, imdbRating, plot, runtime, year, rating, user} = props;
  return (
      <div>
            <div className="col-md-6 col-sm-6 col-xs-6 individual-film-padding">
                <img src={poster} alt={title} width="100%"></img>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-6">
                <p><strong>Title: </strong>{title}</p>
                <p><strong>Year: </strong>{year}</p>
                <p>Rated {rating}/10 by {user}</p>
                {//<Rating name="read-only" value={rating} max={10} precision={0.5} readOnly />
                }
            </div>
            </div>
  );
}

export default FilmSummary;