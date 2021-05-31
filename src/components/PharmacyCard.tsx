import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, Button, Typography, Tooltip } from '@material-ui/core';
import { VerifiedUser, WarningRounded, LocationOn } from '@material-ui/icons';
import InfoDialog from './InfoDialog';
import { Pharmacy } from '../utils/types';

const useStyles = makeStyles({
  wrapIcon: {
    verticalAlign: 'middle',
    display: 'inline-flex',
  }
});

interface CardProps {
    pharmacy: Pharmacy
}

export default function PharmacyCard(props: CardProps) {
    const { pharmacy } = props;
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleDialogClose = () => {
      setOpen(false)
    }

    const handleDialogOpen = () => {
      setOpen(true)
    }

    const verifiedLabel = pharmacy.verified
        ? <Tooltip title="Verified"><VerifiedUser color="secondary"/></Tooltip>
        : <Tooltip title="Not Verified"><WarningRounded color="error"/></Tooltip>
  
    return (
      <>
        <Card>
          <CardContent>
            <Typography className={classes.wrapIcon} onClick={handleDialogOpen} variant="h6" color="textPrimary" noWrap>
            {verifiedLabel} {pharmacy.name}
            </Typography>
            <Typography color="textSecondary" gutterBottom noWrap>
              Home Delivery: {pharmacy.home_delivery}
            </Typography>
            <Typography className={classes.wrapIcon} gutterBottom noWrap>
              <LocationOn color="primary"/> {pharmacy.location}
            </Typography>
            <Typography variant="body2" component="p" noWrap>
              {"Work Days: " + pharmacy.work_days}
            </Typography>
            <Typography variant="body2" component="p" noWrap>
              {"Work Hours: " + pharmacy.work_hours}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={handleDialogOpen}>Learn More</Button>
          </CardActions>
        </Card>
        <InfoDialog open={open} onClose={handleDialogClose} jsonObj={pharmacy}/>
      </>
    );
}