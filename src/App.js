import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./components/Data"


export default function App () {
  
  const cards = data.map(item => {
    return (
      <Card 
        key={item.id}
        {...item}
    />
    )
    })
    

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="cards--container">
        {cards}
      </div>
    </div>
  )
}