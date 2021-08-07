import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

export default function Landing1() {
    return (
        
              <div className='centerLayout'>
  <div className="layout">
      <StaticImage className='heroImage' src="../images/dl.png"/>
      <div className='inviteBody'>
      <h1>Welcome to our celebrations!</h1>
        <Link to='/1'><button>RSVP!</button></Link>
      </div>
      </div>
        </div>
    )
}
