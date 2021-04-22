import { useState } from 'react'
import { Link } from 'react-router-dom'
import getCoords from '../_helpers/getCoords'
import { tasksService } from '../_services';

const PostTask = ({onPost}) => {
    const [taskName,setTask] = useState('')
    const [taskType,setType] = useState('')
    const [description,setDescription] = useState('')
    const [location,setLocation] = useState('')
    const [duration,setDuration] = useState('')
    const [covidInfo,setCovid] = useState('')
    const [accountName,setAccountName] = useState('')
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        if(!taskName | !taskType | !description | !location | !duration | !covidInfo){
            alert('Missing fields')
            return
        }
        // TODO: need to validate postcode before posting registration
        const body = {"taskName":taskName,
                      "taskType":taskType,
                      "status":"posted",
                      "description":description,
                      "username":accountName,
                      "dateTime":new Date().toJSON().slice(0,10).replace(/-/g,'/'),
                      "location":await getCoords(location),
                      "duration":duration,
                      "covidInfo":covidInfo,
                    }
        console.log(body)
        // tasksService.postTask(body)

        // clear form
        // setTask('')
        // setType('')
        // setDescription('')
        // setLocation('')
        // setDuration('')
        // setCovid('')

      }
    

    return (
        <div>
            <div className="">
                    <Link to={{ pathname: '/tasks/'}} className="btn btn-purple">
                        Back to task list
                    </Link>
            </div>
            <div className="flex flex-col px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
                <div className="self-center text-gray-900 font-bold text-2xl">Create a new task</div>
                    <div className="p-6 mt-6 gap-4 space-y-10 flex mb-2 relative">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input type="text" placeholder="Task" value={taskName} onChange= {(e)=>setTask(e.target.value)} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                            <input type="text" placeholder="Type" value={taskType} onChange= {(e)=>setType(e.target.value)} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                            <input type="text" placeholder="Description" value={description} onChange= {(e)=>setDescription(e.target.value)} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                            <input type="text" placeholder="Location (Postcode)" value={location} onChange= {(e)=>setLocation(e.target.value)} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                            <input type="text" placeholder="Duration" value={duration} onChange= {(e)=>setDuration(e.target.value)} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                            <input type="text" placeholder="Covid-19 info" value={covidInfo} onChange= {(e)=>setCovid(e.target.value)} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                            <input type="text" placeholder="username" value={accountName} onChange= {(e)=>setAccountName(e.target.value)} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                            <input type="submit" value="Submit" className="btn btn-purple" />
                        </form>
                    </div>
                </div>
        </div>
    )
}

export default PostTask
    