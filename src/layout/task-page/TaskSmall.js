const TaskSmall = () => {
    return (
        <div className="flex-1 rounded border border-gray overflow-hidden p-4 mb-4 f">
            <h3 class="text-gray-900 font-bold text-m">
                <span className="text-purple-700">title</span>
                <span className="text-gray-400">&nbsp;/ type </span>
            </h3>
            <p className="mt-1 text-base">description</p>
            <p>Duration: 1hr</p>
            <button className="btn btn-purple">More info</button> 
        </div>
    )
}

export default TaskSmall
