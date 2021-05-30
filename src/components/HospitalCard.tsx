import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, Button, Typography, Tooltip, Dialog, DialogTitle, IconButton, Container } from '@material-ui/core';
import { VerifiedUser, WarningRounded, LocationOn, Close } from '@material-ui/icons';
import { Hospital } from '../utils/types';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    wrapIcon: {
      verticalAlign: 'middle',
      display: 'inline-flex',
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  })
);

interface CardProps {
    hospital: Hospital
}

// TODO: Abstract Dialog
interface DialogProps {
  open: boolean,
  hospital: Hospital,
  onClose: () => void,
}

function HospitalDialog(props: DialogProps) {
  const { open, hospital, onClose } = props;
  const classes = useStyles();

  const hospital_keys = Object.keys(hospital)
  const hospital_values = Object.values(hospital)

  return (
    <Dialog onClose={onClose} aria-labelledby="info-dialog-title" open={open}>
      <DialogTitle id="info-dialog-title">
        {hospital.name}
        {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <Close />
        </IconButton>
      ) : null}
      </DialogTitle>
        {hospital_keys.map((key, idx) => (
          <Container key={`property_${key}_${idx}`}>
            <Typography variant="caption" color="secondary">{key}</Typography>
            <Typography>{
              typeof(hospital_values[idx]) === "string"
              ? hospital_values[idx]
              : JSON.stringify(hospital_values[idx])
            }</Typography>
          </Container>
        ))}
    </Dialog>
  );
}

export default function HospitalCard(props: CardProps) {
    const { hospital } = props;
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleDialogClose = () => {
      setOpen(false)
    }

    const verifiedLabel = hospital.verified
        ? <Tooltip title="Verified"><VerifiedUser color="secondary"/></Tooltip>
        : <Tooltip title="Not Verified"><WarningRounded color="error"/></Tooltip>
  
    return (
      <>
        <Card>
          <CardContent>
            <Typography className={classes.wrapIcon} variant="h6" color="textPrimary" noWrap>
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
            <Button size="small" onClick={()=>setOpen(true)}>Learn More</Button>
          </CardActions>
        </Card>
        <HospitalDialog open={open} onClose={handleDialogClose} hospital={hospital}/>
      </>
    );
}