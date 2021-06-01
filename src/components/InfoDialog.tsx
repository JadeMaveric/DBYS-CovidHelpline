import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import {
  Typography,
  Dialog,
  DialogTitle,
  IconButton,
  Container,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  })
);

interface DialogProps {
  open: boolean;
  jsonObj: {
    name: string;
  };
  onClose: () => void;
}

const InfoDialog: React.FC<DialogProps> = (props: DialogProps) => {
  const { open, jsonObj, onClose } = props;
  const classes = useStyles();

  const json_keys = Object.keys(jsonObj);
  const json_values = Object.values(jsonObj);

  return (
    <Dialog onClose={onClose} aria-labelledby="info-dialog-title" open={open}>
      <DialogTitle id="info-dialog-title">
        {jsonObj.name}
        {onClose ? (
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={onClose}
          >
            <Close />
          </IconButton>
        ) : null}
      </DialogTitle>
      {json_keys.map((key, idx) => (
        <Container key={`property_${key}_${idx}`}>
          <Typography variant="caption" color="secondary">
            {key}
          </Typography>
          <Typography>
            {typeof json_values[idx] === "string"
              ? json_values[idx]
              : JSON.stringify(json_values[idx])}
          </Typography>
        </Container>
      ))}
    </Dialog>
  );
};

export default InfoDialog;
