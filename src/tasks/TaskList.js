import { useState, useEffect, Component } from 'react';
import Task from './tasks';
    
const TaskList = () => {

    // this state will come from higher up
    const [tasks, setTasks] = useState([]);

    // just mock data for now
    useEffect(() => {
        setTasks([
            {
                id: 1,
                title: "Get Milk",
                description: "Please get me some milk.",
                status: "Posted",
                type: "Shopping",
                location: "London",
                duration: "10 mins",
                covidInfo: "Negative"
            },
            {
                id: 2,
                title: "Get Eggs",
                description: "Please get me some eggs.",
                status: "Posted",
                type: "Shopping",
                location: "Birmingham",
                duration: "9 mins",
                covidInfo: "Negative"
            },
            {
                id: 3,
                title: "Get Flour",
                description: "Please get me some flour.",
                status: "Posted",
                type: "Shopping",
                location: "Manchester",
                duration: "11 mins",
                covidInfo: "Negative"
            },
        ]);
    }, []);

    const TasksComponents = tasks.map((task) => (
        <>
            <Task
                key={task.id}
                id={task.id}
                title={task.title}
                description={task.description}
                status={task.status}
                type={task.type}
                location={task.location}
                duration={task.duration}
                covidInfo={task.covidInfo}
            />
        </>
    ));

    return (
        <div>
            {TasksComponents}
        </div>
    )
}

export default TaskList;
