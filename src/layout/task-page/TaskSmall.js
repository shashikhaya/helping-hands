const TaskSmall = () => {
    return (
        <div className="flex-1 rounded border border-gray overflow-hidden p-4 mb-4 f">
            <h3 class="text-gray-900 font-bold text-m">
                <span class="text-purple-700">title</span>
                <span class="text-gray-400">&nbsp;/ type </span>
            </h3>
            <p class="mt-1 text-base">description</p>
            <p>Duration: 1hr</p>
            <button className="btn btn-purple">More info</button> 
        </div>
    )
}

export default TaskSmall
