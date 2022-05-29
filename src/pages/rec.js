import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

export default function Reception({ location }) {

  const cur_dict = location.state

  function updateVal() {
    cur_dict.attending14 = 1
  }

  return (
    <Layout>
  <div className='invite'>
  <div className='textBody'>
    <p>Are you coming for the reception on the 14th (7PM onwards)?</p>
    <div className='sideBySide'>
    <Link to="/plus" onClick={updateVal} state={cur_dict}>
    &#x1F919;&#127997;
    </Link>
    <br></br>
    <Link to="/plus" state={cur_dict}>
    &#x1F44E;&#127997;
    </Link>
    </div>
  </div>
  <div className='flowerBox'>
  <StaticImage src='../images/Flower_Highlight_.png' alt='highlighted-flower'/>
  <StaticImage src='../images/Flower_Highlight_.png' alt='highlighted-flower'/>
  <StaticImage src='../images/Flower_Highlight_.png' alt='highlighted-flower'/>
      <StaticImage src='../images/Flower.png' alt='unhighlighted-flower'/>
      <StaticImage src='../images/Flower.png' alt='unhighlighted-flower'/>
            </div>
  </div>
  </Layout>
)
}
