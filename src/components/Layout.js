import React from "react"
import "../styles/global.css"

export default function Layout({ children }) {
  return <div className="layout">
      <img src='dl.png'></img>
      <div className='inviteHeader'><h1>A little RSVP goes a long way!</h1></div>
      <div className='inviteBody'>
      {children}
      </div>
      
      
      </div>
}
