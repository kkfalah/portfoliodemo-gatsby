import React from 'react'
import Layout from "../components/Layout"
import * as styles from "../styles/project-details.module.css"
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Container } from 'react-bootstrap'
import { GatsbyImage } from 'gatsby-plugin-image'

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <Helmet>
          <meta charSet="utf-8" />
          <title>{title} | WebZaa</title>
      </Helmet>
      <Container>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={styles.featured}>
          <GatsbyImage image={featuredImg.childImageSharp.gatsbyImageData} alt={title} />
        </div>
        <div className={styles.html} dangerouslySetInnerHTML={{ __html: html}} />
      </div>
      </Container>
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
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
}

`
