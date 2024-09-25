import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './section/Header'
import Hero from './section/Hero'
import Product from './section/Product'
import Footer from './section/Footer'
import Performance from './section/Performance'
import Blog from './section/Blog'
import Contact from './section/Contact'
import Page1 from './page/Page1'
import Page2 from './page/Page2'
import Page3 from './page/Page3'
import Page4 from './page/Page4'
import Productbrand from './section/Productbrand';
import ProcessStep from './section/ProcessStep';


const App = () => {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path='/page1' element={<Page1 />} />
          <Route path='/page2' element={<Page2 />} />
          <Route path='/page3' element={<Page3 />} />
          <Route path='/page4' element={<Page4 />} />
          <Route 
            path='/' 
            element={
              <>
                <Hero />
                <Product />
                <Blog />
                <ProcessStep />
                <Productbrand />
                <Performance />
              </>
            } 
          />
          
            <Route path='/contact' element={<Contact />} />
          
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
