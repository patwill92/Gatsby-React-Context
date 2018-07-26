import React, { Fragment } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import { Consumer } from '../components/provider'

const IndexPage = () => (
  <Layout>
    <Consumer>
      {context => (
        <Fragment>
          <h1>Hi people</h1>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
          <p>{context.state.title}</p>
          <Link to="/page-2/">Go to page 2</Link>
          <br/>
          <br/>
          <br/>
          <br/>
          <button onClick={context.funcs.changeTitle}>de una papito?</button>
          <br/>
          <br/>
          <br/>
        </Fragment>
      )}
    </Consumer>
  </Layout>
)

export default IndexPage
