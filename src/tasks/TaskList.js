import Task from './Task';

const TaskList = () => {
    const TasksComponents = tasks.map((task) => (
        <>
            <Task
                key={task.id}
                id={task.id}
                title={task.title}
                description={task.description}
                status={task.status}
                type={task.type}
                location={task.location}
                duration={task.duration}
                covidInfo={task.covidInfo}
            />
        </>
    ));

    return (
        <div>
            {TasksComponents}
        </div>
    )
}

export default TaskList;
