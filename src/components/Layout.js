import React from "react"
import "../styles/global.css"
import { StaticImage } from "gatsby-plugin-image"

export default function Layout({ children }) {
  return (
  <div className='centerLayout'>
  <div className="layout">
      <StaticImage className='heroImage' src="../images/nav.png"/>
      <div className='inviteBody'>
      {children}
      </div>
      </div>
      
      </div>)
}
