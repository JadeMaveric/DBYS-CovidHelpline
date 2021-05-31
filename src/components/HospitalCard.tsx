import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, Button, Typography, Tooltip } from '@material-ui/core';
import { VerifiedUser, WarningRounded, LocationOn } from '@material-ui/icons';
import InfoDialog from './InfoDialog';
import { Hospital } from '../utils/types';

const useStyles = makeStyles({
  wrapIcon: {
    verticalAlign: 'middle',
    display: 'inline-flex',
  }
});

interface CardProps {
    hospital: Hospital
}

export default function HospitalCard(props: CardProps) {
    const { hospital } = props;
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleDialogClose = () => {
      setOpen(false)
    }

    const handleDialogOpen = () => {
      setOpen(true)
    }

    const verifiedLabel = hospital.verified
        ? <Tooltip title="Verified"><VerifiedUser color="secondary"/></Tooltip>
        : <Tooltip title="Not Verified"><WarningRounded color="error"/></Tooltip>
  
    return (
      <>
        <Card>
          <CardContent>
            <Typography className={classes.wrapIcon} onClick={handleDialogOpen} variant="h6" color="textPrimary" noWrap>
            {verifiedLabel} {hospital.name}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {hospital.type}
            </Typography>
            <Typography className={classes.wrapIcon} gutterBottom>
              <LocationOn color="primary"/> {hospital.location}
            </Typography>
            <Typography variant="body2" component="p" noWrap>
              {hospital.facility}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={handleDialogOpen}>Learn More</Button>
          </CardActions>
        </Card>
        <InfoDialog open={open} onClose={handleDialogClose} jsonObj={hospital}/>
      </>
    );
}