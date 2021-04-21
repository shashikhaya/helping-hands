import { Link } from 'react-router-dom';

const Task = ({ id, title, description, status, type, location, duration, covidInfo }) => {
    return (
        <div class="rounded border border-gray overflow-hidden p-4 mb-4">
            <div class="flex justify-between">
                <div>
                    <h1 class="text-gray-900 font-bold text-2xl">
                        <span class="text-purple-700">
                            { title }
                        </span>
                        <span class="text-gray-400">
                            &nbsp;/ { type }
                        </span>
                    </h1>
                    <p class="mt-2 text-base">
                        { description }
                    </p>
                    <h1 class="mt-2 font-bold text-xl">
                        { location }
                    </h1>
                    <p class="mt-2 text-lg">
                        { duration }
                    </p>
                </div>
                <div>
                    <p class="mt-2 font-bold text-gray-400 text-xl">
                        { status }
                    </p>
                    <p class="mt-2 font-bold text-xl">
                        { covidInfo }
                    </p>
                </div>
            </div>
            <div class="float-right mb-1">
                <Link to={{ pathname: '/task/'+ id}} className="btn btn-purple">
                    More Info
                </Link>
            </div>
        </div>
    )
}

export default Task;
