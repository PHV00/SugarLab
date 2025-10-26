import { NavLink } from 'react-router-dom';
import './footer.css';
import logo_white from '../../assets/image/SugarLabBranco.png';

const Footer = () => {
    return (
        <div id="footer" className='flex justify-center items-center py-2'>
            <div id="content-container">
                <div className="texts flex flex-col gap-2 items-center md:justify-between md:flex-row">
                    <div id="links" className='flex flex-col gap-0 md:gap-12 md:flex-row'>
                        <NavLink to={"/"} className='text-white'>Comunidade</NavLink>
                        <NavLink to={"/"} className='text-white'>Empresa</NavLink>
                    </div>
                    <img src={logo_white} alt="logo" className='w-1/6 md:w-1/12'/>
                </div>
                <hr className='border-white'/>
            </div>
        </div>
    );
}

export default Footer;