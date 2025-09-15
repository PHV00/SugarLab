import { NavLink } from 'react-router-dom';

import './header.css'
import logo from '../../assets/image/SugarLab.png';
import HamburguerMenu from '../Icons/HamburguerMenu';
import { useState } from 'react';

const Header = () => {
    const navOptions = [ 'Cursos', 'Comunidade', 'Sobre Nós', 'Assinatura', 'Cadastro', 'Login']
    const [mobileMenuClicked, setMobileMenuClicked] = useState(false)

    return(
        <nav id='headerClass' className='flex justify-between relative'>
            <NavLink to="/">
                <img src={logo} alt="logo" className='w-2/12 lg:w-1/12 cursor-pointer'/>
            </NavLink>
            
            {/* mobile-format */}
            <div id="mobile-format" className='lg:hidden'>
                <button className='cursor-pointer' onClick={() => setMobileMenuClicked(!mobileMenuClicked)}>
                    <HamburguerMenu/>
                </button>
                {mobileMenuClicked && (
                    <div id="containerMobileMenu" className='absolute border rounded-2xl w-3/6 h-64 right-4 flex flex-col justify-center items-center gap-2'>
                        <NavLink to={'#'}>{navOptions[0]}</NavLink>
                        <NavLink to={'#'}>{navOptions[1]}</NavLink>
                        <NavLink to={'#'}>{navOptions[2]}</NavLink>
                        <NavLink to={'#'}>{navOptions[3]}</NavLink>
                        <NavLink to={'#'}>{navOptions[4]}</NavLink>
                        <NavLink to={'#'}>{navOptions[5]}</NavLink>
                    </div>
                )}
            </div>
            
            {/* desktop-format */}
            <div className="hidden lg:flex gap-12">
                <NavLink className="navOptions" to={"/"}>{navOptions[0]}</NavLink>
                <NavLink className="navOptions" to={"/"}>{navOptions[1]}</NavLink>
                <NavLink className="navOptions" to={"/"}>{navOptions[2]}</NavLink>
                <NavLink className="navOptions" to={"/"}>{navOptions[3]}</NavLink>
            </div>
            <div className="userBtns hidden lg:flex gap-2">
                <button className='btnUser w-20 text-white cursor-pointer'>Login</button>
                <button className='btnUser w-20 text-white cursor-pointer'>Register</button>
            </div>
        </nav>
    );
}

export default Header;