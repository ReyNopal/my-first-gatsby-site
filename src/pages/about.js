import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me Page">
      <p>Hi there! My name is Jeronimo but my friends called me Nemo.</p>
      <p>I like photography, videography and playing guitar.</p>
      <StaticImage
        alt="Camera"
        src="../images/cam.jpg"
      />
    </Layout>
  )
}

export default AboutPage