import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import getPostcode from "../_helpers/getPostcode";

const Task = (props) => {
  const [location, setLocation] = useState();

  useEffect(() => {
    async function getLocation() {
      let location = await getPostcode(props.location[1], props.location[0]);
      setLocation(location);
    }
    getLocation();
  }, []);

  return (
    <div className="rounded border border-gray overflow-hidden p-4 mb-4">
      <div className="flex justify-between">
        <div>
          <h1 className="text-gray-900 font-bold text-2xl">
            <span className="text-purple-700">{props.title}</span>
            <span className="text-gray-400">&nbsp;/ {props.type}</span>
          </h1>
          <p className="mt-2 text-base">{props.description}</p>
          <h1 className="mt-2 font-bold text-s">{location}</h1>
          <p className="mt-2 text-lg">{props.duration}</p>
        </div>
        <div>
          <p className="mt-2 font-bold text-gray-400 text-xl">{props.status}</p>
          <p className="mt-2 font-bold text-xl">{props.covidInfo}</p>
        </div>
      </div>
      <div className="float-right mb-1">
        <Link to={{ pathname: "/task/" + props.id }} className="btn btn-purple">
          More Info
        </Link>
      </div>
    </div>
  );
};

export default Task;
