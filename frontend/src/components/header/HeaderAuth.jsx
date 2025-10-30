import { NavLink } from 'react-router-dom';

import './headerauth.css'
import logo from '../../assets/image/SugarLab.png';
import HamburguerMenu from '../icons/HamburguerMenu';
import { useState } from 'react';

const HeaderAuth = () => {
    const navOptions = [ 'Cursos', 'Comunidade', 'Sobre Nós', 'Assinatura']
    const [mobileMenuClicked, setMobileMenuClicked] = useState(false)

    return(
        <nav id='headerClass' className='flex justify-between relative'>
            <img src={logo} alt="logo" className='w-2/12 lg:w-1/12'/>
            
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
        </nav>
    );
}

export default HeaderAuth;