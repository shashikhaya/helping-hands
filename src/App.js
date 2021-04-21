import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './layout/header/Header';
import LandingInfo from './layout/body/LandingInfo';
import Footer from './layout/footer/Footer';
import TaskList from './tasks/TaskList';
import TaskDetail from './tasks/TaskDetail';
import { AccountBox } from "./components/accountBox"

function App() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  }
  
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Header handleClick={handleClick} />
        <AccountBox onClose={() => setShow(false)} show={show} />
        <div className="container mx-auto mb-auto px-8">
          <Switch>
            <Route exact path="/">
              <LandingInfo />
            </Route>
            <Route exact path="/tasks">
              <TaskList />
            </Route>
            <Route path="/task/:id">
              <TaskDetail />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

