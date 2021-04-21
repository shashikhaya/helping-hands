import Map from "./Map";
// import DirectionsMap from "./DirectionsMap";

const TaskLarge = () => {
    return (
        <div>
            <h3><span>Task title</span><span>Task type</span></h3>
            <div>
                <p>Posted date</p>
                <p>Duration: 1hr</p>
                <p>google map api key: AIzaSyDD9SFkGe-a_3ZltYX8xp7jC3B3jfqHeBo</p>
            </div>
            <p>Task description</p>
            <Map />
            <p>Location</p>
            <time datetime="2017-02-14">Time</time>
            <button>Lend a hand</button>  
        </div>
    )
}

export default TaskLarge
