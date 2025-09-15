import './App.css'
import Header from './components/header/Header'
import Courses from './pages/Courses'
import Footer from './components/Footer/Footer'
import HomePage from './pages/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
      <Header/>
      <HomePage />
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
