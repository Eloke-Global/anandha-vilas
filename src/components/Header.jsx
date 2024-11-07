import { NavLink, useLocation } from 'react-router-dom';
import CallUsButton from './CallUsButton';
import Logo from "../assets/Logo.png"
import { motion } from 'framer-motion';
const Header = () =>{
    const navItems = [
        { name: 'HOME', path: '/' },
        { name: 'ABOUT', path: '/aboutus' },
        { name: 'MENU', path: '/menu' },
        { name: 'STORY', path: '/story' },
        { name: 'CONTACT', path: '/contactus' },
    ];
    const location = useLocation();
    return (
        <div className="w-full bg-white  shadow-md ">
            <motion.div
            // variants={{onScreen:{opacity:1, translateX:0, transformOrigin:"left",}, offScreen:{opacity:0, translateX:-100,}}} 
            // initial="offScreen" whileInView="onScreen" 
            // viewport={{once:true}} 
            // transition={{duration:1.5, type:"spring",}}
            className="max-w-screen-1920 w-full h-[90px] mx-auto bg-white px-[60px] flex items-center justify-between">
                {/* <div className=""> */}
                    <img className='h-[58px]' src={Logo}/>
                {/* </div> */}
                <div className="flex gap-20">
                    {navItems.map((item) => (
                        <div key={item.name}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                `text-sm md:text-base font-medium transition-colors duration-200 ease-in-out
                                ${
                                    isActive || (item.path === '/' && location.pathname === '/')
                                    ? 'text-green-500'
                                    : 'text-gray-600 hover:text-green-400'
                                }`
                                }
                            >
                                {item.name}
                            </NavLink>
                        </div>
                    ))}
                </div>
                <CallUsButton text={"CALL US"}/>
            </motion.div>
        </div>
    )
}

export default Header;