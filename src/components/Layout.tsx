import { Container } from "@material-ui/core";
import { graphql, StaticQuery } from "gatsby";
import React, { useState } from "react";
import Helmet from "react-helmet";
import ResponsiveDrawer from "./ResponsiveDrawer";
import SearchAppBar from "./SearchAppBar";

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
            <SearchAppBar
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
            <main>{children}</main>
          </Container>
        </>
      )}
    />
  );
};

export default Layout;
