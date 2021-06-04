import React from "react";
import {
  Box,
  Typography,
  Divider,
  Card,
  CardContent,
  Grid,
} from "@material-ui/core";
import Link from "../components/Link";
import Layout from "../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAmbulance,
  faHospitalAlt,
  faInfoCircle,
  faTemperatureLow,
  faPumpMedical,
  faClinicMedical,
  faUtensils,
  faStore,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";

interface ElementMap {
  [key: string]: JSX.Element;
}

const menuLinks = [
  {
    name: "Hospitals + Care Centers",
    link: "/hospital",
  },
  {
    name: "Ambulances",
    link: "/ambulance",
  },
  {
    name: "Test Centers",
    link: "/testcenter",
  },
  {
    name: "Oxygen Suppliers",
    link: "/oxygen",
  },
  {
    name: "Cooked Food",
    link: "/food",
  },
  {
    name: "Groceries/Kits",
    link: "/grocery",
  },
  {
    name: "Counsellors",
    link: "/counsellor",
  },
  {
    name: "Pharmacies",
    link: "/pharmacy",
  },
  {
    name: "About",
    link: "/about",
  },
];

const faIconColor = "#19857b";

const menuIcon: ElementMap = {
  "/hospital": (
    <FontAwesomeIcon icon={faHospitalAlt} color={faIconColor} fixedWidth />
  ),
  "/ambulance": (
    <FontAwesomeIcon icon={faAmbulance} color={faIconColor} fixedWidth />
  ),
  "/testcenter": (
    <FontAwesomeIcon icon={faTemperatureLow} color={faIconColor} fixedWidth />
  ),
  "/oxygen": (
    <FontAwesomeIcon icon={faPumpMedical} color={faIconColor} fixedWidth />
  ),
  "/food": <FontAwesomeIcon icon={faUtensils} color={faIconColor} fixedWidth />,
  "/grocery": <FontAwesomeIcon icon={faStore} color={faIconColor} fixedWidth />,
  "/counsellor": (
    <FontAwesomeIcon icon={faUserFriends} color={faIconColor} fixedWidth />
  ),
  "/pharmacy": (
    <FontAwesomeIcon icon={faClinicMedical} color={faIconColor} fixedWidth />
  ),
  "/about": (
    <FontAwesomeIcon icon={faInfoCircle} color={faIconColor} fixedWidth />
  ),
};

const HomeScreen: React.FC = () => {
  return (
    <Layout title={"Home"}>
      <Box my={4} textAlign={"justify"}>
        <Typography variant="h4" gutterBottom>
          DBYS Covid Helpline
        </Typography>
        <Divider />
        <Typography variant="subtitle1" color="error" gutterBottom>
          Last updated: 11:25 AM, 4th June 2021. Refresh to check for updates
        </Typography>
        <Grid container spacing={1}>
          {menuLinks.map(
            (entry: { name: string; link: string }, index: number) => (
              <Grid item key={`menu_${index}`} sm={6} xs={12}>
                <Link to={entry.link}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" color="textSecondary">
                        {menuIcon[entry.link]} {entry.name}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            )
          )}
        </Grid>
      </Box>
    </Layout>
  );
};

export default HomeScreen;
