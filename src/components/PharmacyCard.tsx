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
import { Pharmacy } from "../utils/types";
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
  pharmacy: Pharmacy;
}

const PharmacyCard: React.FC<CardProps> = (props: CardProps) => {
  const { pharmacy } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDialogClose = () => {
    setOpen(false);
  };

  const handleDialogOpen = () => {
    setOpen(true);
  };

  const verifiedLabel = pharmacy.verified ? (
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
            {pharmacy.name} {verifiedLabel}
          </Typography>
          <Typography color="textSecondary" gutterBottom noWrap>
            Home Delivery: {pharmacy.home_delivery}
          </Typography>
          <Typography className={classes.wrapIcon} gutterBottom noWrap>
            <LocationOn color="primary" /> {pharmacy.location}
          </Typography>
          <Typography variant="body2" component="p" noWrap>
            {"Work Days: " + pharmacy.work_days}
          </Typography>
          <Typography variant="body2" component="p" gutterBottom noWrap>
            {"Work Hours: " + pharmacy.work_hours}
          </Typography>
          <div>
            <Chip
              icon={<FontAwesomeIcon icon={faPhoneAlt} fixedWidth />}
              label={pharmacy.contact}
              className={classes.contactChip}
            />
            {isFinite(Number(pharmacy.whatsapp.trim()[0])) ? (
              <Chip
                icon={
                  <FontAwesomeIcon icon={faWhatsapp} fixedWidth size="lg" />
                }
                label={pharmacy.whatsapp.trim()}
                className={classes.contactChip}
              />
            ) : null}
          </div>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleDialogOpen}>
            Learn More
          </Button>
        </CardActions>
      </Card>
      <InfoDialog open={open} onClose={handleDialogClose} jsonObj={pharmacy} />
    </>
  );
};

export default PharmacyCard;
