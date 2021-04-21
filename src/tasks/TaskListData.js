import React, { Component } from 'react';
//import './Task';

class TaskListData extends Component {
  state = {task: []}
//fetch data from Tasks database/route?
  componentDidMount() {
    fetch('/Tasks')
      .then(res => res.json())
      .then(task => this.setState({ task }));
  }
//Return taskName, taskType, status, description, location, duration, covidInfo
  //display all results with user input location
render() {
    return (
      <div className="TaskListData">
        <h1>Tasks</h1>
        {this.state.task.map(task =>
          <div key={task.id}>{task.taskName}</div>
        )}
      </div>
    );
  }
}

export default TaskListData;