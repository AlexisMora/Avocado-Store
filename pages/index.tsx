import React, { useEffect, useState } from "react"
import Navbar from "../components/Navbar/Navbar"


const Home = () => {
  const [productList, setProductList] = useState([])
  useEffect(() => {
    window
    .fetch('api/avo')
    .then((response) => response.json())
    .then(({data,length}) => setProductList(data))
  }, [])

  return (
    <div>
      <h1>Hola mundo</h1>
    </div>
  )
}

export default Home
