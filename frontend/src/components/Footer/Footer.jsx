import { NavLink } from 'react-router-dom';
import './Footer.css';
import logo_white from '../../assets/image/SugarLabBranco.png';

const Footer = () => {
    return (
        <div id="footer" className='flex justify-center items-center'>
            <div id="content-container">
                <div className="texts flex justify-between">
                    <div id="links" className='flex gap-12'>
                        <NavLink to={"/"} className='text-white'>Comunidade</NavLink>
                        <NavLink to={"/"} className='text-white'>Empresa</NavLink>
                    </div>
                    <img src={logo_white} alt="logo" className='w-1/12'/>
                </div>
                <hr className='border-white'/>
            </div>
        </div>
    );
}

export default Footer;