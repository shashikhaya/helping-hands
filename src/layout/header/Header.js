import { useState } from 'react';
import Button from './Button';
import LogoImg from './handshake.svg'
import {Link} from 'react-router-dom'

const Header = ({ handleLoginClick, handleLogoutClick, loggedIn }) => {
    const [open, setOpen] = useState(false);
    
    const toggleDropdown = () => {
        setOpen(!open);
    }

    return (
        <>
            <nav className="py-4 px-8 mb-7">
                <div className="flex items-center justify-between h-16">
                    <div className="navbar-brand flex items-start text-purple-700">
                        <img src={LogoImg} alt="Hello" className="w-7 h-7" />
                        <h1 className="text-purple-700 ml-1">Helping<span className="text-black">Hands</span></h1>
                    </div>
                    <div className="hidden md:block ml-auto">
                        <div className="flex items-center space-x-4">
                            {loggedIn &&
                                <>
                                    <Link to={{ pathname: '/'}} className="navlink">
                                            Home
                                    </Link>                               
                                    <Link to={{ pathname: '/tasks'}} className="navlink">
                                            Tasks
                                    </Link>
                                    {/* need to add the dashboard */}
                                    <Link to={{ pathname: '/#'}} className="navlink">
                                            Dashboard
                                    </Link>
                                    <Button text="Logout" handleClick={handleLogoutClick} />
                                </>
                            }
                            {!loggedIn &&
                                <Button text="Login" handleClick={handleLoginClick} />
                            }
                        </div>
                    </div>
                    <div class="flex md:hidden">
                        <button class="text-gray-800 hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none" onClick={toggleDropdown}>
                            <svg width="20" height="20" fill="currentColor" class="h-8 w-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
                {open &&
                    <div className="md:hidden">
                        <div class="flex flex-col">
                            {loggedIn &&
                                <>
                                    <a href="/#" className="navlink">
                                        Home
                                    </a>
                                    <a href="/#" className="navlink">
                                        Tasks
                                    </a>
                                    <a href="/#" className="navlink">
                                        Dashboard
                                    </a>
                                    <Button text="Logout" handleClick={handleLogoutClick} />
                                </>
                            }
                            {!loggedIn &&
                                <Button text="Login" handleClick={handleLoginClick} />
                            }
                        </div>
                    </div>
                }
            </nav>
        </>
    )
}

export default Header;
