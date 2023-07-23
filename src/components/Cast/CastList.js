import css from '../Cast/Cast.module.css';
import PropTypes from 'prop-types';

export function CastList({ actorName, character, actorPhoto }) {
  let src = `https://image.tmdb.org/t/p/original${actorPhoto}`;

  if (actorPhoto === null) {
    src ='https://cdn-icons-png.flaticon.com/512/4054/4054617.png';
  }

  return (
    <li className={css.CastItem}>
      <img src={src} alt="{actorName}" width='140px' />
      <p>{actorName}</p>
      <p> Character: {character}</p>
    </li>
  );
}

CastList.propTypes = {
  actorName: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  actorPhoto: PropTypes.string,
};