import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Routing from './assets/Routing/Routing'
import Navbar from './assets/Layout/Navbar/Navbar'
import Footer from './assets/Layout/Footer/Footer'
import AuthProvider from './Pages/Provider/AuthProvider'



function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
         <Navbar/>
         <>
          <Routing/>
         </>
         <Footer/>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
