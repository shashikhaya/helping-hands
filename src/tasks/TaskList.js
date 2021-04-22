import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Task from './Task';
import { tasksService } from '../_services';

const TaskList = () => {
    // this state will come from higher up
    const [tasks, setTasks] = useState([]);

    // just mock data for now
    useEffect(() => {
        tasksService.getTasks()
        .then(
          (tasks) => {
                setTasks(tasks);
            },
            error => console.log(error)
        );
    }, []);

    const TasksComponents = tasks.map((task) => (
        <>
            <Task
                key={task._id}
                id={task._id}
                title={task.taskName}
                description={task.description}
                status={task.status}
                type={task.taskType}
                location={task.location.coordinates}
                duration={task.duration}
                covidInfo={task.covidInfo}
            />
        </>
    ));

    return (
        <>
            <div className="flex">
                <Link to={{ pathname: '/tasks/post'}} className="btn btn-gray text-center w-full">
                    +
                </Link>
            </div>
            {TasksComponents}
        </>
    )
}

export default TaskList;
