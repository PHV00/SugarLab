<<<<<<< HEAD
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
=======
import './App.css'
import Header from './components/header/Header'
import Courses from './pages/Courses'
import AboutUs from './pages/AboutUs'
import Footer from './components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import UserRegister from './pages/UserRegister'
import Subscription from './pages/Subscription'
function App() {
>>>>>>> main

import Courses from "./pages/Courses.jsx";
import AdminHome from "./pages/admin/AdminHome.jsx";            // ✅ relativo
import AdminCoursesList from "./pages/admin/AdminCoursesList.jsx";
import AdminCourseForm from "./pages/admin/AdminCourseForm.jsx";

export default function App() {
  return (
<<<<<<< HEAD
    <BrowserRouter>
      <Routes>
        {/* Público */}
        <Route path="/" element={<Navigate to="/cursos" replace />} />
        <Route path="/cursos" element={<Courses />} />

        {/* Admin provisório + CRUD */}
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/admin/cursos" element={<AdminCoursesList />} />
        <Route path="/admin/cursos/novo" element={<AdminCourseForm />} />
        <Route path="/admin/cursos/:id/editar" element={<AdminCourseForm />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/cursos" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
=======
    <>
      <Header/>

      <Routes>
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
>>>>>>> main
