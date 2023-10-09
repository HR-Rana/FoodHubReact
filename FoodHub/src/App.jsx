import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Routing from './assets/Routing/Routing'
import Navbar from './assets/Layout/Navbar/Navbar'
import Footer from './assets/Layout/Footer/Footer'
import { AuthContext } from './Pages/Provider/AuthProvider'




function App() {





  return (
    <AuthContext.Provider value={""}>
      <BrowserRouter>
         <Navbar/>
         <>
          <Routing/>
         </>
         <Footer/>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
