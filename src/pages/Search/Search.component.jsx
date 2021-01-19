import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';

import PodcastCard from 'src/modules/views/PodcastCard';

import container from './Search.container';

function Search(props) {
  const { items, onFetchDataStart } = props;

  useEffect(() => {
    if (!items.length) {
      onFetchDataStart();
    }
  }, [items]);

  return (
    <Container>
      {items.map((data) => (
        <PodcastCard data={data} key={data.id} />
      ))}
    </Container>
  );
}

export default container(Search);
