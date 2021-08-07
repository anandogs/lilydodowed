import React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import "../styles/global.css"
import { StaticImage } from "gatsby-plugin-image"


export default function Home() {
  const userStats = {
    personName: "",
    personNumber: "",
    attending11: 0,
    attending14: 0,
    plus1: 0,
    nonVeg: 0,
  }

  const [values, setValues] = useState(userStats)

  const handleInputChange = e => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  function handleSubmit() {
    console.log(values)
  }

  return (
    <Layout>
      <div>
      <div className="textBody">
        <p>Can we have your name and Number please?</p>
        <form>
          <input
            value={values.personName}
            onChange={handleInputChange}
            type="text"
            name="personName"
            placeholder="Name"
          />
          <input
            value={values.personNumber}
            onChange={handleInputChange}
            type="number"
            name="personNumber"
            placeholder="Number"
          />
          <Link to="/eng" state={values}>
            <button onClick={handleSubmit}>Submit</button>
          </Link>
        </form>
      </div>
      <div className='flowerBox'>
      <StaticImage src='../images/Flower_Highlight_.png' alt='highlighted-flower'/>
      <StaticImage src='../images/Flower.png' alt='unhighlighted-flower'/>
      <StaticImage src='../images/Flower.png' alt='unhighlighted-flower'/>
      <StaticImage src='../images/Flower.png' alt='unhighlighted-flower'/>
      <StaticImage src='../images/Flower.png' alt='unhighlighted-flower'/>
      </div>
      </div>
    </Layout>
  )
}
