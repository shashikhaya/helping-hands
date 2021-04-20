const LoginButton = ({ text, loginLogout }) => {
    return (
        <button className="btn btn-purple ml-auto" onClick={loginLogout}>
            { text }           
        </button>
    )
}

export default LoginButton
