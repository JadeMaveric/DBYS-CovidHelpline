import { Container, Box, Divider, Typography } from "@material-ui/core";
import { graphql, StaticQuery } from "gatsby";
import React, { useState } from "react";
import Helmet from "react-helmet";
import ResponsiveDrawer from "./ResponsiveDrawer";
import AppBar from "./CustomAppBar";
import SearchBar from "./SearchBar";

interface Props {
  title: string;
  //TODO: Abstract updateSearchTerm to be (string) => void;
  updateSearchTerm?: React.Dispatch<React.SetStateAction<string>>;
  children: JSX.Element;
}

const Layout: React.FC<Props> = (props: Props) => {
  const { children, title, updateSearchTerm } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
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
      `}
      render={(data) => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              {
                name: "description",
                content: data.site.siteMetadata.description,
              },
              { name: "keywords", content: data.site.siteMetadata.keywords },
            ]}
          ></Helmet>
          <Container maxWidth="md">
            <AppBar
              title={title}
              updateSearch={updateSearchTerm}
              toggleDrawer={handleDrawerToggle}
            />
            <ResponsiveDrawer
              drawerOpen={mobileOpen}
              toggleDrawer={handleDrawerToggle}
              menuLinks={data.site.siteMetadata.menuLinks}
              currentPage={title}
            />
            {updateSearchTerm ? (
              <SearchBar queryHandler={(s) => updateSearchTerm(s)} />
            ) : null}
            <main>{children}</main>
            <Divider />
            <Box textAlign="center">
              <Typography>
                App developed by&nbsp;
                <a href="https://twitter.com/JuliusAlphonso">Julius Alphonso</a>
                . Data sourced from the following{" "}
                <a href="https://bit.ly/DBYSCovidHelpline">Google Sheet</a>,
                maintained by&nbsp;
                <a href="https://www.facebook.com/watch/dbyspanjim/">DBYS</a>
              </Typography>
              <Typography>
                We would love to here your feedback, suggestion and comments.{" "}
                <a href="https://forms.gle/jUintN5p187sFwz39">Click Here!</a>
              </Typography>
            </Box>
          </Container>
        </>
      )}
    />
  );
};

export default Layout;
