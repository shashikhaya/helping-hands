import balloon from './balloon.svg';
import coffee from './coffee.svg';
import globe from './globe.svg';
import health from './health.svg';
import help from './help.svg';
import love from './love.svg';
import money from './money.svg';
import FeatureInfo from './FeatureInfo';
import RegistrationInfo from './RegistrationInfo';

const LandingInfo = ({ handleClick }) => {
    return (
        <>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="my-auto">
                    <h1 className="text-4xl font-bold text-purple-700">Our mission statement</h1>
                    <p className="text-3xl font-semibold">Making the world a better place, one hand at a time.</p>
                </div>
                <div>
                    <img src={globe} alt="globe" className="m-auto w-4/5"/>
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
                <FeatureInfo 
                    img={ help } 
                    heading="Help"
                    subHeading="Providing the best helpers to all in need."
                />
                <FeatureInfo 
                    img={ love } 
                    heading="Love"
                    subHeading="Each act spreads love."
                />
                <FeatureInfo 
                    img={ health } 
                    heading="Health"
                    subHeading="Pick up prescriptions for those who can't."
                />
                <FeatureInfo 
                    img={ balloon } 
                    heading="Balloon"
                    subHeading="Deliver a birthday surprise to someone alone."
                />
                <FeatureInfo 
                    img={ money } 
                    heading="Money"
                    subHeading="All our services are free thanks to our volunteers."
                />
                <FeatureInfo 
                    img={ coffee } 
                    heading="Coffee"
                    subHeading="A chat over a hot drink can make a week."
                />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
                <RegistrationInfo 
                    handleClick={handleClick}
                    title="Feeling helpful?" 
                    text="Even the smallest task can really help!" 
                    buttonText="Sign up to help"
                    statement1="Let us know where you are. "
                    statement2="We'll show you people who need help nearby. " 
                    statement3="Pick a task you can do. " 
                    statement4="Do something good. " 
                    statement5="Make someones day. " 
                />  
                <RegistrationInfo 
                    handleClick={handleClick}
                    title="Need a hand?" 
                    text="No task too small!" 
                    buttonText="Sign up for help"
                    statement1="Let us know where you are. "
                    statement2="Tell us what you need help with. " 
                    statement3="Anything at all, no task to small. " 
                    statement4="We'll find someone nearby to help. " 
                    statement5="No fee required. "  
                />          
            </div>
        </>
    )
}

export default LandingInfo;
