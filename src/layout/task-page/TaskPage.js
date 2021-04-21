import TaskLarge from './TaskLarge'
import TaskSmall from './TaskSmall'

const TaskPage = () => {
    return (
        <div>
            <button class="bg-purple-700 rounded-xl p-6 md:p-0 ">Back</button>
            <TaskLarge />
            <div>
                <TaskSmall />
                <TaskSmall />
                <TaskSmall />
            </div>

                        
        </div>
    )
}

export default TaskPage
