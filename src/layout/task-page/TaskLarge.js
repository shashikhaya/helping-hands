import Map from "./Map";

import { tasksService } from '../../_services';

import { useState, useEffect } from 'react'

// import DirectionsMap from "./DirectionsMap";
// { id, title, description, status, type, location, duration, covidInfo }
const TaskLarge = ({task}) => {
    const [taskStatus,setTaskStatus] = useState(task.status)
    const [buttonText,setButtonText] = useState()
    // const [task,setTask] = useState()

    const account = JSON.parse(localStorage.getItem('account'));
    
    useEffect(()=>{
        // console.log(account.location.coordinates)
        getButtonText()
    }, [task.status, taskStatus,buttonText])

    // useEffect(()=>{
    //     setTask(task)
    // },[])

    const getButtonText = () => {
        switch(task.status){
            case "in-progress":
                setButtonText('Complete task')
                break
            default :
                setButtonText('Lend a hand')
                break
        }

    }
    
    const handleClick= async() => {
        let newStatus = ""
        switch (task.status){
            
            case "posted":
                newStatus = "in-progress"
                break
                // put request with body {"status": "in-progress"}

            case "in-progress":
                newStatus = "completed"
                break
                // put request with body {"status": "in-progress"}

            case "completed":
                return "task already completed"
                // put request with body {"status": "in-progress"}

            default: console.log('error')
        }
        tasksService.updateTaskStatus(newStatus,task._id)
                .then((data) => {
                    setTaskStatus(newStatus);
                    task.status = newStatus
                })
                .catch(error => {console.log(error)
                    // setResponseMsg(error)
                    });
        }  



    return (
        <div className="flex flex-col px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-2">
            <div className="justify-items-center">
                <div className="flex justify-between">
                    <div>
                        <h1 className="text-gray-900 font-bold text-2xl">
                            <span className="text-purple-700">{task.taskName}</span>
                            <span className="text-gray-400">&nbsp;/ {task.taskType} </span>
                        </h1>
                        <p className="mt-2 text-base">{task.description}</p>
                    </div>
                    <div className="float-right mb-1">
                        <p className="mt-2 font-bold text-gray-400 text-xl">{task.status}</p>
                        <p className="mt-2 text-lg">{task.duration}</p>
                    </div>
                </div>
                {/* TODO: fix Map */}
                {(Object.keys(task).length>0) && <Map userCoords={account.location.coordinates} taskCoords={task.location.coordinates} /> }
                {(account.role ==="helper" & task.status!=="completed") && <div><button className="btn btn-purple float-right" onClick={handleClick}>{buttonText}</button></div>}  
            </div>
        </div>            
    )
}

export default TaskLarge
