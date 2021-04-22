import { Link } from 'react-router-dom';

const Task = ({ id, title, description, status, type, location, duration, covidInfo }) => {
    return (
        <div className="rounded border border-gray overflow-hidden p-4 mb-4">
            <div className="flex justify-between">
                <div>
                    <h1 className="text-gray-900 font-bold text-2xl">
                        <span className="text-purple-700">
                            { title }
                        </span>
                        <span className="text-gray-400">
                            &nbsp;/ { type }
                        </span>
                    </h1>
                    <p className="mt-2 text-base">
                        { description }
                    </p>
                    <h1 className="mt-2 font-bold text-xl">
                        { location }
                    </h1>
                    <p className="mt-2 text-lg">
                        { duration }
                    </p>
                </div>
                <div>
                    <p className="mt-2 font-bold text-gray-400 text-xl">
                        { status }
                    </p>
                    <p className="mt-2 font-bold text-xl">
                        { covidInfo }
                    </p>
                </div>
            </div>
            <div className="float-right mb-1">
                <Link to={{ pathname: '/task/'+ id}} className="btn btn-purple">
                    More Info
                </Link>
            </div>
        </div>
    )
}

export default Task;
