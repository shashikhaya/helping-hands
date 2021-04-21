import Map from "./Map";
// import DirectionsMap from "./DirectionsMap";

const TaskLarge = ({ id, title, description, status, type, location, duration, covidInfo }) => {
    const coordinates= { lat:52.4397, lng: -1.87 }
    
    return (
        <div class="rounded border border-gray overflow-hidden p-4 mb-4 f">
            <div class="flex justify-between">
                <div>
                    <h1 class="text-gray-900 font-bold text-2xl">
                        <span class="text-purple-700">title</span>
                        <span class="text-gray-400">&nbsp;/ type </span>
                    </h1>
                    <p class="mt-2 text-base">description</p>
                </div>
                <div class="float-right mb-1">
                    <p class="mt-2 font-bold text-gray-400 text-xl">status</p>
                    <p class="mt-2 text-lg">duration</p>
                </div>
            </div>
            <Map coords={coordinates} />
            <button className="btn btn-purple float-right">Lend a hand</button>  
        </div>
    )
}

export default TaskLarge
