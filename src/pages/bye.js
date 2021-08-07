import React from "react"
import Layout from "../components/Layout"

export default function Ciao() {
    return (
        <Layout>
          <div>
            <div className="textBody">
              <p>Thank you for your time! If you are coming for the event then you will get a message with the details!</p>
              <div className="sideBySide">
                <span>&#x1f64f;&#127997;</span>
              </div>
            </div>
            <div className='flowerBox'>
            <img src='Flower_Highlight_.png' alt='highlighted-flower'></img>
            <img src='Flower_Highlight_.png' alt='highlighted-flower'></img>
            <img src='Flower_Highlight_.png' alt='highlighted-flower'></img>
            <img src='Flower_Highlight_.png' alt='highlighted-flower'></img>
            <img src='Flower_Highlight_.png' alt='highlighted-flower'></img>
            </div>
          </div>
        </Layout>
      )

    }
