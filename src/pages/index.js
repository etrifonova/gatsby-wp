import * as React from "react"
import SEO from "../components/SEO/SEO"
import Layout from '../components/Layout/Layout';
import Hero from '../components/Hero/Hero'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
// export const Head = () => <Seo title="Home" />

export default IndexPage
