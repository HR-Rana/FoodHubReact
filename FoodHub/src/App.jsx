import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Routing from './assets/Routing/Routing'
import Navbar from './assets/Layout/Navbar/Navbar'
import Footer from './assets/Layout/Footer/Footer'

function App() {


  return (
    <>
      <BrowserRouter>
         <Navbar/>
         <>
          <Routing/>
         </>
         <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
