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
import { GrocerySupplier } from "../utils/types";

const useStyles = makeStyles({
  wrapIcon: {
    verticalAlign: "middle",
    display: "inline-flex",
  },
});

interface CardProps {
  grocerySupplier: GrocerySupplier;
}

const GrocerySupplierCard: React.FC<CardProps> = (props: CardProps) => {
  const { grocerySupplier } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDialogClose = () => {
    setOpen(false);
  };

  const handleDialogOpen = () => {
    setOpen(true);
  };

  const verifiedLabel = grocerySupplier.verified ? (
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
        <CardContent onClick={handleDialogOpen}>
          <Typography
            className={classes.wrapIcon}
            variant="h6"
            color="textPrimary"
            noWrap
          >
            {verifiedLabel} {grocerySupplier.name}
          </Typography>
          <Typography color="textSecondary" gutterBottom noWrap>
            {grocerySupplier.delivery_fee}
          </Typography>
          <Typography className={classes.wrapIcon} gutterBottom noWrap>
            <LocationOn color="primary" /> {grocerySupplier.location}
          </Typography>
          <Typography variant="body2" component="p" noWrap>
            {"Work Days: " + grocerySupplier.work_days}
          </Typography>
          <Typography variant="body2" component="p" noWrap>
            {"Work Hours: " + grocerySupplier.work_hours}
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
        jsonObj={grocerySupplier}
      />
    </>
  );
};

export default GrocerySupplierCard;
