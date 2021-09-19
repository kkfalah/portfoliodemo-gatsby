import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { GatsbyImage } from "gatsby-plugin-image"
import { Col, Container, Row } from "react-bootstrap"

export default function Home({data}) {
  
  return (
    <Layout>
    <section className={styles.header}>
      <Container>
        <Row  className="align-items-center">
        <Col md="6">
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UI designer and Web Developer</p>
          <Link className={styles.btn} to="/projects" >My Projects</Link>
        </Col>
        <Col md="6">
          <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt={``} />
        </Col>  
        </Row>
      </Container>
    </section>
      </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: {eq: "banner.png"}) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`

