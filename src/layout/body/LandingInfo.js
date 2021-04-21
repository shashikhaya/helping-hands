import balloon from './balloon.svg';
import coffee from './coffee.svg';
import globe from './globe.svg';
import health from './health.svg';
import help from './help.svg';
import love from './love.svg';
import money from './money.svg';
import FeatureInfo from './FeatureInfo';
import RegistrationInfo from './RegistrationInfo';
import AccountBox from '../../components/accountBox';

const LandingInfo = () => {
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
                    subHeading="Get something from the shop."
                />
                <FeatureInfo 
                    img={ love } 
                    heading="Love"
                    subHeading="Get something from the shop."
                />
                <FeatureInfo 
                    img={ health } 
                    heading="Health"
                    subHeading="Get something from the shop."
                />
                <FeatureInfo 
                    img={ balloon } 
                    heading="Balloon"
                    subHeading="Get something from the shop."
                />
                <FeatureInfo 
                    img={ money } 
                    heading="Money"
                    subHeading="Get something from the shop."
                />
                <FeatureInfo 
                    img={ coffee } 
                    heading="Coffee"
                    subHeading="Get something from the shop."
                />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
                <RegistrationInfo 
                    title="Feeling helpful?" 
                    text="Even the smallest task can really help!" 
                    buttonText="Sign up to help" 
                />  
                <RegistrationInfo 
                    title="Need a hand?" 
                    text="No task too small!" 
                    buttonText="Sign up for help" 
                />          
            </div>
        </>
    )
}

export default LandingInfo;
