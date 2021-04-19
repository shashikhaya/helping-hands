const LoginButton = ({ text }) => {
    return (
        <button className="btn btn-purple">
            {/* Later we will make it dynamic, I.e. login/logout */}
            { text }           
        </button>
    )
}

export default LoginButton
