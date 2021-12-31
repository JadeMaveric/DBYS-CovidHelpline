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
import { Ambulance } from "../utils/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

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
  ambulance: Ambulance;
}

const AmbulanceCard: React.FC<CardProps> = (props: CardProps) => {
  const { ambulance } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDialogClose = () => {
    return setOpen(false);
  };

  const handleDialogOpen = () => {
    return setOpen(true);
  };

  const verifiedLabel = ambulance.verified ? (
    <Tooltip title="Verified">
      <FontAwesomeIcon icon={faCheckCircle} color={"#19857b"} />
    </Tooltip>
  ) : (
    <Tooltip title="Not Verified">
      <WarningRounded color="error" />
    </Tooltip>
  );

  return (
    <>
      <Card>
        <CardContent onClick={handleDialogOpen}>
          <Typography variant="h6" color="textPrimary">
            {ambulance.name} {verifiedLabel}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            {ambulance.type}
          </Typography>
          <Typography className={classes.wrapIcon} gutterBottom>
            <LocationOn color="primary" />{" "}
            {ambulance.service_areas !== "Unknown"
              ? ambulance.service_areas
              : ambulance.location}
          </Typography>
          <Typography variant="body2" component="p" gutterBottom noWrap>
            {ambulance.facility}
          </Typography>
          <div>
            {ambulance.contact
              .split("/")
              .slice(0, 3)
              .map((contact) => (
                <Chip
                  icon={<FontAwesomeIcon icon={faPhoneAlt} fixedWidth />}
                  label={contact.trim()}
                  className={classes.contactChip}
                />
              ))}
          </div>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleDialogOpen}>
            Learn More
          </Button>
        </CardActions>
      </Card>
      <InfoDialog open={open} onClose={handleDialogClose} jsonObj={ambulance} />
    </>
  );
};

export default AmbulanceCard;
