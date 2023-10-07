import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Routing from './assets/Routing/Routing'
import Navbar from './assets/Layout/Navbar/Navbar'
import Footer from './assets/Layout/Footer/Footer'
import { createContext, useState } from 'react'



export const userContext = createContext();
function App() {
const [user, setUser]=useState({
  Name:"",
  age:""
});




  return (
    <userContext.Provider value={{user, setUser}}>
      <BrowserRouter>
         <Navbar/>
         <>
          <Routing/>
         </>
         <Footer/>
      </BrowserRouter>
    </userContext.Provider>
  )
}

export default App
