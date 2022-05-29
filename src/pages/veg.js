import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import { firestore } from "../utils/firebase"
import { StaticImage } from "gatsby-plugin-image"


export default function Veg({ location }) {

  const cur_dict = location.state

  function updateVal() {
    cur_dict.nonVeg = 1
    firestore.collection("attendees-11-14").add(location.state)
  }

  function submitDetails() {
    firestore.collection("attendees-11-14").add(location.state)
  }


  return (
    <Layout>
      <div className='invite'>
        <div className="textBody">
          <p>What would you prefer to eat?</p>
          <div className="sideBySide">
            <Link to="/bye" onClick={submitDetails} state={cur_dict}>
              &#x1F966;
            </Link>
            <br></br>
            <Link to="/bye" onClick={updateVal} state={cur_dict}>
              &#x1F357;
            </Link>
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
