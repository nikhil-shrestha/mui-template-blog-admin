import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import Markdown from 'src/modules/components/Markdown';
import Typography from 'src/modules/components/Typography';

function Terms() {
  return (
    <Container>
      <Box mt={7} mb={12}>
        <Typography variant="h3" gutterBottom marked="center" align="center">
          Terms
        </Typography>
        <Markdown></Markdown>
      </Box>
    </Container>
  );
}

export default Terms;
