const LoginButton = ({ text, loginLogout }) => {
    return (
        <button className="btn btn-purple" onClick={loginLogout}>
            { text }
        </button>
    )
}

export default LoginButton
