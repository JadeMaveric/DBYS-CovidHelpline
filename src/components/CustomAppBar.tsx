import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import {
  createStyles,
  Theme,
  makeStyles,
} from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: "block",
    }
  })
);

interface AppBarProps {
  title: string;
  updateSearch?: React.Dispatch<React.SetStateAction<string>>;
  toggleDrawer: () => void;
}

const CustomAppBar: React.FC<AppBarProps> = (props: AppBarProps) => {
  const classes = useStyles();
  const { title, toggleDrawer } = props;

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};

export default CustomAppBar;
