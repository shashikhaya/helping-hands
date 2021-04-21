import Header from './layout/header/Header'
import MissionStatement from './layout/body/MissionStatement'
import SupportCases from './layout/body/SupportCases' 
import Registration from './layout/body/Registration'
import Footer from './layout/footer/Footer'
import { AccountBox } from "./components/accountBox";
import { useState, useEffect } from 'react'
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  const [show, setShow] = useState(false)
  
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <AppContainer>
        <button onClick={() => setShow(true) }>Show Modal</button>
        <AccountBox onClose={() => setShow(false)} show={show} />
      </AppContainer>
      <MissionStatement />
      <SupportCases />
      <Registration />
      <Footer />
    </div>
  );
}

export default App;
