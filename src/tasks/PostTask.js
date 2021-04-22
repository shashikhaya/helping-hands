import { useState } from 'react'

const PostTask = ({onPost}) => {
    const [taskName,setTask] = useState('')
    const [taskType,setType] = useState('')
    const [description,setDescription] = useState('')
    const [location,setLocation] = useState('')
    const [duration,setDuration] = useState('')
    const [covidInfo,setCovid] = useState('')
    
    
    const onSubmit = (e) =>{
        // handle empty fields
        e.preventDefault()
        if(!taskName | !taskType | !description | !location | !duration | !covidInfo){
            alert('Missing fields')
            return
        }

        // onPost is where the submit will be handled
        onPost({taskName,taskType,description,location,duration,covidInfo})

        // clear form
        setTask('')
        setType('')
        setDescription('')
        setLocation('')
        setDuration('')
        setCovid('')
    }

    return (
        <div className="flex flex-col px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
            <div className="self-center text-gray-900 font-bold text-2xl">Create a new task</div>
                <div className="p-6 mt-6 gap-4 space-y-10 flex mb-2 relative">
                    <form onSubmit={onSubmit} className="space-y-4">
                        <input type="text" placeholder="Task" value={taskName} onChange= {(e)=>setTask(e.target.value)} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                        <input type="text" placeholder="Type" value={taskType} onChange= {(e)=>setType(e.target.value)} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                        <input type="text" placeholder="Description" value={description} onChange= {(e)=>setDescription(e.target.value)} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                        <input type="text" placeholder="Location (Postcode)" value={location} onChange= {(e)=>setLocation(e.target.value)} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                        <input type="text" placeholder="Duration" value={duration} onChange= {(e)=>setDuration(e.target.value)} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                        <input type="text" placeholder="Covid-19 info" value={covidInfo} onChange= {(e)=>setCovid(e.target.value)} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                        <input type="submit" value="Submit" className="btn btn-purple" />
                    </form>
                </div>
            </div>
    )
}

export default PostTask
    