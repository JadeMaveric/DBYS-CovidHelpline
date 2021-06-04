import { Container } from "@material-ui/core";
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
          </Container>
        </>
      )}
    />
  );
};

export default Layout;
