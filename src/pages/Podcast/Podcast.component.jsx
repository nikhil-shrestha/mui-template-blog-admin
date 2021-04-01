import React from 'react';
import Typography from '@material-ui/core/Typography';

import PodcastCard from 'src/modules/views/PodcastCard';
import EpisodeCard from 'src/modules/views/EpisodeCard';

import container from './Podcast.container';

const Podcast = (props) => {
  const { podcast, onSetPlayerCurrentTrack } = props;

  return (
    <>
      <PodcastCard data={podcast} key={podcast.id} viewDisable />
      <Typography variant="h4" align="center">
        Episodes
      </Typography>
      {podcast.episodes.length &&
        podcast.episodes.map((episode, i) => (
          <EpisodeCard
            data={episode}
            key={episode.guid}
            setPlayerEpisode={onSetPlayerCurrentTrack}
          />
        ))}
    </>
  );
};

export default container(Podcast);
