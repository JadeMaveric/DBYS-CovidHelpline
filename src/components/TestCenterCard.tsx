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
import { VerifiedUser, WarningRounded, LocationOn } from "@material-ui/icons";
import InfoDialog from "./InfoDialog";
import { TestCenter } from "../utils/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

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
  testCenter: TestCenter;
}

const TestCenterCard: React.FC<CardProps> = (props: CardProps) => {
  const { testCenter } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDialogClose = () => {
    setOpen(false);
  };

  const handleDialogOpen = () => {
    setOpen(true);
  };

  const verifiedLabel = testCenter.verified ? (
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
            {verifiedLabel} {testCenter.name}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            {testCenter.type}
          </Typography>
          <Typography className={classes.wrapIcon} gutterBottom>
            <LocationOn color="primary" /> {testCenter.location}
          </Typography>
          <Typography variant="body2" component="p" noWrap>
            {testCenter.work_days}
          </Typography>
          <Typography variant="body2" component="p" gutterBottom noWrap>
            {testCenter.work_hours}
          </Typography>
          <div>
            <Chip
              icon={<FontAwesomeIcon icon={faPhoneAlt} fixedWidth />}
              label={testCenter.contact}
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
        jsonObj={testCenter}
      />
    </>
  );
};

export default TestCenterCard;
