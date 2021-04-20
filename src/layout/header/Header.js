import { useState } from 'react';
import Navbar from './Navbar';
import LoginButton from './LoginButton';
import NavbarBrand from './NavbarBrand';

const Header = () => {
    // this state will need to move higher up eventually
    const [loggedIn, setLoggedIn] = useState(false);

    const loginLogout = () => {
        // more logic
        setLoggedIn(!loggedIn);
    }

    return (
        <>
            <div className="flex items-center h-16">
                <NavbarBrand />
                <Navbar />
                <LoginButton text={loggedIn ? "Logout" : "Login"} loginLogout={loginLogout} />
            </div>
        </>
    )
}

export default Header;
