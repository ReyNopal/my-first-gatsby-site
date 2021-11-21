import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial. I am working on this as part of CSC 496.</p>
      <StaticImage
        alt="Old water tower in Warsaw KY"
        src="../images/Warsaw.jpg"
      />
    </Layout>
  )
}

export default IndexPage