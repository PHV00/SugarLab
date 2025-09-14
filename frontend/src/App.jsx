import './App.css'
import Header from './components/header/Header'
import Courses from './pages/Courses'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
      <Header/>
      <Courses />
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
