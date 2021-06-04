import React, { useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TestCenterCard from "../components/TestCenterCard";
import JSONData from "../../content/json/testCenters.json";
import keyworkFilter from "../utils/keywordFilter";
import { TestCenter } from "../utils/types";
import Layout from "../components/Layout";

const useStyles = makeStyles({
  container: {
    paddingTop: 8,
  },
});

const TestCenterView: React.FC = () => {
  const classes = useStyles();
  const [searchTerm, updateSearchTerm] = useState("");

  const testCenters = keyworkFilter(
    JSONData,
    searchTerm
  ) as unknown as TestCenter[];

  return (
    <Layout title={"Test Centers"} updateSearchTerm={updateSearchTerm}>
      <Box className={classes.container}>
        {testCenters.length ? (
          <Grid container spacing={1}>
            {testCenters.map((testCenter, index) => (
              <Grid item key={`testcenter_${index}`} sm={6} xs={12}>
                <TestCenterCard testCenter={testCenter} />
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

export default TestCenterView;
