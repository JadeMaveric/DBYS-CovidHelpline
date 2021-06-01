import React, { useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FoodSupplierCard from "../components/FoodSupplierCard";
import JSONData from "../../content/json/food.json";
import keyworkFilter from "../utils/keywordFilter";
import { FoodSupplier } from "../utils/types";
import Layout from "../components/Layout";

const useStyles = makeStyles({
  container: {
    padding: 8,
  },
});

const FoodSupplierView: React.FC = () => {
  const classes = useStyles();
  const [searchTerm, updateSearchTerm] = useState("");

  const foodSuppliers = keyworkFilter(
    JSONData,
    searchTerm
  ) as unknown as FoodSupplier[];

  return (
    <Layout title={"Cooked Food"} updateSearchTerm={updateSearchTerm}>
      <Box className={classes.container}>
        {foodSuppliers.length ? (
          <Grid container spacing={1}>
            {foodSuppliers.map((foodSupplier, index) => (
              <Grid
                item
                key={`foodSupplier_${index}`}
                xl={3}
                lg={3}
                md={4}
                sm={6}
                xs={12}
              >
                <FoodSupplierCard foodSupplier={foodSupplier} />
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

export default FoodSupplierView;
