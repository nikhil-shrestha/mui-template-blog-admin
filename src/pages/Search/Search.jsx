import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';

import PodcastCard from 'src/modules/views/PodcastCard';

function Search() {
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch(
      'https://8gc7llwtwl.execute-api.us-east-1.amazonaws.com/dev/podcast/list',
      {
        method: 'GET'
      }
    )
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp);
        setState(resp.Items);
      })
      .catch((err) => console.error(err.message));
  }, []);
  return (
    <Container>
      {state.map((data) => (
        <PodcastCard data={data} />
      ))}
    </Container>
  );
}

export default Search;
