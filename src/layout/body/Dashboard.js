const Dashboard = ({account}) => {
    const acco = JSON.parse(localStorage.getItem('account'));
    return (
        <div>
            <h1> You are logged in as :{acco.username}</h1>
            <h1> Current location :{acco.location.type}</h1>
            <h1> Role :{acco.role}</h1>   
        </div>
    )
}

export default Dashboard
