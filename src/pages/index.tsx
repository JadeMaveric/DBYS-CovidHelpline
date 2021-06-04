import { Box, Typography, Divider, Card, CardContent, Grid } from "@material-ui/core";
import React from "react";
import Link from "../components/Link";
import Layout from "../components/Layout";
import {
  BatteryStd,
  Business,
  LocalHospital,
  LocalPharmacy,
  LocalShipping,
  RecordVoiceOver,
  Restaurant,
  Storefront,
  Info,
} from "@material-ui/icons";

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
  }
]

const menuIcon: ElementMap = {
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

const HomeScreen: React.FC = () => {
  return (
    <Layout title={"Home"}>
      <Box my={4} textAlign={"justify"}>
        <Typography variant="h4" component="h1" gutterBottom>
          DBYS-Covid Helpline
        </Typography>
        <Divider />
        <Typography variant="h6" color="error" gutterBottom>
          Last updated: 11:25 AM, 4th June 2021
        </Typography>
        <Grid container spacing={1}>
          {menuLinks.map((entry: {name:string, link:string}, index: number) => (
            <Grid item key={`menu_${index}`} sm={6} xs={12}>
              <Link to={entry.link}>
                <Card>
                  <CardContent>
                    <Typography
                      variant="h4"
                      color="primary"
                      noWrap
                    >
                      {menuIcon[entry.link]} {entry.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>))}
        </Grid>
      </Box>
    </Layout>
  );
};

export default HomeScreen;
