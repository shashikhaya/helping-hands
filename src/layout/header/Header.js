import NavBar from './NavBar'
import LoginButton from './LoginButton'
import Title from './Title'

import styled from 'styled-components'

const Header = () => {
    const loggedIn = false

    return (
        <Div>
            <Title />
            <NavBar />
            <LoginButton text={loggedIn? "Logout": "Login"} />
        </Div>
    )
}
export default Header

const Div = styled.div`
    display:flex;
`
