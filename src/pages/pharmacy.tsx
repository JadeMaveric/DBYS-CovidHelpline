import React, { useState } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchAppBar from '../components/SearchAppBar';
import PharmacyCard from '../components/PharmacyCard';
import JSONData from '../../content/json/pharmacy.json';
import keyworkFilter from '../utils/keywordFilter';
import { Pharmacy } from '../utils/types';

const useStyles = makeStyles({
    container: {
        padding: 8,
    }
})

export default function PharmacyView() {
    const classes = useStyles();
    const [searchTerm, updateSearchTerm] = useState("");

    //@ts-ignore
    const pharmacys = keyworkFilter(JSONData, searchTerm) as Pharmacy[]

    return (
        <>
            <SearchAppBar title="Pharmacies" updateSearch={updateSearchTerm}/>
            <Box className={classes.container}>
                { pharmacys.length
                ? <Grid container spacing={1}>
                    {pharmacys.map((pharmacy, index) => 
                        <Grid item key={`foodSupplier_${index}`} xl={3} lg={3} md={4} sm={6} xs={12}>
                            <PharmacyCard pharmacy={pharmacy}/>
                        </Grid>
                    )}
                </Grid>
                : <Typography variant="h4" color="textSecondary" align="center">No Matching Entries</Typography>
                }
            </Box>
        </>
    );   
}
