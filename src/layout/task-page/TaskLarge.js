import Map from "./Map";
// import DirectionsMap from "./DirectionsMap";

const TaskLarge = ({ id, title, description, status, type, location, duration, covidInfo }) => {
    const coordinates= { lat:52.4397, lng: -1.87 }
    
    return (
        <div className="flex flex-col px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-2">
            <div className="justify-items-center">
                <div className="flex justify-between">
                    <div>
                        <h1 className="text-gray-900 font-bold text-2xl">
                            <span className="text-purple-700">title</span>
                            <span className="text-gray-400">&nbsp;/ type </span>
                        </h1>
                        <p className="mt-2 text-base">description</p>
                    </div>
                    <div className="float-right mb-1">
                        <p className="mt-2 font-bold text-gray-400 text-xl">status</p>
                        <p className="mt-2 text-lg">duration</p>
                    </div>
                </div>
                <Map coords={coordinates} />
                <button className="btn btn-purple float-right">Lend a hand</button>  
            </div>
        </div>            
    )
}

export default TaskLarge
