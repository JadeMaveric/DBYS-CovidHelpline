import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { WarningRounded, LocationOn } from "@material-ui/icons";
import InfoDialog from "./InfoDialog";
import { Counsellor } from "../utils/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const useStyles = makeStyles({
  wrapIcon: {
    verticalAlign: "middle",
    display: "inline-flex",
  },
  contactChip: {
    margin: 2,
  },
});

interface CardProps {
  counsellor: Counsellor;
}

const CounsellorCard: React.FC<CardProps> = (props: CardProps) => {
  const { counsellor } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDialogClose = () => {
    setOpen(false);
  };

  const handleDialogOpen = () => {
    setOpen(true);
  };

  const verifiedLabel = counsellor.verified ? (
    <Tooltip title="Verified">
      <FontAwesomeIcon icon={faCheckCircle} color={"#19857b"} />
    </Tooltip>
  ) : (
    <Tooltip title="Not Verified">
      <WarningRounded color="error" />
    </Tooltip>
  );

  // TODO: Modify location icon for tele consultation
  // TODO: Add Whatsapp icon as badge
  return (
    <>
      <Card>
        <CardContent onClick={handleDialogOpen}>
          <Typography variant="h6" color="textPrimary">
            {counsellor.name} {verifiedLabel}
          </Typography>
          <Typography className={classes.wrapIcon} gutterBottom>
            <LocationOn color="primary" /> {counsellor.location}
          </Typography>
          <Typography variant="body2" component="p">
            {counsellor.work_hours}
          </Typography>
          <Typography variant="body2" component="p" gutterBottom>
            Charges: {counsellor.charges}
          </Typography>
          <div>
            <Chip
              icon={<FontAwesomeIcon icon={faPhoneAlt} fixedWidth />}
              label={counsellor.contact}
              className={classes.contactChip}
            />
            {!counsellor.whatsapp.toUpperCase().includes("NO") ? (
              <Chip
                icon={
                  <FontAwesomeIcon icon={faWhatsapp} fixedWidth size="lg" />
                }
                label={
                  counsellor.whatsapp.trim().length > 3
                    ? counsellor.whatsapp.slice(3).trim().slice(1, -1)
                    : counsellor.contact
                }
                className={classes.contactChip}
              />
            ) : null}
          </div>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => setOpen(true)}>
            Learn More
          </Button>
        </CardActions>
      </Card>
      <InfoDialog
        open={open}
        onClose={handleDialogClose}
        jsonObj={counsellor}
      />
    </>
  );
};

export default CounsellorCard;
