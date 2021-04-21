import { useParams } from "react-router-dom"

const TaskDetail = () => {
    const { id } = useParams()
    // get task somehow
    
    return (
        <div>
            <h1>task: { id }</h1>
        </div>
    )
}

export default TaskDetail;
