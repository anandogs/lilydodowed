import React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import "../styles/global.css"

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


  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setValues({
      ...values,
      [name]: value
    });

  };

  function handleSubmit() {
    console.log(values)
  }

  return (
    <Layout>
      <div>
      <div className='textBody'>
      <p>Can we have your name and Number please?</p>
          <form>
          <input
            value={values.personName}
            onChange={handleInputChange}
            type="text"
            name='personName'
            placeholder="Name"
          />
                    <input
            value={values.personNumber}
            onChange={handleInputChange}
            type="text"
            name='personNumber'
            placeholder="Number"
          />
          <Link to="/rec" state={values}>
            <button onClick={handleSubmit}>Submit</button>
          </Link>
          </form>
      </div>
      <div className='flowerBox'>
      <img src='Flower_Highlight_.png' alt='highlighted-flower'></img>
      <img src='Flower.png' alt='unhighlighted-flower'></img>
      <img src='Flower.png' alt='unhighlighted-flower'></img>
      <img src='Flower.png' alt='unhighlighted-flower'></img>
      <img src='Flower.png' alt='unhighlighted-flower'></img>
      </div>
      </div>
    </Layout>
  )
}
