import { useEffect, useState } from "react";
import Map from "./Map";
import { getPostcode } from "../helpers";

const Task = ({ task, onTaskStatusUpdate }) => {
  const [location, setLocation] = useState();
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    async function getLocation() {
      let location = await getPostcode(
        task.location.coordinates[1],
        task.location.coordinates[0]
      );
      setLocation(location);
    }
    getLocation();
  }, [task.location.coordinates]);

  const handleExpandClick = () => {
    setCollapsed(!collapsed);
  };

  const handleStatusUpdate = () => {
    const newStatus = task.status === "posted" ? "in-progress" : "completed";
    onTaskStatusUpdate(task._id, newStatus);
  };

  return (
    <div className="rounded border border-gray overflow-hidden p-4 mb-4">
      <div className="flex justify-between">
        <div>
          <h1 className="text-gray-900 font-bold text-2xl">
            <span className="text-purple-700">{task.taskName}</span>
            <span className="text-gray-400">&nbsp;/ {task.taskType}</span>
          </h1>
          <p className="mt-2 text-base">{task.description}</p>
          <h1 className="mt-2 font-bold text-s">{location}</h1>
          <p className="mt-2 text-lg">{task.duration}</p>
        </div>
        <div>
          <p className="mt-2 font-bold text-gray-400 text-xl">{task.status}</p>
          <p className="mt-2 font-bold text-xl">{task.covidInfo}</p>
          <button onClick={handleExpandClick}>Expand</button>
          {task.status !== "completed" && (
            <div>
              <button
                className="btn btn-purple float-right"
                onClick={handleStatusUpdate}
              >
                Help
              </button>
            </div>
          )}
        </div>
      </div>
      {collapsed && (
        <Map
          longitude={task.location.coordinates[1]}
          latitude={task.location.coordinates[0]}
        />
      )}
    </div>
  );
};

export default Task;
