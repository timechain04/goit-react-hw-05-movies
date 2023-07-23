import PropTypes from 'prop-types';

export function MovieList({ children }) {
  return <ul>{children}</ul>;
}

MovieList.propTypes = {
  children: PropTypes.node,
};