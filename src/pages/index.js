import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"



const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi</h1>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

export default IndexPage
