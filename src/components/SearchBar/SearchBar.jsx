import Button from 'components/Button/Button';
import { useState } from 'react';

import s from './SearchBar.module.css';

const SearchBar = ({ changeQuery, pageChange }) => {
  const [inputQuery, setInputQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (inputQuery.trim() === '') return;

    pageChange(1);
    changeQuery(inputQuery.trim());
    // setInputQuery('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <input
        onChange={e => setInputQuery(e.target.value)}
        value={inputQuery}
        placeholder="Search movie"
        className={s.inputSearch}
      />
      <Button className={s.buttonSearch} label="Search" type="submit" />
    </form>
  );
};

export default SearchBar;
