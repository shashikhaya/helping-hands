import Map from "./Map";

import { useState, useEffect } from 'react'

// import DirectionsMap from "./DirectionsMap";
// { id, title, description, status, type, location, duration, covidInfo }
const TaskLarge = ({task}) => {
    const [status,setStatus] = useState(task.status)
    
    useEffect(() => {
        console.log(task)
    })
    

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
                {/* <Map coords={task.location.coordinates} /> */}
                <button className="btn btn-purple float-right">Lend a hand</button>  
            </div>
        </div>            
    )
}

export default TaskLarge
