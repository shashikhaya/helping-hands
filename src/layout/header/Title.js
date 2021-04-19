import LogoImg from './handshake.svg'
import styled from 'styled-components'
const Title = () => {
    return (
        <Div>
            <img src={LogoImg} alt="Hello" /> 
            <h1><span>Helping</span><span>Hands</span></h1>
        </Div>
    )
}

export default Title


const Div = styled.div`
display:flex;`