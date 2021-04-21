const LoginButton = ({ text, loginLogout, handleClick }) => {
    return (
        <button className="btn btn-purple" onClick={handleClick}>
            { text }
        </button>
    )
}

export default LoginButton
