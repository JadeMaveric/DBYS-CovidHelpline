import React, { useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GrocerySupplierCard from "../components/GrocerySupplierCard";
import JSONData from "../../content/json/grocery.json";
import keyworkFilter from "../utils/keywordFilter";
import { GrocerySupplier } from "../utils/types";
import Layout from "../components/Layout";

const useStyles = makeStyles({
  container: {
    padding: 8,
  },
});

const GrocerySupplierView: React.FC = () => {
  const classes = useStyles();
  const [searchTerm, updateSearchTerm] = useState("");

  const grocerySuppliers = keyworkFilter(
    JSONData,
    searchTerm
  ) as unknown as GrocerySupplier[];

  return (
    <Layout title={"Groceries/Kits"} updateSearchTerm={updateSearchTerm}>
      <Box className={classes.container}>
        {grocerySuppliers.length ? (
          <Grid container spacing={1}>
            {grocerySuppliers.map((grocerySupplier, index) => (
              <Grid item key={`foodSupplier_${index}`} sm={6} xs={12}>
                <GrocerySupplierCard grocerySupplier={grocerySupplier} />
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

export default GrocerySupplierView;
