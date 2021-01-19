import React, { useState } from 'react';
import Container from '@material-ui/core/Container';

import SearchBar from './components/SearchBar';

import container from './Home.container';

function Index(props) {
  const { onFetchDataStart, history } = props;

  const [query, setQuery] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    onFetchDataStart(query, history);
  };

  return (
    <Container>
      <SearchBar query={query} setQuery={setQuery} onSubmit={onSubmit} />
    </Container>
  );
}

export default container(Index);
