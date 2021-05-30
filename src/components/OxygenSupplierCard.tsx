import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, Button, Typography, Tooltip } from '@material-ui/core';
import { VerifiedUser, WarningRounded, LocationOn } from '@material-ui/icons';
import InfoDialog from './InfoDialog';
import { OxygenSupplier } from '../utils/types';

const useStyles = makeStyles({
  wrapIcon: {
    verticalAlign: 'middle',
    display: 'inline-flex',
  }
});

interface CardProps {
    oxygenSupplier: OxygenSupplier
}

export default function OxygenSupplierCard(props: CardProps) {
    const { oxygenSupplier } = props;
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleDialogClose = () => {
      setOpen(false)
    }

    const verifiedLabel = oxygenSupplier.verified
        ? <Tooltip title="Verified"><VerifiedUser color="secondary"/></Tooltip>
        : <Tooltip title="Not Verified"><WarningRounded color="error"/></Tooltip>
  
    return (
      <>
        <Card>
          <CardContent>
            <Typography className={classes.wrapIcon} variant="h6" color="textPrimary" noWrap>
            {verifiedLabel} {oxygenSupplier.name}
            </Typography>
            <br/>
            <Typography className={classes.wrapIcon} gutterBottom>
              <LocationOn color="primary"/> {oxygenSupplier.location}
            </Typography>
            <Typography color="textSecondary" gutterBottom noWrap>
              {"Delivery Available: " + oxygenSupplier.delivery_available}
            </Typography>
            <Typography variant="body2" component="p" noWrap>
              {"Work Days: " + oxygenSupplier.work_days}
            </Typography>
            <Typography variant="body2" component="p" noWrap>
              {"Work Hours: " + oxygenSupplier.work_hours}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={()=>setOpen(true)}>Learn More</Button>
          </CardActions>
        </Card>
        <InfoDialog open={open} onClose={handleDialogClose} jsonObj={oxygenSupplier}/>
      </>
    );
}