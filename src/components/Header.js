import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export default function Header() {

  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const {title} = data.site.siteMetadata
  return (
    <Container fluid>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="/"><h1>{ title }</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav  className="links">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  )
}
