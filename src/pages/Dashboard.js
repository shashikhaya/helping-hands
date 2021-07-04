const Dashboard = () => {
  const account = JSON.parse(localStorage.getItem("account"));
  return (
    <div>
      <h1> You are logged in as: {account.username}</h1>
      <h1> Current location: {account.location.type}</h1>
      <h1> Role: {account.role}</h1>
    </div>
  );
};

export default Dashboard;
