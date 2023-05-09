import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import ProductCart from './Components/ProductCart/ProductCart'
import BannerInnovation from './Components/Banner/BannerInnovation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <ProductCart></ProductCart>
      <BannerInnovation></BannerInnovation>
    </div>
  )
}

export default App
