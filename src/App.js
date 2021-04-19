import Header from './layout/header/Header'
import MissionStatement from './layout/body/MissionStatement'
import SupportCases from './layout/body/SupportCases' 
import Registration from './layout/body/Registration'

function App() {
  return (
    <div className="App">
      <Header />
      <MissionStatement />
      <SupportCases />
      <Registration />
    </div>
  );
}

export default App;
