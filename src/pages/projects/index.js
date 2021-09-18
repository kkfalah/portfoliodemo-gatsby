import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/projects.module.css'
import { Helmet } from 'react-helmet'
import { GatsbyImage } from 'gatsby-plugin-image'

export default function Projects({data}) {
  const projects = data.allMarkdownRemark.nodes
  return (
    <Layout>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Projects | WebZaa</title>
    </Helmet>
    <div className={styles.portfolio}>
      <h2>Portfolio</h2>
      <h3>Projects and Websites</h3>
      <div className={styles.projects}>
        {projects.map(project=>(
          <Link to={"/projects/"+project.frontmatter.slug} key={project.id}>
            <GatsbyImage image={project.frontmatter.thumb.childImageSharp.gatsbyImageData} alt={project.frontmatter.title} />
            <h3>{project.frontmatter.title}</h3>
            <p>{project.frontmatter.stack}</p>
          </Link>
        ))}
      </div>
    </div>
    </Layout>
  )
}

export const query = graphql`
query ProjectPage {
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        slug
        title
        stack
        thumb {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
      id
    }
  }
}

`

