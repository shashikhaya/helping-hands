import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { getCoords } from "../helpers";

const TaskCreateForm = ({ onTaskCreateFormSubmit }) => {
  const [errors, setErrors] = useState({});
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [postcode, setPostcode] = useState("");
  const [coords, setCoords] = useState([]);
  const [duration, setDuration] = useState("");
  const [covidInfo, setCovidInfo] = useState("");
  const [username, setUsername] = useState("");
  const history = useHistory();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePostcodeChange = (e) => {
    setPostcode(e.target.value);
  };

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  const handleCovidInfoChange = (e) => {
    setCovidInfo(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const validatePostcode = (e) => {
    getCoords(e.target.value)
      .then((coordinates) => {
        setCoords(coordinates);
        setErrors(Object.assign({}, errors, { postcode: "" }));
      })
      .catch((error) => {
        setCoords([]);
        setErrors(Object.assign({}, errors, { postcode: error.message }));
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = {
      taskName: name,
      taskType: type,
      status: "posted",
      description: description,
      username: username,
      dateTime: new Date().toLocaleString(),
      location: { coordinates: coords },
      duration: duration,
      covidInfo: covidInfo,
    };
    onTaskCreateFormSubmit(newTask);
    history.push("/tasks");
  };

  return (
    <div>
      <div className="flex flex-col px-4 py-8 bg-white rounded-lg shadow sm:px-6 md:px-8 lg:px-10">
        <div className="self-center text-gray-900 font-bold text-2xl">Create Task</div>
        <div className="p-6 mt-6 gap-4 space-y-10 flex mb-2 relative">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              onChange={handleNameChange}
              className="mb-4 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              required
            />
            <input
              type="text"
              placeholder="Type"
              onChange={handleTypeChange}
              className="mb-4 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              required
            />
            <textarea
              placeholder="Description"
              onChange={handleDescriptionChange}
              className="mb-4 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              required
            />
            <input
              type="text"
              placeholder="Postcode"
              onChange={handlePostcodeChange}
              className="mb-4 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              onBlur={validatePostcode}
              required
            />
            {errors.postcode && (
              <p className="-mt-3 mb-4 text-red-500">
                <strong>{errors.postcode}</strong>
              </p>
            )}
            <input
              type="text"
              placeholder="Duration"
              onChange={handleDurationChange}
              className="mb-4 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              required
            />
            <input
              type="text"
              placeholder="Covid-19 Info"
              onChange={handleCovidInfoChange}
              className="mb-4 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              required
            />
            <input
              type="text"
              placeholder="Username"
              onChange={handleUsernameChange}
              className="mb-4 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              required
            />
            <button type="submit" className="btn btn-purple">
              Submit
            </button>
            <Link
              to={{ pathname: "/tasks" }}
              className="btn btn-red float-right"
            >
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskCreateForm;
