import React, { useState } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchAppBar from '../components/SearchAppBar';
import CounsellorCard from '../components/CounsellorCard';
import JSONData from '../../content/json/counsellors.json';
import keyworkFilter from '../utils/keywordFilter';
import { Counsellor } from '../utils/types';

const useStyles = makeStyles({
    container: {
        padding: 8,
    }
})

export default function CounsellorView() {
    const classes = useStyles();
    const [searchTerm, updateSearchTerm] = useState("");

    //@ts-ignore
    const counsellors = keyworkFilter(JSONData, searchTerm) as Counsellor[]

    return (
        <>
            <SearchAppBar title="Counsellors" updateSearch={updateSearchTerm}/>
            <Box className={classes.container}>
                { counsellors.length
                ? <Grid container spacing={1}>
                    {counsellors.map((counsellor, index) => 
                        <Grid item key={`counsellor_${index}`} xl={3} lg={3} md={4} sm={6} xs={12}>
                            <CounsellorCard counsellor={counsellor}/>
                        </Grid>
                    )}
                </Grid>
                : <Typography variant="h4" color="textSecondary" align="center">No Matching Entries</Typography>
                }
            </Box>
        </>
    );   
}
