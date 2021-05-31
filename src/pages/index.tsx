import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../components/ProTip';
import Link from '../components/Link';
import Copyright from '../components/Copyright';
import Layout from '../components/Layout';

export default function Index(props : any) {
  return (
    <Layout title="DBYS - Covid Helpline">
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            DBYS-Covid Helpline
          </Typography>
          <Copyright />
        </Box>
      </Container>
    </Layout>
  );
}
