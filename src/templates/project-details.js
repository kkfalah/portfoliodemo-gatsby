import React from 'react'
import Layout from "../components/Layout"
import Img from 'gatsby-image'
import * as styles from "../styles/project-details.module.css"
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <Helmet>
          <meta charSet="utf-8" />
          <title>{title} | WebZaa</title>
      </Helmet>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={styles.featured}>
          <Img fluid={featuredImg.childImageSharp.fluid} />
        </div>
        <div className={styles.html} dangerouslySetInnerHTML={{ __html: html}} />
      </div>
    </Layout>
  )
}

export const query = graphql`
query ProjectDetails($slug: String) {
  markdownRemark(frontmatter: {slug: { eq: $slug}}) {
    html
    frontmatter {
      stack
      title
      featuredImg {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}

`
