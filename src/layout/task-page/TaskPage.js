import TaskLarge from './TaskLarge'
import TaskSmall from './TaskSmall'

import {tasksService} from '../../_services/tasks.service'

import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


const TaskPage = () => {
    const [task, setTask]=useState({});
    const { id } = useParams()
    useEffect(() =>{

        tasksService.getTask(id)
        .then(
            (task) => {
                setTask(task.data);
            },
            error => console.log(error)
        
        );
    },[]);

    return (
        <div  className="space-y-5" >
            <div className="">
                <Link to={{ pathname: '/tasks/'}} className="btn btn-purple">
                    Back to task list
                </Link>
            </div>
            <TaskLarge task={task} />
            <h3>Similar tasks</h3>
            <div className="flex space-x-3" >
                <TaskSmall />
                <TaskSmall />
                <TaskSmall />
            </div>

                        
        </div>
    )
}

export default TaskPage
