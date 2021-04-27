import balloon from '../images/balloon.svg';
import coffee from '../images/coffee.svg';
import globe from '../images/globe.svg';
import health from '../images/health.svg';
import help from '../images/help.svg';
import love from '../images/love.svg';
import money from '../images/money.svg';
import FeatureInfo from '../components/FeatureInfo';
import RegistrationInfo from '../components/RegistrationInfo';

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
