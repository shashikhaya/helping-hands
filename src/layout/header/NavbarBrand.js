import LogoImg from './handshake.svg'
const NavbarBrand = () => {
    return (
        <div className="navbar-brand flex items-start text-purple-700">
            <img src={LogoImg} alt="Hello" className="w-7 h-7" />
            <h1 className="text-purple-700 ml-1">Helping<span className="text-black">Hands</span></h1>
        </div>
    )
}

export default NavbarBrand;
