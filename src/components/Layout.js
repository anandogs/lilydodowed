import React from "react"
import "../styles/global.css"
import { StaticImage } from "gatsby-plugin-image"

export default function Layout({ children }) {
  return (
  <div className='centerLayout'>
  <div className="layout">
      <StaticImage src="../images/dl.png"/>
      <div className='inviteHeader'><h1>A little RSVP goes a long way!</h1></div>
      <div className='inviteBody'>
      {children}
      </div>
      </div>
      
      </div>)
}
