import { NavLink, useNavigate } from 'react-router-dom';
import './header.css'
import logo from '../../assets/image/SugarLab.png';
import HamburguerMenu from '../icons/HamburguerMenu';
import { useState } from 'react';

const Header = () => {
    const navOptions = ['Cursos', 'Comunidade', 'Sobre Nós', 'Assinatura', 'Cadastro', 'Login']
    const [mobileMenuClicked, setMobileMenuClicked] = useState(false)
    const navigate = useNavigate();

    return(
        <nav id='headerClass' className='flex justify-between relative'>
            <NavLink id="mainLogoHeader" to="/" className="cursor-pointer">
                <img src={logo} alt="logo" id="mainLogoHeader" className='w-50'/>
            </NavLink>
            
            {/* mobile-format */}
            <div id="mobile-format" className='lg:hidden'>
                <button className='cursor-pointer' onClick={() => setMobileMenuClicked(!mobileMenuClicked)}>
                    <HamburguerMenu/>
                </button>
                {mobileMenuClicked && (
                    <div id="containerMobileMenu" className='absolute border rounded-2xl w-3/6 h-64 right-4 flex flex-col justify-center items-center gap-2'>
                        <NavLink to={'/cursos'}>{navOptions[0]}</NavLink>
                        <NavLink to={'/comunidade'}>{navOptions[1]}</NavLink>
                        <NavLink to={'/sobre'}>{navOptions[2]}</NavLink>
                        <NavLink to={'/assinatura'}>{navOptions[3]}</NavLink>
                        <NavLink to={'/registro'}>{navOptions[4]}</NavLink>
                        <NavLink to={'/login'}>{navOptions[5]}</NavLink>
                    </div>
                )}
            </div>
            
            {/* desktop-format */}
            <div className="hidden lg:flex gap-12">
                <NavLink className="navOptions" to={"/cursos"}>{navOptions[0]}</NavLink>
                <NavLink className="navOptions" to={"/comunidade"}>{navOptions[1]}</NavLink>
                <NavLink className="navOptions" to={"/sobre"}>{navOptions[2]}</NavLink>
                <NavLink className="navOptions" to={"/assinatura"}>{navOptions[3]}</NavLink>
            </div>
            <div className="userBtns hidden lg:flex gap-2">
                <button className='btnUser w-20 text-white cursor-pointer' onClick={() => navigate("/login")}>Login</button>
                <button className='btnUser w-20 text-white cursor-pointer' onClick={() => navigate("/registro")}>Register</button>
            </div>
        </nav>
    );
}

  return (
    <nav id="headerClass" className="flex items-center justify-between px-6 py-4 bg-white shadow-sm relative z-50">
      <NavLink to="/"><img src={logo} alt="logo" className="w-28 lg:w-32" /></NavLink>

      {/* desktop */}
      <div className="hidden lg:flex gap-10 text-[#142825]">
        {nav.map(i => <NavLink key={i.path} to={i.path} className={linkCls}>{i.label}</NavLink>)}
      </div>

      <div className="hidden lg:flex gap-2">
        <button className="btnUser bg-[#192927] w-24 py-2 rounded-lg text-white font-medium shadow">Login</button>
        <button className="btnUser bg-[#5ea59a] w-24 py-2 rounded-lg text-white font-medium shadow">Register</button>
      </div>

      {/* mobile */}
      <button className="lg:hidden" onClick={() => setOpen(!open)}><HamburguerMenu/></button>
      {open && (
        <div className="absolute right-4 top-[64px] w-3/5 rounded-2xl border bg-white shadow-lg flex flex-col items-center gap-3 py-4">
          {nav.map(i => (
            <NavLink key={i.path} to={i.path} className="font-medium text-[#142825] hover:text-[#5ea59a]" onClick={()=>setOpen(false)}>
              {i.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;
