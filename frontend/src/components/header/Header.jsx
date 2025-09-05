import { NavLink } from 'react-router-dom';

import './header.css'
import logo from '../../assets/image/SugarLab.png';

const Header = () => {
    return(
        <nav id='headerClass' className='flex justify-between'>
            <img src={logo} alt="logo" className='w-1/12'/>
            <div className="flex gap-12">
                <NavLink className="navOptions" to={"/"}>Cursos</NavLink>
                <NavLink className="navOptions" to={"/"}>Comunidade</NavLink>
                <NavLink className="navOptions" to={"/"}>Sobre Nós</NavLink>
                <NavLink className="navOptions" to={"/"}>Assinatura</NavLink>
            </div>
            <div className="userBtns flex gap-2">
                <button className='btnUser w-20 text-white cursor-pointer'>Login</button>
                <button className='btnUser w-20 text-white cursor-pointer'>Register</button>
            </div>
        </nav>
    );
}

export default Header;