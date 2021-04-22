const Button = ({ text, handleClick }) => {
    return (
        <button className="btn btn-purple" onClick={handleClick}>
            { text }
        </button>
    )
}

export default Button;
