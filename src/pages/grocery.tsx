import React, { useState } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchAppBar from '../components/SearchAppBar';
import GrocerySupplierCard from '../components/GrocerySupplierCard';
import JSONData from '../../content/json/grocery.json';
import keyworkFilter from '../utils/keywordFilter';
import { GrocerySupplier } from '../utils/types';

const useStyles = makeStyles({
    container: {
        padding: 8,
    }
})

export default function GrocerySupplierView() {
    const classes = useStyles();
    const [searchTerm, updateSearchTerm] = useState("");

    //@ts-ignore
    const grocerySuppliers = keyworkFilter(JSONData, searchTerm) as GrocerySupplier[]

    return (
        <>
            <SearchAppBar title="Grocery Suppliers" updateSearch={updateSearchTerm}/>
            <Box className={classes.container}>
                { grocerySuppliers.length
                ? <Grid container spacing={1}>
                    {grocerySuppliers.map((grocerySupplier, index) => 
                        <Grid item key={`foodSupplier_${index}`} xl={3} lg={3} md={4} sm={6} xs={12}>
                            <GrocerySupplierCard grocerySupplier={grocerySupplier}/>
                        </Grid>
                    )}
                </Grid>
                : <Typography variant="h4" color="textSecondary" align="center">No Matching Entries</Typography>
                }
            </Box>
        </>
    );   
}
