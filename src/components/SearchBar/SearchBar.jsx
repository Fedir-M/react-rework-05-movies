import Button from 'components/Button/Button';
import { useState } from 'react';

import s from './SearchBar.module.css';
import { useSearchParams } from 'react-router-dom';

const SearchBar = ({
  placeholder = 'Search movie',
  className = '',
  paramQuery = 'movieQuery',
}) => {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setsearchParams] = useSearchParams();
  const [inputQuery, setInputQuery] = useState(
    searchParams.get(paramQuery) ?? ''
  );
  const handleSubmit = e => {
    e.preventDefault();
    if (inputQuery.trim() === '') return;

    setsearchParams({ query: inputQuery.trim(), page: 1 });
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <input
        onChange={e => setInputQuery(e.target.value)}
        value={inputQuery}
        placeholder={placeholder}
        className={s.inputSearch}
      />
      <Button className={s.buttonSearch} label="Search" type="submit" />
    </form>
  );
};

export default SearchBar;
