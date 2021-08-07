import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

export default function Ciao() {
    return (
        <Layout>
          <div className='invite'>
            <div className="textBody">
              <p>Thank you for your time! If you are coming for the event then you will get a message with the details!</p>
              <div className="sideBySide">
                <span>&#x1f64f;&#127997;</span>
              </div>
            </div>
            <div className='flowerBox'>
            <StaticImage src='../images/Flower_Highlight_.png' alt='highlighted-flower'/>
            <StaticImage src='../images/Flower_Highlight_.png' alt='highlighted-flower'/>
            <StaticImage src='../images/Flower_Highlight_.png' alt='highlighted-flower'/>
            <StaticImage src='../images/Flower_Highlight_.png' alt='highlighted-flower'/>
            <StaticImage src='../images/Flower_Highlight_.png' alt='highlighted-flower'/>
            </div>
          </div>
        </Layout>
      )

    }
