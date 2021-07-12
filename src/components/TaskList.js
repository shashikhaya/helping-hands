import { Link } from "react-router-dom";
import Task from "./Task";

const TaskList = ({ tasks, onTaskStatusUpdate }) => {
  return (
    <>
      <div className="flex">
        <Link
          to={{ pathname: "/tasks/new" }}
          className="btn btn-gray text-center w-full"
        >
          +
        </Link>
      </div>
      <p>Showing {tasks.length} tasks </p>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onTaskStatusUpdate={onTaskStatusUpdate} />
      ))}
    </>
  );
};

export default TaskList;
