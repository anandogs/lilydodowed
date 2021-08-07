import { Link } from "gatsby"
import React from "react"
import { firestore } from "../utils/firebase"
import Ciao from "./bye"
import Layout from "../components/Layout"

export default function PlusOne({ location }) {
  console.log(location.state)

  if (location.state) {
    if (location.state.attending11 + location.state.attending14 === 0) {
      firestore.collection("attendees-11-14").add(location.state)

      return <Ciao />
    }
  }

  const cur_dict = location.state

  function updateVal() {
    cur_dict.plus1 = 1
  }

  return (
    <Layout>
      <div>
        <div className="textBody">
          <p>Will you have a +1 with you?</p>
          <div className="sideBySide">
            <Link to="/veg" state={cur_dict}>
              &#x1F9DF;
            </Link>
            <br></br>
            <Link to="/veg" onClick={updateVal} state={cur_dict}>
              &#x1F46B;&#127997;
            </Link>
          </div>
        </div>
        <div className="flowerBox">
          <img src="Flower_Highlight_.png" alt="highlighted-flower"></img>
          <img src="Flower_Highlight_.png" alt="highlighted-flower"></img>
          <img src="Flower_Highlight_.png" alt="highlighted-flower"></img>
          <img src="Flower_Highlight_.png" alt="highlighted-flower"></img>
          <img src="Flower.png" alt="unhighlighted-flower"></img>
        </div>
      </div>
    </Layout>
  )
}
