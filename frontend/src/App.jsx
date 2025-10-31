import './App.css'
import Header from './components/header/Header'
import Courses from './pages/Courses'
import AboutUs from './pages/AboutUs'
import Footer from './components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import UserRegister from './pages/UserRegister'
import Subscription from './pages/Subscription'
import PaymentOptions from './pages/PaymentOptions'
function App() {

  return (
    <>
      <Header/>

      <Routes>
        <Route path='/cursos' element={<Courses/>}/>
        <Route path='/registro' element={<UserRegister/>}/>
        <Route path='/sobre' element={<AboutUs/>}/>
        <Route path='/assinatura' element={<Subscription/>}/>
        <Route path='/pagamento' element={<PaymentOptions/>}/>
      </Routes>

      <Footer/>
    </>
  )
}

export default App