import LogoImg from '../images/handshake.svg'

const Footer = () => {
    return (
        <footer className="px-3 py-4 mt-7 bg-white text-2 text-gray-500 transition-colors duration-200">
            <div className="flex flex-col">
                <div className="mt-4 md:mt-0 flex flex-col md:flex-row">
                    <nav className="flex-1 flex flex-col items-center justify-center md:items-end md:border-r border-gray-100 md:pr-5">
                        <a href="/#" className="hover:text-gray-700">
                            About
                        </a>
                        <a href="/#" className="hover:text-gray-700">
                            Blog
                        </a>
                        <a href="/#" className="hover:text-gray-700">
                            Support
                        </a>
                    </nav>
                    <div className="mt-4 md:mt-0 flex-1 flex items-center justify-center md:border-r border-gray-100">
                        <span className="sr-only">
                            View on GitHub
                        </span>
                        <img src={LogoImg} alt="Helping Hands" />
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center mt-2 md:mt-0 md:items-start md:pl-5">
                        <span>
                            © 2021
                        </span>
                        <span>
                            Helping Hands
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
