import React from 'react'
import { Helmet } from 'react-helmet'
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Helmet>
          <meta charSet="utf-8" />
          <title>WebZaa</title>
      </Helmet>
      <Header />
      <div className="content">
        { children }
      </div>
      <footer>
        <p>Copy right - WebZaa</p>
      </footer>
    </div>
  )
}
