import React from 'react'
import { Container } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout>
    <Helmet>
        <meta charSet="utf-8" />
        <title>About Us | WebZaa</title>
    </Helmet>
    <Container>
      <h1>About Page</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam hic numquam facilis iste tempore ad doloremque aut cumque laudantium quisquam.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam hic numquam facilis iste tempore ad doloremque aut cumque laudantium quisquam.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam hic numquam facilis iste tempore ad doloremque aut cumque laudantium quisquam.</p>
    </Container>
    </Layout>
  )
}
