import React, { useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AmbulanceCard from "../components/AmbulanceCard";
import JSONData from "../../content/json/ambulances.json";
import keyworkFilter from "../utils/keywordFilter";
import { Ambulance } from "../utils/types";
import Layout from "../components/Layout";

const useStyles = makeStyles({
  container: {
    padding: 8,
  },
});

const AmbulanceView: React.FC = () => {
  const classes = useStyles();
  const [searchTerm, updateSearchTerm] = useState("");

  const ambulances = keyworkFilter(
    JSONData,
    searchTerm
  ) as unknown as Ambulance[];

  return (
    <Layout title={"Ambulances"} updateSearchTerm={updateSearchTerm}>
      <Box className={classes.container}>
        {ambulances.length ? (
          <Grid container spacing={1}>
            {ambulances.map((ambulance, index) => (
              <Grid item key={`ambulance_${index}`} sm={6} xs={12}>
                <AmbulanceCard ambulance={ambulance} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography variant="h4" color="textSecondary" align="center">
            No Matching Entries
          </Typography>
        )}
      </Box>
    </Layout>
  );
};

export default AmbulanceView;
