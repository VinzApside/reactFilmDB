import React, { useEffect, useRef, useState } from 'react';

import searchIcon from '../../images/search-icon.svg';
import { Content, Wrapper } from './SearchBar.styles';

//image
//styles
const SearchBar = ({ setSearchTerm }) => {
  const [state, setState] = useState('test');
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);
    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon"></img>
        <input type="text" placeholder="Search movie" value={state} onChange={(event) => setState(event.currentTarget.value)} />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
