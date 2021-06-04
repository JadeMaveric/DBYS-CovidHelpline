import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  Chip,
  Button,
  Typography,
  Tooltip,
} from "@material-ui/core";
import { WarningRounded, LocationOn } from "@material-ui/icons";
import InfoDialog from "./InfoDialog";
import { FoodSupplier } from "../utils/types";
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
  foodSupplier: FoodSupplier;
}

const FoodSupplierCard: React.FC<CardProps> = (props: CardProps) => {
  const { foodSupplier } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDialogClose = () => {
    setOpen(false);
  };

  const handleDialogOpen = () => {
    setOpen(true);
  };

  const verifiedLabel = foodSupplier.verified ? (
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
          <Typography
            variant="h6"
            color="textPrimary"
          >
            {foodSupplier.name} {verifiedLabel}
          </Typography>
          <Typography color="textSecondary">
            {foodSupplier.source + " - " + foodSupplier.type}
          </Typography>
          <Typography className={classes.wrapIcon} gutterBottom>
            <LocationOn color="primary" /> {foodSupplier.location}
          </Typography>
          <Typography variant="body2" component="p" gutterBottom noWrap>
            {foodSupplier.notes}
          </Typography>
          <div>
            <Chip
              icon={<FontAwesomeIcon icon={faPhoneAlt} fixedWidth />}
              label={foodSupplier.contact}
              className={classes.contactChip}
            />
          </div>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleDialogOpen}>
            Learn More
          </Button>
        </CardActions>
      </Card>
      <InfoDialog
        open={open}
        onClose={handleDialogClose}
        jsonObj={foodSupplier}
      />
    </>
  );
};

export default FoodSupplierCard;
