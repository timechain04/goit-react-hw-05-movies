import styles from './MovieInfo.module.css';
import PropTypes from 'prop-types';

export function MovieInfo({
  movieTitle,
  movieOverview,
  movieRait,
  moviePoster,
  movieGenres,
  movieDate,
}) {
  const movScore = Math.round(movieRait * 10);
  let src = `https://image.tmdb.org/t/p/w500${moviePoster}`;
  if (moviePoster === null) {
    src ='https://cdn-icons-png.flaticon.com/512/4054/4054617.png';
  }
  return (
    <div className={styles.movieInfoWrap}>
      <div className={styles.posterWrap}>
        <img className={styles.movieInfoPoster} src={src} alt={movieTitle} width='320px' />
      </div>
      <div>
        <h2>
          {movieTitle} ({movieDate})
        </h2>
        <p className={styles.overview}>User Score: {movScore}%</p>
        <p className={styles.overview}>Overview</p>
        <p className={styles.overviewContent}>{movieOverview}</p>
        <p className={styles.overview}>Genres</p>
        <p>{movieGenres}</p>
      </div>
    </div>
  );
}

MovieInfo.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  movieOverview: PropTypes.string.isRequired,
  movieRait: PropTypes.number.isRequired,
  moviePoster: PropTypes.string,
  movieGenres: PropTypes.string.isRequired,
  movieDate: PropTypes.string.isRequired,
};
