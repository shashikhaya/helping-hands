import Img from './MissionStatement-img.svg'

const MissionStatement = () => {
    return (
        <div class="grid grid-cols-2 gap-4">
            <div className="my-auto">
                <h1 className="text-4xl font-bold text-purple-700">Our mission statement</h1>
                <p className="text-3xl font-semibold">Make the world a better place, one hand at a time ;)</p>
            </div>
            <div className="mx-auto">
                <img src={Img} alt="globe" className="w-4/6	h-4/6"/>
            </div>
        </div>
    )
}

export default MissionStatement;
