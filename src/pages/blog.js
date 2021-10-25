import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts!">
      <ul>
      {
        data.allWpPost.nodes.map(node => (
          <li key={node.slug}>
            {node.slug}
          </li>
        ))
      }
      </ul>
    </Layout>
  )
}

export const query = graphql ` 
query {
  allWpPost {
    nodes {
      slug
    }
  }
}
`

export default BlogPage