import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, Button, Typography, Tooltip } from '@material-ui/core';
import { VerifiedUser, WarningRounded, LocationOn } from '@material-ui/icons';
import InfoDialog from './InfoDialog';
import { Ambulance } from '../utils/types';

const useStyles = makeStyles({
  wrapIcon: {
    verticalAlign: 'middle',
    display: 'inline-flex',
  }
});

interface CardProps {
    ambulance: Ambulance
}

export default function AmbulanceCard(props: CardProps) {
    const { ambulance } = props;
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleDialogClose = () => {
      setOpen(false)
    }

    const verifiedLabel = ambulance.verified
        ? <Tooltip title="Verified"><VerifiedUser color="secondary"/></Tooltip>
        : <Tooltip title="Not Verified"><WarningRounded color="error"/></Tooltip>
  
    return (
      <>
        <Card>
          <CardContent>
            <Typography className={classes.wrapIcon} variant="h6" color="textPrimary" noWrap>
            {verifiedLabel} {ambulance.name}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {ambulance.type}
            </Typography>
            <Typography className={classes.wrapIcon} gutterBottom>
              <LocationOn color="primary"/> {ambulance.service_areas !== "Unknown" ? ambulance.service_areas : ambulance.location}
            </Typography>
            <Typography variant="body2" component="p" noWrap>
              {ambulance.facility}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={()=>setOpen(true)}>Learn More</Button>
          </CardActions>
        </Card>
        <InfoDialog open={open} onClose={handleDialogClose} jsonObj={ambulance}/>
      </>
    );
}