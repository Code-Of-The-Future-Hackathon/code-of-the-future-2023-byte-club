import { useState } from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleFeatures = () => {
        setIsFeaturesOpen(!isFeaturesOpen);
    };

    const navItems = [
        { link: "FAQ", path: "faq" },
        { link: "Contact Us", path: "contact" },
    ];

    return (
        <>
            <nav className='bg-white md:px-18 p-4 max-w-screen-2xl border-b mx-auto text-primary fixed top-0 right-0 left-0'>
                <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
                    <div className='flex items-center'>
                        <a href="/" className='text-3xl font-semibold flex items-center space-x-3 text-primary'><span>Byte Club</span></a>
                    </div>

                    <div className='flex space-x-12 items-center'>
                        <ul className='md:flex space-x-12 hidden relative text-2xl'>
                            <li>
                                <button onClick={toggleFeatures} className='flex hover:text-gray-300'>Features<img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Arrow-down.svg/960px-Arrow-down.svg.png" className='w-[2rem] h[4rem] mt-1'/></button>
                                {isFeaturesOpen && (
                                    <ul className='absolute bg-white leading-relaxed text-xl mt-2 py-2 px-8 w-60 rounded shadow-lg text-center right-0'>
                                        <li>
                                            <Link to="/map" className="block hover:text-gray-300">Map</Link>
                                        </li>
                                        <li>
                                            <Link to="/doctor" className="block hover:text-gray-300">AI Self-Doctor</Link>
                                        </li>
                                        <li>
                                            <Link to="/doctor" className="block hover:text-gray-300">Boost your mood</Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                        </ul>

                        <div className='flex items-center space-x-14'>
                            {
                                navItems.map(({ link, path }) => (
                                    <a key={link} href={path} className='block hover:text-gray-300 text-2xl'>{link}</a>
                                ))
                            }
                        </div>
                    </div>

                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-white focus:outline-none focus:text-gray-300'>
                            {isMenuOpen ? (<FaXmark className='w-6 h-6 text-pink' />) : (<FaBars className='w-6 h-6 text-pink' />)}
                        </button>
                    </div>
                </div>
            </nav>

            <div className={`space-y-4 px-4 pt-24 pb-5 bg-secondary text-pink text-xl ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                {
                    navItems.map(({ link, path }) => (
                        <a key={link} href={path} className='block hover:text-gray-300'>{link}</a>
                    ))
                }
            </div>
        </>
    )
}

export default Navbar;