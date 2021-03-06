import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAlert } from "react-alert";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import TaskList from "./components/TaskList";
import TaskCreateForm from "./components/TaskCreateForm";
import Dashboard from "./pages/Dashboard";
import AccountModal from "./components/AccountModal";
import * as userService from "./services/userService";
import * as tasksService from "./services/tasksService";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [tasks, setTasks] = useState([]);
  const alert = useAlert();

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      setLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    tasksService.getTasks()
      .then((tasks) => setTasks(tasks))
      .catch((error) => console.log(error));
  }, [loggedIn]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleLoginFormSubmit = (username, password) => {
    userService.login(username, password)
      .then((data) => {
        localStorage.setItem("token", JSON.stringify(data["accessToken"]));
        localStorage.setItem("account", JSON.stringify(data["account"]));
        setLoggedIn(true);
        closeModal();
      })
      .catch((error) => alert.show(error.message));
  };

  const handleRegisterFormSubmit = (role, username, email, coords, password) => {
    userService.register(role, username, email, coords, password)
      .then((data) => alert.show(data["message"]))
      .catch((error) => alert.show(error.message));
  };

  const handleLogoutClick = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("account");
    setTasks([]);
    setLoggedIn(false);
  };

  const handleTaskCreateFormSubmit = (newTask) => {
    tasksService.createTask(newTask)
      .then((createdTask) => {
        const nextTasks = [...tasks, createdTask.data];
        setTasks(nextTasks);
      })
      .catch((error) => alert.show(error.message));
  };

  const handleTaskStatusUpdate = (taskId, newStatus) => {
    tasksService.updateTaskStatus(taskId, newStatus)
      .then((updatedTask) => {
        const nextTasks = tasks.map((task) => {
          if (task._id === taskId) {
            return Object.assign({}, task, {
              status: updatedTask.data.status,
            });
          } else {
            return task;
          }
        });
        setTasks(nextTasks);
      })
      .catch((error) => alert.show(error.message));
  };

  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Header
          onAccountClick={openModal}
          onLogoutClick={handleLogoutClick}
          loggedIn={loggedIn}
        />
        <AccountModal
          isOpen={isOpen}
          onClose={closeModal}
          onLoginFormSubmit={handleLoginFormSubmit}
          onRegisterFormSubmit={handleRegisterFormSubmit}
        />
        <div className="container mx-auto mb-auto px-8">
          <Switch>
            <Route exact path="/">
              <Home onAccountClick={openModal} />
            </Route>
            <Route exact path="/tasks">
              <TaskList
                tasks={tasks}
                onTaskStatusUpdate={handleTaskStatusUpdate}
              />
            </Route>
            <Route exact path="/tasks/new">
              <TaskCreateForm onTaskCreateFormSubmit={handleTaskCreateFormSubmit} />
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
};

export default App;
