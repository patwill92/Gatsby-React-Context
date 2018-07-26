import React, { Fragment } from "react";
import { Link } from "gatsby";
import { connect } from "react-redux";

import Layout from "../components/layout";
import { Consumer } from "../components/provider";

const IndexPage = props => {
  return (
    <Layout>
      <Consumer>
        {context => {
          return (
            <Fragment>
              <h1>Hi people</h1>
              <p>Welcome to your new Gatsby site.</p>
              <p>Now go build something great.</p>
              <p>{context.state.title}</p>
              <Link to="/page-2/">Go to page 2</Link>
              <br />
              <br />
              <br />
              <br />
              <button onClick={context.funcs.changeTitle}>
                de una papito?
              </button>
              <br />
              <br />
              {JSON.stringify(context)}
              <br />
            </Fragment>
          );
        }}
      </Consumer>
    </Layout>
  );
};

export default connect(({ reduxState }) => reduxState)(IndexPage);
