import './App.css'
import Header from './components/header/Header'
import Courses from './pages/Courses'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Footer from './components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import UserRegister from './pages/UserRegister'
import Subscription from './pages/Subscription'
import Login from './pages/Login'
import Comunidade from './pages/Community'
import AdminHome from './pages/admin/AdminHome'
import AdminCoursesList from './pages/admin/AdminCoursesList'
import AdminCourseForm from './pages/admin/AdminCourseForm'
import PaymentOptions from './pages/PaymentOptions'
import { AuthProvider } from "./context/AuthContext";

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
        <Route path='/login' element={<Login/>}/>
        <Route path='/comunidade' element={<Comunidade/>}/>

        <Route path="/admin" element={<AdminHome />} />
        <Route path="/admin/cursos" element={<AdminCoursesList />} />
        <Route path="/admin/cursos/novo" element={<AdminCourseForm />} />
        <Route path="/admin/cursos/:id/editar" element={<AdminCourseForm />} />
        <Route path='/pagamento' element={<PaymentOptions/>}/>
      </Routes>

      <Footer/>
    </>
  )
}

export default App