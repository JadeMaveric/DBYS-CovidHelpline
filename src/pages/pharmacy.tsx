import React, { useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PharmacyCard from "../components/PharmacyCard";
import JSONData from "../../content/json/pharmacy.json";
import keyworkFilter from "../utils/keywordFilter";
import { Pharmacy } from "../utils/types";
import Layout from "../components/Layout";

const useStyles = makeStyles({
  container: {
    padding: 8,
  },
});

const PharmacyView: React.FC = () => {
  const classes = useStyles();
  const [searchTerm, updateSearchTerm] = useState("");

  const pharmacys = keyworkFilter(
    JSONData,
    searchTerm
  ) as unknown as Pharmacy[];

  return (
    <Layout title={"Pharmacies"} updateSearchTerm={updateSearchTerm}>
      <Box className={classes.container}>
        {pharmacys.length ? (
          <Grid container spacing={1}>
            {pharmacys.map((pharmacy, index) => (
              <Grid item key={`foodSupplier_${index}`} sm={6} xs={12}>
                <PharmacyCard pharmacy={pharmacy} />
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

export default PharmacyView;
