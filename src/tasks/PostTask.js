import { useState } from 'react'
import { Link } from 'react-router-dom'
import getCoords from '../_helpers/getCoords'
import { tasksService } from '../_services';

const PostTask = () => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [duration, setDuration] = useState('');
    const [covidInfo, setCovidInfo] = useState('');
    const [username, setUsername] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleTypeChange = (e) => {
        setType(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    };

    const handleDurationChange = (e) => {
        setDuration(e.target.value);
    };

    const handleCovidInfoChange = (e) => {
        setCovidInfo(e.target.value);
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleSubmit = async(e) => {
        e.preventDefault();

        const coords = await getCoords(location);

        // TODO: need to validate postcode before posting registration
        const newTask = {
            "taskName": name,
            "taskType": type,
            "status": "posted",
            "description": description,
            "username": username,
            "dateTime": new Date().toLocaleString(),
            "location": {"coordinates": coords.coordinates},
            "duration": duration,
            "covidInfo": covidInfo,
        }
        
        tasksService.postTask(newTask)
            .then(data => {
                console.log(data["message"]);
                
                // clear form
                e.target.reset();
                console.log("test");
                // setName('');
                // setType('');
                // setDescription('');
                // setLocation('');
                // setDuration('');
                // setCovidInfo('');
                // setUsername('');
            })
            .catch(error => console.log(error));
    }
    
    return (
        <div>
            <div className="flex flex-col px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
                <div className="self-center text-gray-900 font-bold text-2xl">Create Task</div>
                    <div className="p-6 mt-6 gap-4 space-y-10 flex mb-2 relative">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input type="text" placeholder="Name" onChange={handleNameChange} className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" required />
                            <input type="text" placeholder="Type" onChange={handleTypeChange} className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" required />
                            <input type="text" placeholder="Description" onChange={handleDescriptionChange} className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" required />
                            <input type="text" placeholder="Location (Postcode)" onChange={handleLocationChange} className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" required />
                            <input type="text" placeholder="Duration" onChange={handleDurationChange} className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" required />
                            <input type="text" placeholder="Covid-19 Info" onChange={handleCovidInfoChange} className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" required />
                            <input type="text" placeholder="Username" onChange={handleUsernameChange} className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" required />
                            <button type="submit" className="btn btn-purple">Submit</button>
                            <Link to={{ pathname: '/tasks'}} className="btn btn-red float-right">
                                Cancel
                            </Link>
                        </form>
                    </div>
                </div>
        </div>
    )
}

export default PostTask;
