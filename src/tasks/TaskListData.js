import React, { Component } from 'react';
//import './Task';

class TaskListData extends Component {
  getInitialState() {
    return {
      clientToken: false,
      loaded: false
    }
  }
//fetch data from Tasks database/route?
  componentWillMount(){
    fetch('localhost:3000/Tasks', {
      method: 'GET', 
    headers: new Headers({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IldoaXRuZXkiLCJyb2xlIjoiaGVscGVyIiwibG9jYXRpb24iOnsidHlwZSI6IlBvaW50IiwiY29vcmRpbmF0ZXMiOls0Mi43ODksMTIuOTgyXX0sImlhdCI6MTYxOTA4NjMwNX0.WLPqosTMPJBaIcpdUZQ0IEl_27JakGzyqs9pVT3gzFQ', 
      'Content-Type': 'application/x-www-form-urlencoded'
    }), 
  })
      .then((response) => response.json())
      .then((responseData) => {
          console.log(responseData);
      //   this.setState({
      //     clientToken: responseData.access_token,
      //   });
      })
      .then(() => {
       this.getPosts();
      })
  }

  getPosts(){
    var obj = { 
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Origin': '',
          'Host': 'localhost:3000'
        },
    }
    fetch('localhost:3000/Tasks', obj)
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
      })
  }
//Return taskName, taskType, status, description, location, duration, covidInfo
  //display all results with user input location
render() {
    return (
      <div className="TaskListData">
        <h1>Tasks</h1>
      </div>
    );
  }
}

export default TaskListData;