import { useState } from "react";
import { Link } from "react-router-dom";
import LogoImg from "../images/handshake.svg";

const Header = ({ onAccountClick, onLogoutClick, loggedIn }) => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  return (
    <>
      <nav className="py-4 px-8 mb-7">
        <div className="flex items-center justify-between h-16">
          <div className="navbar-brand flex items-start text-purple-700">
            <img src={LogoImg} alt="Hello" className="w-7 h-7" />
            <Link to={{ pathname: "/" }} className="text-purple-700 ml-1">
              Helping<span className="text-black">Hands</span>
            </Link>
          </div>
          <div className="hidden md:block ml-auto">
            <div className="flex items-center space-x-4">
              {loggedIn && (
                <>
                  <Link to={{ pathname: "/tasks" }} className="navlink">
                    Tasks
                  </Link>
                  <Link to={{ pathname: "/dashboard" }} className="navlink">
                    Dashboard
                  </Link>
                  <button className="btn btn-purple" onClick={onLogoutClick}>
                    Logout
                  </button>
                </>
              )}
              {!loggedIn && (
                <button className="btn btn-purple" onClick={onAccountClick}>
                  Login
                </button>
              )}
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              className="text-gray-800 hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
              onClick={toggleDropdown}
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="h-8 w-8"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
              </svg>
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden">
            <div className="flex flex-col">
              {loggedIn && (
                <>
                  <Link to={{ pathname: "/tasks" }} className="navlink">
                    Tasks
                  </Link>
                  <Link to={{ pathname: "/dashboard" }} className="navlink">
                    Dashboard
                  </Link>
                  <button className="btn btn-purple" onClick={onLogoutClick}>
                    Logout
                  </button>
                </>
              )}
              {!loggedIn && (
                <button className="btn btn-purple" onClick={onAccountClick}>
                  Login
                </button>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
