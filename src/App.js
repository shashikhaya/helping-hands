import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import _ from 'lodash';
import Header from './components/Header';
import LandingInfo from './pages/LandingInfo';
import Footer from './components/Footer';
import TaskList from './components/TaskList';
import PostTask from './components/PostTask';
import TaskPage from './components/TaskPage';
import Dashboard from './pages/Dashboard';
import { AccountBox } from "./components/accountBox"


import authHeader from './_helpers/authHeader'
import { userService } from './_services';
import getCoords from './_helpers/getCoords'


function App() {
  const [show, setShow] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const account = JSON.parse(localStorage.getItem('account'));
  
  useEffect(() => {
    if (!_.isEmpty(authHeader())) {
      setLoggedIn(true);
    }
  }, [])

  const handleLoginClick = () => {
    setShow(!show);
  }

  const handleLogin = () => {
    setLoggedIn(true);
    setShow(!show);
  }

  const handleLogoutClick = () => {
    userService.logout();
    setLoggedIn(false);
  }

  const postTask = async (task) => {
    // // get username
    const user = 'get username'
    // convert location into coordinates
    const location_data = await getCoords(task.location)
    // get the dateTime
    const today = new Date();
    const date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();

    const fullTask = {...task,
                      status:'posted', 
                      username:user,
                      location:{type:location_data.type,
                                coordinates:location_data.coordinates},
                      dateTime:date,
                    }
    // TODO: post the fullTask as the body to the API
    console.log(fullTask)
  }
  
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Header handleLoginClick={handleLoginClick} handleLogoutClick={handleLogoutClick} loggedIn={loggedIn} />
        <AccountBox onClose={() => setShow(false)} onLoginSubmit={handleLogin} show={show} />
        <div className="container mx-auto mb-auto px-8">
          <Switch>
            <Route exact path="/">
              <LandingInfo handleClick={handleLoginClick}/>
            </Route>
            <Route exact path="/tasks">
              <TaskList />
            </Route>
            <Route exact path="/tasks/post">
              <PostTask onPost={postTask} />
            </Route>
            <Route path="/task/:id">
              <TaskPage />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

