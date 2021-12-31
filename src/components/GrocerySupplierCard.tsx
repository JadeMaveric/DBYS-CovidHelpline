import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
  Tooltip,
} from "@material-ui/core";
import { WarningRounded, LocationOn } from "@material-ui/icons";
import InfoDialog from "./InfoDialog";
import { GrocerySupplier } from "../utils/types";
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
            {grocerySupplier.name} {verifiedLabel}
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
          <Typography variant="body2" component="p" gutterBottom noWrap>
            {"Work Hours: " + grocerySupplier.work_hours}
          </Typography>
          <div>
            <Chip
              icon={<FontAwesomeIcon icon={faPhoneAlt} fixedWidth />}
              label={grocerySupplier.contact}
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
        jsonObj={grocerySupplier}
      />
    </>
  );
};

export default GrocerySupplierCard;
