import { useState } from 'react';
import './App.css'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import ProductCart from './Components/ProductCart/ProductCart'
import BannerInnovation from './Components/Banner/BannerInnovation'
import CardBusiness from './Components/CardBusiness/CardBusiness'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <ProductCart></ProductCart>
      <BannerInnovation></BannerInnovation>
      <CardBusiness></CardBusiness>
    </div>
  )
}

export default App
