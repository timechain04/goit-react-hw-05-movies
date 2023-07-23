import { useState } from 'react';
import PropTypes from 'prop-types';
import css from '../Searchbar/Searchbar.module.css';

export function Searchbar({ onSubmit, value }) {

  const [serachbarQuery, setSerachbarQuery] = useState(value);

  const handleFormSubmit = evt => {
    evt.preventDefault();
    if (serachbarQuery.trim() !== '') {
      onSubmit(serachbarQuery);
    } 
    setSerachbarQuery('');
  };

  const handleInputChange = evt => {
    setSerachbarQuery(evt.target.value.toLowerCase());
  };

  return (
    <form className={css.Searchbar} onSubmit={handleFormSubmit}>
      <input
        value={serachbarQuery}
        type="text"
        autoComplete="off"
        autoFocus
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
