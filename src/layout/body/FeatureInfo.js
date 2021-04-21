const FeatureInfo = ({ img, heading, subHeading }) => {
    return (
        <div className="flex flex-row">
            <div className="flex flex-1 items-center p-4">
                <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                    <a href="/" className="block relative">
                        <img src={img} alt="" className="mx-auto object-cover h-13 w-13"></img>
                    </a>
                </div>
                <div className="flex-1 pl-1">
                    <div className="font-medium">
                        { heading }
                    </div>
                    <div className="text-gray-600 text-sm">
                        { subHeading }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeatureInfo;
