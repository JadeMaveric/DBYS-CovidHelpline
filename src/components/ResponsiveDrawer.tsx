import React from "react";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import Link from "./Link";
import {
  BatteryStd,
  Business,
  ChevronLeft,
  ChevronRight,
  Home,
  LocalHospital,
  LocalPharmacy,
  LocalShipping,
  RecordVoiceOver,
  Restaurant,
  Storefront,
  Info,
} from "@material-ui/icons";
import { IconButton, ListItemIcon } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

interface Props {
  window?: () => Window;
  drawerOpen: boolean;
  toggleDrawer: () => void;
  menuLinks: {
    name: string;
    link: string;
  }[];
  currentPage: string;
}

interface ElementMap {
  [key: string]: JSX.Element;
}

const ResponsiveDrawer: React.FC<Props> = (props: Props) => {
  const { window, drawerOpen, toggleDrawer, menuLinks, currentPage } = props;
  const classes = useStyles();
  const theme = useTheme();

  const menuIcon: ElementMap = {
    "/": <Home />,
    "/hospital": <LocalHospital />,
    "/ambulance": <LocalShipping />,
    "/testcenter": <Business />,
    "/oxygen": <BatteryStd />,
    "/food": <Restaurant />,
    "/grocery": <Storefront />,
    "/counsellor": <RecordVoiceOver />,
    "/pharmacy": <LocalPharmacy />,
    "/about": <Info />,
  };

  const drawer = (
    <div>
      <div className={classes.drawerHeader}>
        <IconButton onClick={toggleDrawer}>
          {theme.direction === "ltr" ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      </div>
      <Divider />
      <List>
        {menuLinks.map(({ name, link }) => (
          <Link
            key={name}
            to={link}
            color={name == currentPage ? "secondary" : "primary"}
          >
            <ListItem button disabled={name == currentPage}>
              <ListItemIcon>{menuIcon[link]}</ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Hidden implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={drawerOpen}
          onClose={toggleDrawer}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default ResponsiveDrawer;
