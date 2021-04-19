import styled from 'styled-components'

const NavBar = () => {
    return (
        <nav>
            <List>
                <li>Home</li>
                <li>Tasks</li>
            </List>  
        </nav>
    )
}

export default NavBar

const List = styled.ul`
list-style-type:none;
display:flex;
`