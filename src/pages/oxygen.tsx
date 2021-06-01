import React, { useState } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import OxygenSupplierCard from '../components/OxygenSupplierCard';
import JSONData from '../../content/json/oxygenSuppliers.json';
import keyworkFilter from '../utils/keywordFilter';
import { OxygenSupplier } from '../utils/types';
import Layout from '../components/Layout';

const useStyles = makeStyles({
    container: {
        padding: 8,
    }
})

const OxygenSupplierView : React.FC = () => {
    const classes = useStyles();
    const [searchTerm, updateSearchTerm] = useState("");

    const oxygenSuppliers = keyworkFilter(JSONData, searchTerm) as unknown as OxygenSupplier[]

    return (
        <Layout title={"Oxygen Suppliers"} updateSearchTerm={updateSearchTerm}>
            <Box className={classes.container}>
                { oxygenSuppliers.length
                ? <Grid container spacing={1}>
                    {oxygenSuppliers.map((oxygenSupplier, index) => 
                        <Grid item key={`oxygensupplier_${index}`} xl={3} lg={3} md={4} sm={6} xs={12}>
                            <OxygenSupplierCard oxygenSupplier={oxygenSupplier}/>
                        </Grid>
                    )}
                </Grid>
                : <Typography variant="h4" color="textSecondary" align="center">No Matching Entries</Typography>
                }
            </Box>
        </Layout>
    );   
}

export default OxygenSupplierView;
