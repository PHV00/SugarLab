import './App.css'
import Header from './components/header/Header'
import Courses from './pages/Courses'
import Community from './pages/Community'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Footer from './components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import UserRegister from './pages/UserRegister'
import Subscription from './pages/Subscription'
import Login from './pages/Login'
import AdminHome from './pages/admin/AdminHome'
import AdminCoursesList from './pages/admin/AdminCoursesList'
import AdminCourseForm from './pages/admin/AdminCourseForm'
import PaymentOptions from './pages/PaymentOptions'
import AdminRoute from './pages/admin/AdminRoute'

function App() {

  return (
    <>
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cursos' element={<Courses/>}/>
        <Route path='/comunidade' element={<Community/>}/>
        <Route path='/sobre' element={<AboutUs/>}/>
        <Route path='/assinatura' element={<Subscription/>}/>
        <Route path='/registro' element={<UserRegister/>}/>
        <Route path='/login' element={<Login/>}/>

        <Route path="/admin" element={
            <AdminRoute>
              <AdminHome />
            </AdminRoute>
        } />

        <Route path="/admin/cursos" element={
            <AdminRoute>
              <AdminCoursesList />
            </AdminRoute>
        } />

        <Route path="/admin/cursos/novo" element={
            <AdminRoute>
              <AdminCourseForm />
            </AdminRoute>
        } />

        <Route path="/admin/cursos/:id/editar" element={
            <AdminRoute>
              <AdminCourseForm />
            </AdminRoute>
        } />

        <Route path='/pagamento' element={<PaymentOptions/>}/>
      </Routes>

      <Footer/>
    </>
  )
}

export default App