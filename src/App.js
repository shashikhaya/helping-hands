import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './layout/header/Header';
import LandingInfo from './layout/body/LandingInfo';
import Footer from './layout/footer/Footer';
import TaskList from './tasks/TaskList';
import PostTask from './tasks/PostTask';
import TaskPage from './layout/task-page/TaskPage';
import { AccountBox } from "./components/accountBox"

function App() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  }

  const getCoords = async (postcode) =>{
    const locResponse = await fetch(`https://postcodes.io/postcodes/${postcode}`)
    const location = await locResponse.json()
    return {type:location.result.admin_district,coordinates:[location.result.latitude,location.result.longitude]}

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
        <Header handleClick={handleClick} />
        <AccountBox onClose={() => setShow(false)} show={show} />
        <div className="container mx-auto mb-auto px-8">
          <Switch>
            <Route exact path="/">
              <LandingInfo handleClick={handleClick}/>
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
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

