import './App.css'
import Header from './components/header/Header'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
      <Header/>
      <Home />
      {/*<Courses />*/}
      <Footer/>
      {/* <BrowserRouter>
        <Header/>
        <Routes>
        </Routes>
      </BrowserRouter> */}
    </>
  )
}

export default App
