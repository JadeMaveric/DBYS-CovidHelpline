import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, Button, Typography, Tooltip } from '@material-ui/core';
import { VerifiedUser, WarningRounded, LocationOn } from '@material-ui/icons';
import InfoDialog from './InfoDialog';
import { Counsellor } from '../utils/types';

const useStyles = makeStyles({
  wrapIcon: {
    verticalAlign: 'middle',
    display: 'inline-flex',
  }
});

interface CardProps {
    counsellor: Counsellor
}

export default function CounsellorCard(props: CardProps) {
    const { counsellor } = props;
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleDialogClose = () => {
      setOpen(false)
    }

    const verifiedLabel = counsellor.verified
        ? <Tooltip title="Verified"><VerifiedUser color="secondary"/></Tooltip>
        : <Tooltip title="Not Verified"><WarningRounded color="error"/></Tooltip>
    
    // TODO: Modify location icon for tele consultation
    // TODO: Add Whatsapp icon as badge
    return (
      <>
        <Card>
          <CardContent>
            <Typography className={classes.wrapIcon} variant="h6" color="textPrimary" noWrap>
            {verifiedLabel} {counsellor.name}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {"WHATSAPP: " + counsellor.whatsapp}
            </Typography>
            <Typography className={classes.wrapIcon} gutterBottom>
              <LocationOn color="primary"/> {counsellor.location}
            </Typography>
            <Typography variant="body2" component="p" noWrap>
              {counsellor.work_hours}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={()=>setOpen(true)}>Learn More</Button>
          </CardActions>
        </Card>
        <InfoDialog open={open} onClose={handleDialogClose} jsonObj={counsellor}/>
      </>
    );
}