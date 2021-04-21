import TaskLarge from './TaskLarge'
import TaskSmall from './TaskSmall'

import { Link } from 'react-router-dom';

const TaskPage = () => {
    return (
        <div  className="space-y-5" >
            <div>
                <Link to={{ pathname: '/tasks/'}} className="btn btn-purple">
                    Back to task list
                </Link>
            </div>
            <TaskLarge />
            <div className="flex space-x-3" >
                <TaskSmall />
                <TaskSmall />
                <TaskSmall />
            </div>

                        
        </div>
    )
}

export default TaskPage
