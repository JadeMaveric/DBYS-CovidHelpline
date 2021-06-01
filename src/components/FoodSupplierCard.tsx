import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Tooltip,
} from "@material-ui/core";
import { VerifiedUser, WarningRounded, LocationOn } from "@material-ui/icons";
import InfoDialog from "./InfoDialog";
import { FoodSupplier } from "../utils/types";

const useStyles = makeStyles({
  wrapIcon: {
    verticalAlign: "middle",
    display: "inline-flex",
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
      <VerifiedUser color="secondary" />
    </Tooltip>
  ) : (
    <Tooltip title="Not Verified">
      <WarningRounded color="error" />
    </Tooltip>
  );

  return (
    <>
      <Card>
        <CardContent>
          <Typography
            className={classes.wrapIcon}
            onClick={handleDialogOpen}
            variant="h6"
            color="textPrimary"
            noWrap
          >
            {verifiedLabel} {foodSupplier.name}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            {foodSupplier.source + " - " + foodSupplier.type}
          </Typography>
          <Typography className={classes.wrapIcon} gutterBottom>
            <LocationOn color="primary" /> {foodSupplier.location}
          </Typography>
          <Typography variant="body2" component="p" noWrap>
            {foodSupplier.notes}
          </Typography>
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
