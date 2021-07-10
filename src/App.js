import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import TaskList from "./components/TaskList";
import TaskCreateForm from "./components/TaskCreateForm";
import Dashboard from "./pages/Dashboard";
import AccountModal from "./components/AccountModal";

import { userService } from './_services';
import { tasksService } from "./_services";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    tasksService.getTasks()
      .then(tasks => setTasks(tasks))
      .catch(err => console.log(err));
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleLoginFormSubmit = (username, password) => {
    userService.login(username, password)
      .then(user => {
        setLoggedIn(true);
        setIsOpen(!isOpen);
      })
      .catch(error => console.log(error))
  };

  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Header
          onAccountClick={openModal}
          loggedIn={loggedIn}
        />
        <AccountModal isOpen={isOpen} onClose={closeModal} onLoginFormSubmit={handleLoginFormSubmit} />
        <div className="container mx-auto mb-auto px-8">
          <Switch>
            <Route exact path="/">
              <Home onAccountClick={openModal} />
            </Route>
            <Route exact path="/tasks">
              <TaskList tasks={tasks}/>
            </Route>
            <Route exact path="/tasks/new">
              <TaskCreateForm />
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
