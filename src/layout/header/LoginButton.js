import styled from 'styled-components'

const LoginButton = ({text}) => {
    return (
        <Button>
            {/* Later we will make it dynamic, I.e. login/logout */}
            { text }           
        </Button>
    )
}

export default LoginButton


const Button = styled.button`
background: #6C5CE7;
border: 1px solid #6C5CE7;
box-sizing: border-box;
border-radius:25%;
`