import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import './header.css'
import logo from '../../assets/image/SugarLab.png';
import HamburguerMenu from '../icons/HamburguerMenu';

const Header = () => {
    const navOptions = ['Cursos', 'Comunidade', 'Sobre Nós', 'Assinatura', 'Cadastro', 'Login']
    const [mobileMenuClicked, setMobileMenuClicked] = useState(false)
    const navigate = useNavigate();
     
    const [hasToken, setHasToken] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setHasToken(!!token);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        setHasToken(false);
        window.location.href = "/";
    };

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
                        {hasToken ? (
                            <NavLink to={'/'} onClick={handleLogout}>Logout</NavLink>
                        ) : (
                            <NavLink to={'/login'}>{navOptions[5]}</NavLink>
                        )}
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
                {hasToken ? (
                    <button className='btnUser w-20 text-white cursor-pointer' to={'/'} onClick={handleLogout}>Logout</button>
                ) : (
                    <button className='btnUser w-20 text-white cursor-pointer' onClick={() => navigate("/login")}>Login</button>
                )}
                <button className='btnUser w-20 text-white cursor-pointer' onClick={() => navigate("/registro")}>Register</button>
            </div>
        </nav>
    );
}

export default Header;