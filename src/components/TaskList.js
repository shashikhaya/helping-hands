import { Link } from "react-router-dom";
import Task from "./Task";

const TaskList = ({ tasks }) => {
  return (
    <>
      <div className="flex">
        <Link
          to={{ pathname: "/tasks/post" }}
          className="btn btn-gray text-center w-full"
        >
          +
        </Link>
      </div>
      <p>Showing {tasks.length} tasks </p>
      {tasks.map((task, index) => (
        <Task key={index} task={task} />
      ))}
    </>
  );
};

export default TaskList;
