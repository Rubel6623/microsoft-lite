import { useState } from 'react';
import './App.css'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import ProductCart from './Components/ProductCart/ProductCart'
import BannerInnovation from './Components/Banner/BannerInnovation'
import CardBusiness from './Components/CardBusiness/CardBusiness'
import SliderIno from './Components/SliderIno/SliderIno';
import Footer from './Components/Footer/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <ProductCart></ProductCart>
      <BannerInnovation></BannerInnovation>
      <CardBusiness></CardBusiness>
      <SliderIno></SliderIno>
      <Footer></Footer>
    </div>
  )
}

export default App
