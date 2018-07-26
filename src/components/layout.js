import React, { createContext } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";
import Provider from "./provider";

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query ApiQuery {
        allMyApi {
          edges {
            node {
              id
              title
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" }
          ]}
        />
        <Provider data={data.allMyApi.edges[0].node}>
          <div
            style={{
              margin: "0 auto",
              maxWidth: 960,
              padding: "0px 1.0875rem 1.45rem",
              paddingTop: 0
            }}
          >
            {children}
            <h1 className={"ok"}>{data.allMyApi.edges[0].node.title}</h1>
          </div>
        </Provider>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
