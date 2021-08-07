import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

export default function Engagement({ location }) {
  console.log(location.state)
  const cur_dict = location.state

  function updateVal() {
    cur_dict.attending11 = 1
  }

  return (
      <Layout>
    <div>
    <div className='textBody'>
      <p>Are you joining us for the ring ceremony?</p>
      <div className='sideBySide'>
      <Link to="/rec" onClick={updateVal} state={cur_dict}>
      &#x1F919;&#127997;
      </Link>
      
      <Link to="/rec" state={cur_dict}>
      &#x1F44E;&#127997;
      </Link>
      </div>
    </div>
    <div className='flowerBox'>
    <img src='Flower_Highlight_.png' alt='highlighted-flower'></img>
    <img src='Flower_Highlight_.png' alt='highlighted-flower'></img>
      <img src='Flower.png' alt='unhighlighted-flower'></img>
      <img src='Flower.png' alt='unhighlighted-flower'></img>
      <img src='Flower.png' alt='unhighlighted-flower'></img>
      </div>
    </div>
    </Layout>
  )
}
