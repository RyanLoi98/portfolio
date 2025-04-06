import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import {styles} from '../styles';
import {navLinks} from '../constants';
import {logo, menu, close, mobile} from '../assets';

const Navbar = () => {
    const [active, setActive] = useState("");
    const [isMobile, setIsMobile] = useState(false);

    return (
        <nav className={`${styles.paddingX} w-full flex items-center py-2 top-10 z-50 bg-primary`}>            

            <div className = "w-full flex justify-between items-center max-w-full mx-auto">
                <Link to="/" className = "flex items-center gap-2" 
                    onClick = {() => {setActive(""); window.scrollTo(0, 0);}} 
                >
                    <img src={logo} alt="profile logo" className = "w-12 h-12 object-contain"></img>
                    <p className="text-white text-[18px] font-bolt cursor-pointer flex">Ryan Loi&nbsp;<span className = "sm:block hidden">| Software Developer</span></p>
                </Link>
                <ul className='list-none hidden sm:flex flex-row gap-10'>
                    {navLinks.map((link) => (
                      <li 
                        key={link.id} 
                        className = {`${ 
                            active === link.title 
                            ? "text-white" 
                            : "text-secondary"}
                            } hover:text-white text-[18px]
                             font-medium cursor-pointer`}
                             onClick = {() => setActive(link.title)}
                             >
                        <a href={`#${link.id}`}>{link.title}</a>
                      </li>
                      
                    ))}
                </ul>


                {/* this is for the mobile navigation bar */}
                <div className = "sm:hidden flex flex-1 justify-end items-center">
                    <img src={isMobile ? close : menu} alt = "menu" className = "w-[28px] h-[28px] object-contain cursor-pointer" 
                    onClick={() => setIsMobile(!isMobile)}
                    />

                    <div className = {`${!isMobile ? "hidden" : "flex"} p-6 black-gradient absolute top-12 right-0 mx-4 my-4 min-w-[125px] z-10 rounded-xl`}>
                        <ul className='list-none flex justify-end items-start flex-col gap-4'>
                            {navLinks.map((link) => (
                                <li 
                                    key={link.id} 
                                    className = {`${ 
                                        active === link.title 
                                        ? "text-white" 
                                        : "text-secondary"}
                                        } font-poppins font-medium cursor-pointer text-[16px]`}
                                        onClick = {() => {
                                            setActive(link.title);
                                            setIsMobile(!isMobile);
                                            
                                        }}
                                >
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))}
                         </ul>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar;