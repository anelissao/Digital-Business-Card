import React from 'react'
import ReactDOM from 'react-dom/client'
import Info from './info.jsx'
import About from './about.jsx'
import Interests from './interests.jsx'
import Footer from './footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='root'>
    <Info />
    <About />
    <Interests />
    <Footer />
    </div>
  </React.StrictMode>,
)
