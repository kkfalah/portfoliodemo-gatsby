import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from './Navbar'
import '../styles/global.css'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Helmet>
          <meta charSet="utf-8" />
          <title>WebZaa</title>
      </Helmet>
      <Navbar />
      <div className="content">
        { children }
      </div>
      <footer>
        <p>Copy right - WebZaa</p>
      </footer>

    </div>
  )
}
