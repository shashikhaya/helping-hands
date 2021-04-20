import Header from './layout/header/Header'
import MissionStatement from './layout/body/MissionStatement'
import SupportCases from './layout/body/SupportCases' 
import Registration from './layout/body/Registration'
import Footer from './layout/footer/Footer'

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <MissionStatement />
      <SupportCases />
      <Registration />
      <Footer />
    </div>
  );
}

export default App;
