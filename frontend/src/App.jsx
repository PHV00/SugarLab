import './App.css'
import Header from './components/header/Header'
import Courses from './pages/Courses'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Footer from './components/footer/Footer'
import { Routes, Route } from 'react-router-dom'
import UserRegister from './pages/UserRegister'
import Subscription from './pages/Subscription'
function App() {

  return (
    <>
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cursos' element={<Courses/>}/>
        <Route path='/registro' element={<UserRegister/>}/>
        <Route path='/sobre' element={<AboutUs/>}/>
        <Route path='/assinatura' element={<Subscription/>}/>
      </Routes>

      <Footer/>
    </>
  )
}

export default App