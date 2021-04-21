import { useParams } from "react-router-dom"

import TaskLarge from '../layout/task-page/TaskLarge'

const TaskDetail = () => {
    const { id } = useParams()
    // get task somehow
    
    return (
        <div>
            <TaskLarge />
        </div>
    )
}

export default TaskDetail;
