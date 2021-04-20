import NavBar from './NavBar'
import LoginButton from './LoginButton'
import NavbarBrand from './NavbarBrand'

const Header = () => {
    const loggedIn = false

    return (
        <>
            <nav className="navbar">
                <NavbarBrand />
                <ul>
                    <li>
                        <LoginButton text={loggedIn ? "Logout" : "Login"} />
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Header;
