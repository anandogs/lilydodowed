import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'

export default function NotFound() {
    return (
      <div>
          <StaticImage src = '../images/eeks.jpeg' alt='unhighlighted-flower'/>
      <div style={{textAlign:'center'}}>
        <h2>Erm.. you're not supposed to be here..</h2>
      </div>
      </div>
    )
  }
  