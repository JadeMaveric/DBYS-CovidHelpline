import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Layout from "../components/Layout";
import { Divider, Grid, Link } from "@material-ui/core";

const Index: React.FC = () => {
  return (
    <Layout title="Lysander">
      <Box my={4} textAlign={"center"}>
        <Typography variant="h4" component="h1" gutterBottom>
          DBYS-Covid Helpline
        </Typography>
          <Typography>Hello Lysander. I've been expecting you...</Typography>
        <Divider />
        <Box textAlign="center">
          <Grid container spacing={3}>
            <Grid item sm={6}>
          <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              <Typography color="primary">BLUE PILL</Typography>
          </Link>
            </Grid>
            <Grid item sm={6}>
          <Link href="https://www.youtube.com/watch?v=L6IFZ6GWEmo">
              <Typography color="error">RED PILL</Typography>
          </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Layout>
  );
};

export default Index;
