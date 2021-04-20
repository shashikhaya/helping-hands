const Navbar = () => {
    return (
        <ul className="ml-10 flex items-baseline space-x-4">
            <li>
                <a href="/" className="navlink">
                    Home
                </a>
            </li>
            <li>
                <a href="/" className="navlink">
                    Tasks
                </a>
            </li>
            <li>
                <a href="/" className="navlink">
                    Dashboard
                </a>
            </li>
            <li>
                <a href="/" className="navlink">
                    Profile
                </a>
            </li>
        </ul>
    )
}

export default Navbar;
