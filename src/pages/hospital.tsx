import React, { useState } from "react";
import { Box, Grid, Typography, Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../components/Layout";
import HospitalCard from "../components/HospitalCard";
import JSONData from "../../content/json/hospitals.json";
import keyworkFilter from "../utils/keywordFilter";
import { Hospital } from "../utils/types";

const useStyles = makeStyles({
  container: {
    paddingTop: 8,
  },
});

const HospitalView: React.FC = () => {
  const classes = useStyles();
  const [searchTerm, updateSearchTerm] = useState("");

  const hospitals = keyworkFilter(
    JSONData,
    searchTerm
  ) as unknown as Hospital[];

  return (
    <Layout
      title={"Hospitals + Care Centers"}
      updateSearchTerm={updateSearchTerm}
    >
      <Box className={classes.container}>
        {hospitals.length ? (
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
              <Card>
                <CardContent>
                  <Typography color="error">
                    For real time data of Covid Beds, please visit&nbsp;
                    <a href="https://goaonline.gov.in/beds">
                      https://goaonline.gov.in/beds
                    </a>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            {hospitals.map((hospital, index) => (
              <Grid item key={`hospital_${index}`} sm={6} xs={12}>
                <HospitalCard hospital={hospital} />
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

export default HospitalView;
