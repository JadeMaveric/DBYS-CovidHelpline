import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import relativeDate from "tiny-relative-date";
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
import { SiteMetaData } from "../utils/types";

interface ElementMap {
  [key: string]: JSX.Element;
}

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
  const query: SiteMetaData = useStaticQuery(graphql`
    query {
      site {
        buildTime
        siteMetadata {
          title
          description
          keywords
          menuLinks {
            name
            link
          }
        }
      }
    }
  `);
  const buildTime = new Date(query.site.buildTime);
  const relativeTime = relativeDate(buildTime);
  const dateColour = () => {
    const currTime = new Date();
    const daysDiff = Math.floor(
      (currTime.getTime() - buildTime.getTime()) / (1000 * 60 * 60 * 24)
    );
    if (daysDiff <= 2) return "secondary";
    else return "error";
  };

  return (
    <Layout title={"Home"}>
      <Box my={4} textAlign={"justify"}>
        <Typography variant="h4" gutterBottom>
          DBYS Covid Helpline
        </Typography>
        <Divider />
        <Typography variant="subtitle1" color={dateColour()} gutterBottom>
          Last updated: {relativeTime}
        </Typography>
        <Grid container spacing={1}>
          {query.site.siteMetadata.menuLinks
            .filter((entry) => entry.link != "/")
            .map((entry: { name: string; link: string }, index: number) => (
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
            ))}
        </Grid>
      </Box>
    </Layout>
  );
};

export default HomeScreen;
