import Header from './layout/header/Header'
import Footer from './layout/footer/Footer'
import LandingInfo from './layout/body/LandingInfo'
import { AccountBox } from "./components/accountBox"
import { useState, useEffect } from 'react'
import styled from "styled-components"

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginButton = styled.button`
width: 100%;
padding: 11px 40%;
color: #fff;
font-size: 15px;
font-weight: 600;
border-radius: 100px 100px 100px 100px;
cursor: pointer;
transition: all, 240ms ease-in-out;
background: rgb(109,40,217);

&:hover {
  opacity: 70%;
}
`;

function App() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  }
  
  return (
    <div className="flex flex-col h-screen">
      
      <Header handleClick={handleClick}/>
      <AccountBox onClose={() => setShow(false)} show={show} />
      <div className="container mx-auto mb-auto px-8">
        <LandingInfo />
      </div>
      <Footer />
    </div>
  );
}

export default App;
