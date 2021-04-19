import RegistrationForm from './RegistrationForm'

const Registration = () => {
    return (
        <div>
            <h1>Registration part of the page</h1>
            <RegistrationForm 
                title="Feeling helpful?" 
                text="Even the smallest task can really help" 
                button="Sign up to help"/>  
            <RegistrationForm 
                title="Need a hand?" 
                text="People are good" 
                button="Sign up for help"/>          
        </div>
    )
}

export default Registration
