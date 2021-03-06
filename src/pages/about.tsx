import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Layout from "../components/Layout";
import { Divider, Grid } from "@material-ui/core";

const Index: React.FC = () => {
  const query = useStaticQuery(graphql`
    query {
      site {
        buildTime
      }
    }
  `);

  const buildTime = new Date(query.site.buildTime);

  return (
    <Layout title="About">
      <Box my={4} textAlign={"justify"}>
        <Typography variant="h4" component="h1" gutterBottom>
          DBYS-Covid Helpline
        </Typography>
        <Divider />
        <div>
          <Typography>
            This app provides details of services that are helping those
            affected by Covid in Goa. To get started, click the{" "}
            <span>menu button (☰)</span> and select a service category. Use the
            search bar to filter relevant service providers. Click the "Learn
            More" button on the card for more details.
          </Typography>
        </div>
        <div>
          <Typography variant="h6" color="error" gutterBottom>
            Last updated: {buildTime.toLocaleString()}
          </Typography>
        </div>
        <Divider />
        <div>
          <Typography variant="subtitle2" color="secondary" gutterBottom>
            THIS APP PULLS INFORMATION FROM A SHEET VERIFIED BY OUR VOLUNTEERS
            ON A DAILY BASIS, WHILE SOME STATUSES AND AVAILABILITIES MAY NOT
            CHANGE SOME MIGHT CHANGE DEPENDING ON THE AVAILABILITY OF THE SAME
          </Typography>
        </div>
        <div>
          <Typography variant="subtitle2" color="primary" gutterBottom>
            KINDLY BE COURTEOUS TO THE HEALTH PROFESSIONALS COMING TO YOUR AID
            IN THIS DIFFICULT TIME. THEY ARE OVERWORKED AND STRESSED AND ARE
            DEALING WITH YOU AND FAMILY AT THE SAME TIME. WE ARE IN THIS FIGHT
            TOGETHER. LET US WIN THE WAR AND NOT LOOSE ANY BATTLE.
          </Typography>
        </div>
        <Divider />
        <div>
          <Typography variant="h5" color="secondary">
            WHO WE ARE
          </Typography>
          <Typography gutterBottom>
            We are members of an international Religious order in the Catholic
            Church, officially known as the Society of St Francis de Sales, but
            more popularly known as Salesians of Don Bosco (SDB).
          </Typography>
        </div>
        <div>
          <Typography variant="h5" color="secondary">
            VISION
          </Typography>
          <Typography gutterBottom>
            To Nurture, Empower and develop the total integral growth of each
            youngster, to draw out their potentialities and help them build a
            Just, humane and a Loving world.
          </Typography>
        </div>
        <div>
          <Typography variant="h5" color="secondary">
            MISSION
          </Typography>
          <Typography gutterBottom>
            Equipped with the Salesian Preventive System and the Salesian Youth
            Spirituality we will strive to accompany and walk with the young in
            our province in actively helping the young to participate in the
            life, mission and works of the Church and Society. We also seek not
            only to assist poor youth but to protect them and teach them.
          </Typography>
        </div>
        <Box textAlign="center">
          <Grid container spacing={3}>
            <Grid item sm={6}>
              <Typography color="primary">MISSION IN-CHARGE</Typography>
              <Typography>Fr. Jason Coelho</Typography>
            </Grid>
            <Grid item sm={6}>
              <Typography color="primary">ASSISTED BY</Typography>
              <Typography gutterBottom>Fr. Ralin De Souza</Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Layout>
  );
};

export default Index;
