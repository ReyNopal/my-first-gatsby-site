//import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from "styled-components";
import React, { useState, useEffect } from 'react'
import storage from 'local-storage-fallback'
import { GlobalStyles } from "../components/globalStyles";
import { light, dark } from "../components/theme"
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} 
from './layout.module.css'
 
  function getTheme() {
    const savedTheme = storage.getItem('theme')
    return savedTheme ? JSON.parse(savedTheme) : {mode: 'light'};
  }

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)

    const [theme, setTheme] = useState(getTheme);
    useEffect(
      ()=> {
        storage.setItem('theme', JSON.stringify(theme));
      },
        [theme]
    );

    const toggleTheme = () => {
      theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    return (
      <ThemeProvider theme={theme === 'light' ? light : dark}> 
      <><GlobalStyles/>
        <div className={container}>
          <title>{pageTitle} | {data.site.siteMetadata.title}</title>
          <header className={siteTitle}>{data.site.siteMetadata.title}</header>
          <nav>
            <ul className={navLinks}>
              <li className={navLinkItem}>
                <Link to="/" className={navLinkText}>
                  Home
                </Link>
              </li>
              <li className={navLinkItem}>
                <Link to="/about" className={navLinkText}>
                  About
                </Link>
              </li>
              <li className={navLinkItem}>
                <Link to="/blog" className={navLinkText}>
                  Blog
                </Link>
              </li>
              <li className={navLinkItem}>
                <Link to="/pokemon" className={navLinkText}>
                  Pokemon
                </Link>
              </li>
              <li className={navLinkItem}>
                <Link to="/chart" className={navLinkText}>
                  Chart
                </Link>
              </li>
              <li className={navLinkItem}>
                <button onClick={toggleTheme}>Dark/Light Mode</button>
              </li>
            </ul>
          </nav>
          <main>
            <h1 className={heading}>{pageTitle}</h1>
            {children}
          </main>
        </div>
      </></ThemeProvider>
    )
  }

  export default Layout